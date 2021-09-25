/** @format */

import React from "react";
import TableHeader from "./TableHeader";
import TableSection from "./TableSection";

const Table = () => {
  return (
    <div>
      <TableHeader
        titleOne="Description"
        titleTwo="Quantity"
        titleThree="Remove"
        titleFour="Price"
      />
      <TableSection
        title="Streamline Leggings"
        id="1234567890"
        quantity={10}
        price={55}
      />
    </div>
  );
};

export default Table;
