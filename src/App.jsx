import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Payment from "./pages/Payment";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
  },
  {
    id: 3,
    name: "Nike Revolution",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
  },
  {
    id: 4,
    name: "Puma Runner",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 5,
    name: "New Balance 574",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500",
  },
  {
    id: 6,
    name: "Reebok Classic",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
  },
];

function ShoeStore() {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <h1>👟 Shoe Store</h1>
        <p>ReactJS Context API - Shopping Cart</p>
      </header>

      <main className="container">
        <section className="products">
          <h2>Our Shoes</h2>

          <div className="shoe-grid">
            {shoes.map((shoe) => (
              <div className="shoe-card" key={shoe.id}>
                <img src={shoe.image} alt={shoe.name} />

                <h3>{shoe.name}</h3>

                <p className="price">${shoe.price}</p>

                <button onClick={() => addToCart(shoe)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <aside className="cart">
          <h2>🛒 Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-total">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <button
                className="payment-button"
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment
              </button>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ShoeStore />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;