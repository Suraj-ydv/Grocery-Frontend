import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Ask for location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log("User Location:", latitude, longitude);

          // You can store location in localStorage or pass via state
          localStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }));

          // Redirect to payment page
          navigate('/payment');
        },
        (error) => {
          console.error("Error fetching location:", error.message);
          alert("Location permission is required to place the order.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Add Your Address</h1>
      {/* You can keep your address form fields here */}

      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white px-6 py-2 rounded mt-6"
      >
        Place Order
      </button>
    </div>
  );
};

export default AddAddress;