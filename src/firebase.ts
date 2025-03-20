// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  
   apiKey: "AIzaSyBoqC6S8FvbWhud_PnD6IC4pF61iffe4tI",
  authDomain: "qatar22-d0e6a.firebaseapp.com",
  projectId: "qatar22-d0e6a",
  storageBucket: "qatar22-d0e6a.firebasestorage.app",
  messagingSenderId: "349776944758",
  appId: "1:349776944758:web:6a8dd2558e8ac248570957",
  measurementId: "G-079WEHH5KL"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);
    await setDoc(docRef, data);

    console.log('Document written with ID: ', docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error('Error adding document: ', e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
export { db };
