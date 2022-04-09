import React from "react";

export default function Copyright() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <>
      <h6>
        Copyright &copy; 2021-{getYear()} (The) Ian Cannon. All Rights Reserved.
      </h6>
    </>
  );
}
