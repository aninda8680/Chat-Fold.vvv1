// src/firebase/firebaseThreads.ts
import { db } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export const createNewThread = async (userId: string, model: string = "gpt-4") => {
  const threadRef = collection(db, "users", userId, "threads");
  const newThread = await addDoc(threadRef, {
    name: "New Chat",
    model,
    createdAt: serverTimestamp(),
  });
  return newThread.id;
};

export const getUserThreads = async (userId: string) => {
  const threadsRef = collection(db, "users", userId, "threads");
  const q = query(threadsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const deleteThread = async (userId: string, threadId: string) => {
  await deleteDoc(doc(db, "users", userId, "threads", threadId));
};
