import GetFont from "@/components/GetFont";
import Space from "@/components/Space";
import { useRouter } from "next/router";
const Empty = () => {
  const router = useRouter();
  function goBack() {
    router.push("/info")
  }
  const timeout = setTimeout(goBack,5000);
  return (
    <div>
      <GetFont />
      <center>
        <Space />
        <h1>
          Sorry but it seems like you havent entered your name,surname or date,
          please correct your information
        </h1>
        <h1>(the site will redirect you back automatically)</h1>
        <Space />
      </center>
    </div>
  );
};

export default Empty;
