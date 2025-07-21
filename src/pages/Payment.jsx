import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openRazorpay = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 50000,
      currency: 'INR',
      name: 'Your Store',
      description: 'Test Transaction',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Lalith Kishore',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Complete Payment</h1>
      <button
        onClick={openRazorpay}
        className="bg-purple-600 text-white px-6 py-2 rounded"
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default Payment;
