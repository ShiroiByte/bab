import GetFont from "@/components/GetFont";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { query, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { orderBy, limit, getDocs } from "firebase/firestore";
import LeftText from "@/components/LeftText";
import Space from "@/components/Space";
import Back from "@/components/Back";
import Finish from "@/components/Finish";
const Receipt = () => {
  const router = useRouter();
  const RAWdata = router.query;
  let name = RAWdata["Name"];
  let surname = RAWdata["Surname"];
  let date = RAWdata["Date"];
  if (name != "" && surname != "" && date != "") {
    const myCollectionRef = collection(db, "receipt");
    const latestEntryQuery = query(
      myCollectionRef,
      orderBy("time", "desc"),
      limit(1)
    );

    getDocs(latestEntryQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const latestEntry = querySnapshot.docs[0].data();
          const latestEntryGetName = latestEntry.name;
          const latestEntryGetTable = latestEntry.id;
          const latestEntryName = document.getElementById("resname");
          const latestEntryTable = document.getElementById("tablecount");
          latestEntryName.textContent = latestEntryGetName;
          if (latestEntryGetTable / 20 == 1 || latestEntryGetTable / 21 == 1) {
            latestEntryTable.textContent = "Two people";
          }
          if (
            latestEntryGetTable / 40 == 1 ||
            latestEntryGetTable / 41 == 1 ||
            latestEntryGetTable / 42 == 1 ||
            latestEntryGetTable / 43 == 1
          ) {
            latestEntryTable.textContent = "Four people";
          }
          if (latestEntryGetTable / 80 == 1) {
            latestEntryTable.textContent = "Eight people";
          }
        } else {
          console.log("There are no entries in the collection.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    router.push("/empty");
  }
  return (
    <div>
      <Header />
      <GetFont />
      <Space />
      <LeftText text={"Information about your reservation:"} />
      <div className="leftText">
        <br />
        <h2>Name and surname:</h2>
        <h1>
          {name} {surname}
        </h1>
        <br />
        <h2>Date:</h2>
        <h1>{date}</h1>
        <br />
        <h2>Location:</h2>
        <h1 id="resname"></h1>
        <br />
        <h2>Table space:</h2>
        <h1 id="tablecount"></h1>
      </div>
      <Back text={"Go back"} url={"/info"}></Back>
      <Finish text={"Finish"} url={"/final"}></Finish>
    </div>
  );
};

export default Receipt;
