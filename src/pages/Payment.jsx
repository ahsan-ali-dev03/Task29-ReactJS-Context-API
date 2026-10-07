import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Payment() {
  const { cart, total } = useCart();

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>💳 Payment</h1>

        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="payment-items">
              {cart.map((item) => (
                <div className="payment-item" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="payment-total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <Link to="/" className="back-shopping">
              ← Return to Shopping
            </Link>

            <h2>Credit Card Payment</h2>

            <form className="payment-form" onSubmit={handlePayment}>
              <label>Cardholder Name</label>

              <input
                type="text"
                placeholder="Enter cardholder name"
                required
              />

              <label>Card Number</label>

              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />

              <div className="card-row">
                <div>
                  <label>Expiry Date</label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>

                <div>
                  <label>CVV</label>

                  <input
                    type="password"
                    placeholder="123"
                    maxLength="3"
                    required
                  />
                </div>
              </div>

              <button type="submit">
                Pay ${total.toFixed(2)}
              </button>

              {paymentSuccess && (
                <p className="payment-success">
                  ✅ Payment successful! Thank you for your purchase.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Payment;