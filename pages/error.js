import GetFont from "@/components/GetFont";
import Space from "@/components/Space";
import { useRouter } from "next/router";
const Empty = () => {
  const router = useRouter();
  function goBack() {
    router.push("/destination")
  }
  const timeout = setTimeout(goBack,3000);
  return (
    <div>
      <GetFont />
      <center>
        <Space />
        <h1>
          Sorry but this table is taken, please select other
        </h1>
        <h1>(the site will redirect you back automatically)</h1>
        <Space />
        <div className="nyan"></div>
      </center>
    </div>
  );
};

export default Empty;
