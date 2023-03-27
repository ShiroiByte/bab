import { useRouter } from "next/router";
import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
const collectionRef = collection(db, "receipt");
export default function ReserveTable() {
  const router = useRouter();
  const RAWdata = router.query;
  let name = RAWdata["name"];
  let id = RAWdata["id"];
  const data = id ? { id: id, name: name, time: new Date() } : null;

  if (data) {
    addDoc(collectionRef, data)
      .then(() => {
        router.push("/info");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  } else {
    console.error("Error: 'id' is undefined");
  }
}
