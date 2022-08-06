import React, { useContext } from "react";

const Async = (props) => {
  return <>async</>;
};

export default Async;

export async function getServerSideProps() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const res = await fetch(
    "http://10.20.1.82:8080/getProductsBySiteId/1",
    requestOptions
  );

  return {
    props: {
      // singleblog: onejson.response,
    },
  };
}
