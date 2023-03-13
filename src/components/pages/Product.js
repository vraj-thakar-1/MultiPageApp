import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <section>
        <h1>Products page</h1>
        <li>
          <Link to="/product-detail/book">book</Link>
        </li>
        <li>
          <Link to="/product-detail/carpet">carpet</Link>
        </li>
        <li>
          <Link to="/product-detail/courses">courses</Link>
        </li>
      </section>
    </>
  );
}
