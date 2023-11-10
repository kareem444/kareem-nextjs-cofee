"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "./firebase";

export default function Home() {
  const [src, setSrc] = useState(
    "https://img.freepik.com/photos-premium/portrait-femme-fantastique-du-futur-ia-generative_538159-9181.jpg"
  );

  useEffect(() => {
    async function getFirstUserFromFirebase() {
      const docRef = doc(firestoreDB, "users", "0gb0AYViuypZLDuWzl7n");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        // setSrc(docSnap.data().src);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getFirstUserFromFirebase();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={src}
        alt="Next.js Logo"
        width={600}
        onError={() =>
          setSrc(
            " https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
          )
        }
        height={300}
        quality={100}
        priority={true}
      />

      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
    </main>
  );
}
