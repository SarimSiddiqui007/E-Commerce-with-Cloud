import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

 const handlePlaceOrder = async (e) => {
  e.preventDefault();

  const order = {
    customer,
    items: cartItems,
    total: totalPrice,
    orderDate: new Date().toISOString(),
  };

  setLoading(true);

  try {
    const response = await fetch(
      "https://ecommerce-order-api-eebpctc8bqdyanga.eastasia-01.azurewebsites.net/api/SaveOrder",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to place order");
    }

    const data = await response.json();

    console.log("Azure Response:", data);

    setLoading(false);
    navigate("/order-success");
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to place order. Please try again.");
    setLoading(false);
  }
};

  return (
    <div className="container py-5">
      <div className="row">

        {/* Customer Details */}

        <div className="col-lg-7 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">

              <h3 className="mb-4">Checkout</h3>

              <form onSubmit={handlePlaceOrder}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={customer.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={customer.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="row">

                  <div className="col-md-4 mb-3">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={customer.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>State</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={customer.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      value={customer.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <button
                  className="btn btn-primary w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>

              </form>

            </div>
          </div>
        </div>

        {/* Order Summary */}

        <div className="col-lg-5">

          <div className="card shadow-sm">

            <div className="card-body">

              <h4 className="mb-4">Order Summary</h4>

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
                >

                  <div className="d-flex align-items-center">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      width="60"
                      className="me-3 rounded"
                    />

                    <div>
                      <h6 className="mb-0">{item.title}</h6>
                      <small>
                        Qty : {item.quantity}
                      </small>
                    </div>

                  </div>

                  <strong>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </strong>

                </div>

              ))}

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>₹{totalPrice.toFixed(2)}</h5>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;