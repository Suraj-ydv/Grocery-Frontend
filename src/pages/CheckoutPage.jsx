import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Get geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert("Location permission is needed to continue!");
        }
      );
    }
  }, []);

  const handlePayment = () => {
    if (!location) {
      alert("Location not detected yet.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY", // 🔁 Replace with your Razorpay key
      amount: 1000 * 100, // ₹1000 in paise
      currency: "INR",
      name: "Grocery App",
      description: "Order Payment",
      handler: function (response) {
        alert("✅ Payment Successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Customer Address",
        location: `${location.lat}, ${location.lng}`, 
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Checkout</h2>
      {location ? (
        <div>
          <p>
            Your location:{" "}
            <strong>
              {location.lat}, {location.lng}
            </strong>
          </p>
          <button
            onClick={handlePayment}
            style={{
              padding: "10px 20px",
              background: "#3399cc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Proceed to Payment
          </button>
        </div>
      ) : (
        <p>📍 Detecting location...</p>
      )}
    </div>
  );
};

export default CheckoutPage;
