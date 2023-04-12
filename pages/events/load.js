import React from "react";
import { useRouter } from "next/router";
const Load = () => {
  const router = useRouter();
  const RAWdata = router.query;
  let name = RAWdata["name"];
  let id = RAWdata["id"];

  function checkValidity1() {
    router.push({
      pathname: "../events/reserveTable",
      query: { id: `${id}`, name: `${name}` },
    });
  }
  const timeout1 = setTimeout(checkValidity1, 2000);

  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default Load;
