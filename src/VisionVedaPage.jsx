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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center text-center" style={{ height: "4cm", minHeight: "200px" }}>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            आपकी आँखों की रोशनी वापस ला सकता है Vision Veda
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            1 टैबलेट रात को सोने से पहले लें, इससे 10 दिन में आपकी आँखों की रोशनी वापस आ जाएगी।
          </p>
          <button
            onClick={openPopup}
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition duration-200 ease-in-out focus:ring"
          >
            अभी ऑर्डर करें
          </button>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full relative">
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200 ease-in-out focus:ring w-full"
                >
                  सबमिट करें
                </button>
              </form>
            </div>
          </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="/images/4f04c6d4-e16f-11eb-a36b-cbbf425404a0_1625920833567.avif"
            alt="Doctor Consultation"
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-800">हमारे कंसल्टेंट से बात करना क्यों ज़रूरी है?</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Vision Veda दवा हर व्यक्ति के लिए अलग-अलग तरह से काम कर सकती है। हमारी टीम के आयुर्वेदिक कंसल्टेंट आपकी आँखों की स्थिति, उम्र, जीवनशैली और अन्य स्वास्थ्य समस्याओं को समझकर आपके लिए सबसे उपयुक्त डोज़ और कोर्स तय करते हैं। यह व्यक्तिगत मार्गदर्शन उपचार को अधिक प्रभावशाली बनाता है।
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20consult%20about%20Vision%20Veda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-green-600 w-full sm:w-auto flex items-center justify-center gap-2 transition focus:ring"
              >
                <span>📱</span>
                WhatsApp पर बात करें
              </a>
              <a
                href="tel:+919999999999"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center gap-2 transition focus:ring"
              >
                <span>📞</span>
                कॉल करें: +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Before & After</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img src="/images/5.webp" alt="Before and After 1" className="mx-auto mb-4 rounded-xl object-cover shadow-md max-w-full h-auto" />
            <p>“मेरे पिताजी को नई रोशनी मिली। अब सब कुछ देख सकते हैं। धन्यवाद Vision Veda!”</p>
          </div>
          <div className="text-center">
            <img src="/images/sc5-img4.gif" alt="Before and After 2" className="mx-auto mb-4 rounded-xl object-cover shadow-md max-w-full h-auto" />
            <p>“पहले धुंधला दिखता था, अब सब साफ़ दिख रहा है – केवल 5 दिन में असर!”</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">डॉ. नितिन के बारे में</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            डॉ. नितिन पिछले 20 वर्षों से आयुर्वेदिक चिकित्सा में कार्यरत हैं और उन्होंने हजारों मरीजों की आँखों की समस्याओं का सफलतापूर्वक इलाज किया है।
            उनकी विशेषज्ञता और अनुभव के कारण Vision Veda जैसे उत्पाद को सफल बनाया गया। उन्होंने हिमालयी जड़ी-बूटियों और पारंपरिक आयुर्वेदिक नुस्खों को
            मिलाकर एक अनोखा इलाज विकसित किया है जो बिना सर्जरी के आँखों की रोशनी लौटाने में सहायक है।
          </p>
        </div>
        <div className="relative w-full flex justify-between mt-8">
          <img
            src="/images/5qcGc.webp"
            alt="Dr. Nitin Bottom Left"
            className="w-24 sm:w-36 md:w-44 rounded-xl shadow-md"
          />
          <img
            src="/images/7f376.avif"
            alt="Dr. Nitin Top Right"
            className="w-24 sm:w-36 md:w-44 rounded-xl shadow-md"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-yellow-50 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">एक आयुर्वेदिक समाधान</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed">
            Vision Veda एक आयुर्वेदिक दवा है जो आँखों की रोशनी को लौटाने में मदद करती है। इसे डॉक्टर और दुकानदारों ने मिलकर तैयार किया है।
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-200 ease-in-out focus:ring">
            ₹499 में आज ही पाएं
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white text-center py-10">
        <div className="max-w-xl mx-auto">
          <img
            src="/images/vision veda (1).webp"
            alt="Vision Veda"
            className="mx-auto mb-4 max-w-full h-auto rounded-xl object-cover shadow-md"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 text-lg rounded-full font-semibold hover:bg-red-700 transition duration-200 ease-in-out focus:ring-2 focus:ring-red-400"
            >
              (ORDER NOW) 50% छूट के साथ ऑर्डर करें
            </button>
          </form>
        </section>

        <section className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-6">User Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Vision Veda | सभी अधिकार सुरक्षित</p>
      </footer>
    </div>
  )
}
