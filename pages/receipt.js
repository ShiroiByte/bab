import GetFont from "@/components/GetFont";
import Header from "@/components/Header";
import { useRouter } from "next/router"
import { query, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { orderBy,limit,getDocs } from "firebase/firestore";
const Receipt = () => {
  const router = useRouter();
  const RAWdata = router.query;
  let name = RAWdata["Name"];
  let surname = RAWdata["Surname"];
  let date = RAWdata["Date"];

  const myCollectionRef = collection(db, 'receipt');
  const latestEntryQuery = query(myCollectionRef, orderBy('time', 'desc'), limit(1));

  getDocs(latestEntryQuery)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {

      const latestEntry = querySnapshot.docs[0].data();
      const latestEntryGetName = latestEntry.name; 
      const latestEntryGetTable = latestEntry.id; 
      const latestEntryName = document.getElementById('resname');
      const latestEntryTable = document.getElementById('tablecount');
      latestEntryName.textContent = latestEntryGetName;
      if (latestEntryGetTable/20==1 || latestEntryGetTable/21==1) {
        latestEntryTable.textContent = "Two people"
      }
      if  (latestEntryGetTable/40==1 || latestEntryGetTable/41==1 || latestEntryGetTable/42==1 || latestEntryGetTable/43==1) {
        latestEntryTable.textContent = "Four people"
      }
      if(latestEntryGetTable/80==1){
        latestEntryTable.textContent = "Eight people"
      }

    } else {

      console.log('There are no entries in the collection.');
    }
  })
  .catch((error) => {
    console.error(error);
  });
  return (
    <div>
      <Header/>
      <GetFont/>
      <h1>{name}</h1>
      <h1>{surname}</h1>
      <h1>{date}</h1>
      <h1 id="resname"></h1>
      <h1 id="tablecount"></h1>

    </div>
  )
}

export default Receipt
