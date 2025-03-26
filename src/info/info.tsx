import { useState } from 'react';
import { useCart } from '../cartContext';

function Info(props: { handleNextPage: any; setName: any; setPhone: any }) {
  const { total, cartItems } = useCart() as any;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.handleNextPage();
  };
  const [isCheked, setIsChecked] = useState('payfull');
  const [isSelecedted, setIsSelected] = useState(false);

  return (
    <>
      <div className="__className" style={{ zoom: 0.9 }} dir="rtl">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N"></div>{' '}
          <div className="ContentWrapper_container"></div>
        </div>

        <div id="the_cart" className=" " style={{ background: '#000' }}>
          <div className="Popup_popup__1g1zm ">
            <form onSubmit={handleSubmit} id="model_data" method="post">
              <div className="AddressForm_wrapper__xeQ1H">
                <div
                  className="AddressForm_formWrapper__WZq2k"
                  style={{ marginTop: 30 }}
                >
                  <h3
                    className="Typography_h2__Gzo5Y AddressForm_titleMobile__4vv37"
                    style={{ marginBottom: 20 }}
                  >
                    موقع التوصيل
                  </h3>
                  <div className="AddressForm_form__i7dus">
                    <div className="Input_input__eCvQc">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="name"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          onChange={(e) => {
                            props.setName(e.target.value);
                          }}
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          defaultValue=""
                          autoComplete="off"
                          placeholder="الاسم"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          name="address"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          placeholder="العنوان"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_apartment__yHdfK">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          name="apartment"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="apartmentField"
                          defaultValue=""
                          placeholder="  الشقة/البناية السكنية"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_phone__pWBEF">
                      <div className="Input_label__cUSvF Input_active__QHdN6 Input_ignoreRtl__mB_4w">
                        رقم الهاتف
                      </div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="phone"
                          className="Input_element__ukgk4"
                          onChange={(e) => {
                            props.setPhone(e.target.value);
                          }}
                          type="tel"
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          maxLength={12}
                          defaultValue={+971}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Textarea_input__j1c7L">
                      <div
                        className="Textarea_symbolCounter__goJXS"
                        style={{ display: 'none' }}
                      >
                        <p className="Typography_p9__oo5il Textarea_counter__ou38x">
                          0/200
                        </p>
                      </div>
                      <textarea
                        maxLength={200}
                        style={{
                          border: '1px #f2f2f2 solid',
                          margin: 4,
                          background: '#f2f2f2',
                        }}
                        name="notes"
                        className="Textarea_element__i94ZD AddressForm_textAreaPlaceholder"
                        placeholder="ضع تعليمات توصيل للسائق"
                        data-test-id="driverNote"
                        autoComplete="off"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="MarketplaceCardPayment_topContent__K5bEQ"
                style={{ marginTop: '10px' }}
              >
                <h3 className="Typography_h3__HPYxa">حدد موقعك</h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    textAlign: 'center',
                    margin: 15,
                  }}
                >
                  <div
                    style={{
                      background: 'black',
                      padding: '15px 5px',
                      color: 'white',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./home.png" alt="home" height={20} width={20} />
                    البيت
                  </div>
                  <div
                    style={{
                      background: '#f2f2f2',
                      padding: '15px 5px',
                      color: 'black',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./work2.png" alt="home" height={20} width={20} />
                    العمل
                  </div>
                  <div
                    style={{
                      background: '#f2f2f2',
                      padding: '15px 5px',
                      color: 'black',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./loc.png" alt="home" height={20} width={20} />
                    العميل
                  </div>
                </div>
              </div>
              <div
                className="MarketplaceCardPayment_topContent__K5bEQ"
                style={{ marginTop: '10px' }}

              >
                <h3 className="Typography_h3__HPYxa">طريقة الدفع</h3>
                <div
                  data-analytic-label="selectPaymentMethod"
                  data-test-id="choosePayMethodBtn"
                  className="PaymentMethods_paymentMethod__7SC8Y"
                  style={{ background: '#f2f2f2' }}
                onClick={()=>setIsSelected(true)}

                >
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_icon__m0OGl"
                  >
                    <div style={{display:'flex'}}>
                      <img
                        alt="icon"
                        src="/visa.svg"
                        decoding="async"
                        data-nimg="fill"
                        style={{ width: 40, height:40,marginLeft:10 }}
                        className="asyncicon"
                      /> <img
                      alt="icon"
                      src="/mass.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{ width: 40, height:40,marginLeft:10 }}
                      className="asyncicon"
                    /><img
                    alt="icon"
                    src="/mada.svg"
                    decoding="async"
                    data-nimg="fill"
                    style={{ width: 40, height:40,marginLeft:10 }}
                    className="asyncicon"
                  />
                    </div>
                  </span>
                  <p className="Typography_p3__dH_h7 PaymentMethods_label__7E6O1">
                  </p>
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_rightIcon__Y_bPY"
                    style={{ width: 16, height: 16 }}
                  >
<input type="checkbox" checked={isSelecedted} />                    

                  </span>
                </div>
                <div className="OrderInfo_wrapper__GCgIK">
                  <div className="OrderSubCartInfo_cart__81olU">
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <h5 className="Typography_h5__MRrA0 OrderSubCartInfo_merchantName__nPjGh">
                        سلة أسماك الوطنية
                      </h5>
                      <h5
                        className="Typography_h5__MRrA0 OrderSubCartInfo_price__YrjcP"
                        style={{ display: 'none' }}
                      ></h5>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">
                        المنتجات (<strong>{cartItems.length}</strong>)
                      </p>
                      <p className="Typography_p6__xuxGw">
                        <span>{total}</span> ر
                      </p>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">قيمة التوصيل</p>
                      <p className="Typography_p6__xuxGw">0 د.ا</p>
                    </div>
                  </div>
                </div>
                <div
                  className="WithAddresses_list__Q3"
                  style={{ marginTop: 15 }}
                >
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    data-radio={1}
                    style={{ background: '#f2f2f2' }}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull1"
                          defaultValue={20}
                          checked={isCheked === 'payfull'}
                          name="payFull"
                          type="radio"
                          onClick={() => setIsChecked('payfull')}
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull1">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 18, marginBottom: 10, width: 200 }}
                        >
                          دفع قيمة الطلب كاملة
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          سدد اجمالي قيمة الطلب الآن وادفع من خلال بطاقتك واحصل
                          على توصيل مجاني
                        </p>
                      </div>
                    </label>
                  </div>
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    style={{
                      marginTop: 15,
                      marginBottom: 15,
                      background: '#f2f2f2',
                    }}
                    data-radio={2}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull2"
                          defaultValue="0.5"
                          name="payFull"
                          type="radio"
                          onClick={() => setIsChecked('notfull')}
                          checked={isCheked === 'notfull'}
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull2">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 17, marginBottom: 10 }}
                        >
                          دفع مبلغ 10 د.ا فقط لتأكيد طلبك
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          يخصم من قيمة الطلب وادفع الباقي عند الاستلام مع دفع
                          مصاريف توصيل بقيمة 10 د.ا
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="MarketplaceCardPayment_stickyBottomContent__irsnG">
                <div
                  className="VoucherInfo_wrapper__YDPXt"
                  style={{ display: 'none' }}
                >
                  <p className="Typography_p6__xuxGw">قسيمة الخصم</p>
                  <div
                    data-analytic-label="addVoucher"
                    className="VoucherInfo_badge__wLFMy VoucherInfo_add__CQvtJ"
                  >
                    <h3
                      data-test-id="checkout-pay-with-voucher-add"
                      className="Typography_h4__KNXGH"
                    >
                      أضف +
                    </h3>
                  </div>
                </div>
                <div
                  className="PriceInfo_total__fL_R_"
                  style={{ marginTop: 10 }}
                >
                  <h3 className="Typography_h3__HPYxa">المجموع الكلي</h3>
                  <div className="PriceInfo_prices__TmlB4">
                    <h3
                      data-test-id="checkout-pay-with-products-total-price"
                      className="Typography_h3__HPYxa"
                    >
                      {isCheked === 'payfull' ? total : 10} د.ا
                    </h3>
                  </div>
                </div>
                <button
                  type="submit"
                  className="Button_button Button_primary Button_wide__XK76o"
                >
                  <span className="Button_content">
                    متابعة الدفع
                    <p>( {isCheked === 'payfull' ? total : 10} د.ا)</p>
                  </span>
                </button>
              </div>
              <div />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
