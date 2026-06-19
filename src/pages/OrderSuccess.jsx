import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container text-center py-5">

      <h1 className="text-success mb-3">
        ✅ Order Placed Successfully
      </h1>

      <p className="lead">
        Thank you for shopping with us.
      </p>

      <p>
        Your order has been received and will be processed shortly.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Continue Shopping
      </Link>

    </div>
  );
};

export default OrderSuccess;