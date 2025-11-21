import React from "react";
import { useParams } from "react-router";

const Data = () => {
  const { id } = useParams();

  return (
 {id}
  );
};

export default Data;
