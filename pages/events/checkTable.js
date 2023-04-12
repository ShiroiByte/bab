import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection,where,query,getDocs, limit } from "firebase/firestore";
import { db } from "@/utils/firebase";
const CheckTable = () => {
  const router = useRouter();
  const RAWdata = router.query;
  let name = RAWdata["name"];
  let id = RAWdata["id"];
  let meas = 0;
  const [isValid, setValidity] = useState(true);
  useEffect(() => {
    async function fetchRequiredDoc() {
      if (name) {
        const q = query(
          collection(db, "receipt"),
          where("id", "==", id),
          where("name", "==", name)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setValidity(false);
        });
      }
    }

    fetchRequiredDoc();
  }, [name]);

  function checkValidity2(){
    if(!isValid){
      router.push("../error")



    }
  }

  function checkValidity1(){
    if(isValid){
      router.push({
        pathname: "../events/reserveTable",
        query:{id:`${id}`,name:`${name}`} 
      })
 

    }
  }
  checkValidity1()
  checkValidity2()
   
  console.log(meas)





  return <div>
    {isValid}
  </div>;
};

export default CheckTable;
