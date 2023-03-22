import { useRouter } from "next/router";

export default function reserveTable() {
  const router = useRouter();
  const RAWdata = router.query;
  const id = RAWdata["id"];
  const name = RAWdata["name"];

    window.onload = function(){
    window.location.replace = ("localhost:3000/info");
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </div>
  );

}
