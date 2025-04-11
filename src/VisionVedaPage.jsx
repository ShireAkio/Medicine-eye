import React, { useState } from "react"

export default function VisionVedaPage() {
  const [email, setEmail] = useState("")
  const [form, setForm] = useState({ name: "", phone: "", address: "", pincode: "" })
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Order received! You'll be contacted shortly.")
  }

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const reviews = [
    {
      name: "Kriti Chopra",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Mere Mummy Apne Ankho Ko le Kar Bhut Pershan Thi Fir Ek Din Maine Vision Veda Ka Ads Facebook Par Dekha Order Kiya. Mere Mummy ek 1 month use karne ke baad mujhe btaya ki ab unke aankho mein pehle se aram hai. Thank you Vision Veda!"
    },
    {
      name: "Rajeev Arora",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Hello Team Vision Veda. Muje Dwa Mnage Hue Aaj 20 Din se Upar hogye Hai. Pehle To muje lga tha yeh fraud hai but ab isko ishtmal karne ke baad muje Vision Veda pr pura bharosa hai. Thank you Vision Veda."
    },
    {
      name: "Abhishek Singh",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "Hello, उम्र के कारण, मेरी आँखों में समस्या आ गई थी..."
    }
  ]

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          आपकी आँखों की रोशनी वापस ला सकता है Vision Veda
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          1 टैबलेट रात को सोने से पहले लें, इससे 10 दिन में आपकी आँखों की रोशनी वापस आ जाएगी।
        </p>
        <button
          onClick={openPopup}
          className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
        >
          अभी ऑर्डर करें
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-sm w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={closePopup}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-center text-green-700">
                हमारा कंसल्टेंट आपको कॉल करेगा
              </h2>
              <form action="https://formspree.io/f/mzzeynvo" method="POST" className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="आपका नाम"
                  required
                  className="border p-2 w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="फ़ोन नंबर"
                  required
                  className="border p-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                  सबमिट करें
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Before & After</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img src="src/images/5.webp" alt="Before and After 1" className="mx-auto mb-4 rounded-xl shadow" />
            <p>“मेरे पिताजी को नई रोशनी मिली। अब सब कुछ देख सकते हैं। धन्यवाद Vision Veda!”</p>
          </div>
          <div className="text-center">
            <img src="src/images/sc5-img4.gif" alt="Before and After 2" className="mx-auto mb-4 rounded-xl shadow" />
            <p>“पहले धुंधला दिखता था, अब सब साफ़ दिख रहा है – केवल 5 दिन में असर!”</p>
          </div>
        </div>
      </section>

      {/* Ayurvedic CTA */}
      <section className="py-16 px-6 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-4">एक आयुर्वेदिक समाधान</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Vision Veda एक आयुर्वेदिक दवा है जो आँखों की रोशनी को लौटाने में मदद करती है। इसे डॉक्टर और दुकानदारों ने मिलकर तैयार किया है।
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
          ₹499 में आज ही पाएं
        </button>
      </section>

      {/* Offer Section */}
      <section className="min-h-screen bg-white text-center px-4 py-10">
        <div className="max-w-xl mx-auto">
          <img
            src="https://via.placeholder.com/400x300.png?text=Vision+Veda+Product"
            alt="Vision Veda"
            className="mx-auto mb-4"
          />
          <p className="text-lg font-medium">
            कीमत <s>3000 INR</s> अभी खरीदें और समय सीमा से पहले खरीदें और 50% छूट पाएं केवल (1499 INR) 30 दिन का कोर्स
          </p>
          <h2 className="text-red-600 text-xl font-bold mt-2">50% छूट के साथ ऑर्डर करें</h2>
          <p className="text-gray-700 line-through">Old Price Rs.3000</p>
          <p className="text-2xl text-red-700 font-bold">Rs.1499</p>
          <p className="text-sm text-gray-600 mt-1">Limited Time Offer</p>
          <p className="text-xs text-red-600 font-semibold">10 DAY MONEY BACK GUARANTEE</p>
          <p className="text-base font-bold mt-2">CASH ON DELIVERY</p>
          <p className="text-2xl font-black text-gray-800">EXPIRED</p>
        </div>

        {/* Form */}
        <section className="max-w-md mx-auto mt-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="आपका पूरा नाम"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="आपका मोबाइल नंबर"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Address</label>
              <input
                name="address"
                type="text"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="आपका पूरा पता"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Pincode</label>
              <input
                name="pincode"
                type="text"
                required
                value={form.pincode}
                onChange={handleChange}
                placeholder="आपका क्षेत्र पिनकोड"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 text-lg rounded hover:bg-red-700"
            >
              (ORDER NOW) 50% छूट के साथ ऑर्डर करें
            </button>
          </form>
        </section>

        {/* User Reviews */}
        <section className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-6">User Reviews</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow border">
                <div className="flex items-center gap-4 mb-2">
                  <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full" />
                  <span className="font-medium text-gray-800">{review.name}</span>
                </div>
                <p className="text-sm text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Vision Veda | सभी अधिकार सुरक्षित</p>
      </footer>
    </div>
  )
}
