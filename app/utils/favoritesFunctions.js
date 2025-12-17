import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  collection
} from "firebase/firestore";
import { auth, db } from "./firebase";

export async function addToFavorites(movie) {
  const user = auth.currentUser;
  if (!user) return;
  const favesRef = doc(db, "users", user.uid, "favorites", movie.id.toString());
  await setDoc(favesRef, {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
  });
}

export async function removeFromFavorites(movieId) {
  const user = auth.currentUser;
  if (!user) return;
  const favesRef = doc(db, "users", user.uid, "favorites", movieId.toString());
  await deleteDoc(favesRef);
}

export async function getFavorites() {
  const user = auth.currentUser;
  if (!user) return [];
  const favesRef = collection(db, "users", user.uid, "favorites");
  const snapshot = await getDocs(favesRef);
  return snapshot.docs.map((doc) => ({
    id: doc.data().movieId,
    ...doc.data(),
    isFavorite: true
  }));
}

export async function toggleFavorite(movie) {
  const user = auth.currentUser;
  if (!user) return false;
  const favRef = doc(db, "users", user.uid, "favorites", movie.id.toString());
  const existing = await getDoc(favRef);
  if (existing.exists()) {
    await removeFromFavorites(movie.id);
    return false;
  } else {
    await addToFavorites(movie);
    return true;
  }
}
