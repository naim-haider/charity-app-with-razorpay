import React from "react";

const Cards = [
  {
    title: "Ensure Education For Every Poor Children",
    raised: 20000,
    goal: 35000,
    progress: 70,
    image:
      "https://th.bing.com/th/id/OIP.hFZkYw4EAGZ5QVHQdS9QhAHaEo?rs=1&pid=ImgDetMain",
  },
  {
    title: "Providing Healthy Food For The Children",
    raised: 20000,
    goal: 35000,
    progress: 25,
    image:
      "https://th.bing.com/th/id/OIP.OVVSuzE3uPtZvQOtkhe7HgHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Supply Drinking Water For The People",
    raised: 20000,
    goal: 35000,
    progress: 50,
    image: "https://www.unicef.ie/app/uploads/2021/06/UN0364904-1024x683.jpg",
  },
  {
    title: "Ensure Education For Every Poor Children",
    raised: 20000,
    goal: 35000,
    progress: 70,
    image:
      "https://images.prismic.io/unicef-nz/341b849d-2c75-4bc9-9ed5-8cc0cd541b51_UN0685801.jpg?w=1200",
  },
  {
    title: "Providing Healthy Food For The Children",
    raised: 20000,
    goal: 35000,
    progress: 40,
    image:
      "https://www.asaaseradio.com/wp-content/uploads/2023/03/For-every-child-good-friends.jpg",
  },
  {
    title: "Supply Drinking Water For The People",
    raised: 30000,
    goal: 55000,
    progress: 60,
    image: "https://www.globalgiving.org/pfil/44416/pict_large.jpg",
  },
];

const handleDonate = () => {
  const options = {
    key: "rzp_test_2eyDsrT3RRQSLQ",
    amount: 50000,
    currency: "INR",
    name: "BetterBlues",
    description: "Donation",
    image: "https://via.placeholder.com/100",
    handler: function (response) {
      alert("Payment successful: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Donor Name",
      email: "donor@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#00b894",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

const App = () => {
  return (
    <div className="bg-[#f4fafd] min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-800">BetterBlues</h1>
        <nav className="hidden md:flex space-x-6 text-blue-900 font-medium">
          <a href="#" className="hover:text-green-600">
            Home
          </a>
          <a href="#" className="hover:text-green-600">
            About
          </a>
          <a href="#" className="hover:text-green-600">
            Latest Causes
          </a>
          <a href="#" className="hover:text-green-600">
            Social Events
          </a>
          <a href="#" className="hover:text-green-600">
            Blog
          </a>
          <a href="#" className="hover:text-green-600">
            Contact
          </a>
        </nav>
        <button
          onClick={handleDonate}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow"
        >
          Donate
        </button>
      </header>

      {/* Causes Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-blue-900 mb-3 leading-snug">
                {card.title}
              </h2>
              <div className="mb-3">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  {card.progress}%
                </p>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>
                  Raised: <strong>${card.raised.toLocaleString()}</strong>
                </span>
                <span>
                  Goal: <strong>${card.goal.toLocaleString()}</strong>
                </span>
              </div>
              <button
                onClick={handleDonate}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
              >
                Donate
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
