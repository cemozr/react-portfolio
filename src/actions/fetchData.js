import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const handleData = async (col) => {
  try {
    const querySnapshot = await getDocs(collection(db, col));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("data fetching failed", error);
  }
};
