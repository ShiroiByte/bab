import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Space from "@/components/Space";
import Start_Button from "@/components/Start_Button";
import GetFont from "@/components/GetFont";


export default function Home() {
  return (
    <>
      <GetFont />
      <center>
        <Header />
        <Space />
        <Welcome />
        <Space />
        <Start_Button />
      </center>
    </>
  );
}
