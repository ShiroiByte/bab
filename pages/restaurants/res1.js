import { db } from "@/utils/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { query, where, select } from "@firebase/firestore";
import EightTable from "@/components/EightTable";
import GetFont from "@/components/GetFont";
import Header from "@/components/Header";
import LeftText from "@/components/LeftText";
import Space from "@/components/Space";
import Table from "@/components/Table";
import TwoTable from "@/components/TwoTable";


const Res1 = () => {
  const objID = "The Gourmet Kitchen";
  let formatType = "";
  const [format, setFormat] = useState([]);

  useEffect(() => {
    const fetchFormat = async () => {
      try {
        const queryFormat = query(
          collection(db, "restaurants"),
          where("name", "==", objID)
        );
        const querySnapshot = await getDocs(queryFormat);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data().formated);
        });
        setFormat(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchFormat();
  },[]);

  const determineFormat = () => {
    switch (format[0]) {
      case "0":
        formatType = "482";
        break;
      case "1":
        formatType = "824";
        break;
      case "2":
        formatType = "284";
        break;
    }
  };
  determineFormat();

  if (formatType == "482") {
    return (
      <div>
        <GetFont />
        <Header />
        <Space />
        <LeftText text={"Choose the table from the layout"} />
        <center>
          <div className="table_layout1">
            <div className="fourtable">
              <Table url={"/events/reserveTable"} text={"4 people"} id={40} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={41} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={42} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={43} resName={objID} />
            </div>
            <div className="eighttable">
              <EightTable url={"/events/reserveTable"} text={"8 people"} id={80} resName={objID} />
            </div>
            <div className="twotable">
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={20} resName={objID} />
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={21} resName={objID} />
            </div>
          </div>
        </center>
      </div>
    );
  } else if (formatType == "824") {
    return (
      <div>
        <GetFont />
        <Header />
        <Space />
        <LeftText text={"Choose the table from the layout"} />
        <center>
          <div className="table_layout1">
            <div className="eighttable">
              <EightTable url={"/events/reserveTable"} text={"8 people"} id={80} resName={objID} />
            </div>
            <div className="twotable">
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={20} resName={objID} />
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={21} resName={objID} />
            </div>
            <div className="fourtable">
              <Table url={"/events/reserveTable"} text={"4 people"} id={40} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={41} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={42} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={43} resName={objID} />
            </div>
          </div>
        </center>
      </div>
    );
  }
  if (formatType == "284") {
    return (
      <div>
        <GetFont />
        <Header />
        <Space />
        <LeftText text={"Choose the table from the layout"} />
        <center>
          <div className="table_layout1">
            <div className="twotable">
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={20} resName={objID} />
              <TwoTable url={"/events/reserveTable"} text={"2 people"} id={21} resName={objID} />
            </div>
            <div className="eighttable">
              <EightTable url={"/events/reserveTable"} text={"8 people"} id={80} resName={objID} />
            </div>
            <div className="fourtable">
              <Table url={"/events/reserveTable"} text={"4 people"} id={40} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={41} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={42} resName={objID} />
              <Table url={"/events/reserveTable"} text={"4 people"} id={43} resName={objID} />
            </div>
          </div>
        </center>
      </div>
    );
  }
}


export default Res1
