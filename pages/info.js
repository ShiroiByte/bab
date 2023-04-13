import GetFont from "@/components/GetFont";
import Header from "@/components/Header";
import LeftText from "@/components/LeftText";
import Confirm from "@/components/Confirm";
import Back from "@/components/Back";
const info = () => {
  const date = new Date();
  const min = date.toISOString().substring(0, 10);
  return (
    <>
      <GetFont />
      <Header />
      <br />
      <br />
      <form method="get" action="/receipt">
        <LeftText text={"Enter your information"} />
        <br />
        <br />
        <br />
        <LeftText text={"Name"} />
        <input type={"text"} name="Name"></input>
        <br />
        <br />
        <br />
        <LeftText text={"Surname"} />
        <input type={"text"} name="Surname"></input>
        <br />
        <br />
        <br />
        <LeftText text={"Date"} />
        <input type={"date"} min={min} name="Date"></input>
        <br />
        <br />
        <Back text={"Go back"} url={"/destination"}></Back>
        <Confirm text={"Continue"}></Confirm>
      </form>

      <br />
      <br />
    </>
  );
};

export default info;
