import React from "react";
import { useEffect, useState, useRef } from "react";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Space from "@/components/Space";
import { useQRCode } from "next-qrcode";
import Back from "@/components/Back";
import LeftText from "@/components/LeftText";
const Final = () => {
  const { Canvas } = useQRCode();
  const [latestDocument, setLatestDocument] = useState(null);
  useEffect(() => {
    async function fetchLatestDocument() {
      const q = query(
        collection(db, "receipt"),
        orderBy("time", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setLatestDocument(doc.id);
      });
    }

    fetchLatestDocument();
  }, []);

  

  return (
    <div>
      <center>
        <br />
        <h1>Please show this to the waiter</h1>
        <Space />
        <h2>{latestDocument}</h2>
        <Space />
        <Canvas text={latestDocument || "Error"}></Canvas>

      </center>
      <LeftText />
      <Back text={"Go back"} url={"/"} />
    </div>
  );
};

export default Final;
