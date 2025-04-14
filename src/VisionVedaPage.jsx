import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Simple Star component
const Star = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function VisionVedaPage() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", address: "", pincode: "" });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order received! You'll be contacted shortly.");
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  
  const scrollToOrderForm = () => {
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviews = [
    {
      name: "Kriti Chopra",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: `Mere Mummy Apne Ankho Ko le Kar Bhut Pershan Thi Fir Ek Din Maine Vision Amrit Ka Ads Facebook Par Dekha Order Kiya Mere Mummy ek 1 month use karne ke baad muje btya ki abn unke ankho mai phle se aram hai Thankyou Vision Amrit`
    },
    {
      name: "Rajeev Arora",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: `Hello Team Vision Amrit Muje Dwa Mnage Hue Aaj 20 Din se Upar hogye Hai Phle To muje lga tha yeh fruad hai but ab isko ishtmal karne ke baad muje Vision Amrit pr pura bharosa hai thankyou Vision Amrit`
    },
    {
      name: "Abhishek Singh",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: `Hello बढ़ती उम्र के कारण, मेरी आँखों में समस्या आ गई थी। एक दिन में फेसबुक चला`
    },
    {
      name: "Shikha Singh",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      text: `Mainne apni dadi ke liye dawa mangwayi thi, aaj mujhe mangwayi ek mahina ho gaya, par jab maine mangwayi thi iska price ₹3000 tha. Abhi aap logon ne isko 50% off diya hai. Dawa bahut asardaar hai, par aap logon ne mujhe 50% off nahi diya.`
    },
    {
      name: "Raj Malhotra",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: `Bachpan se hi meri aankhon mein samasya thi, door ka padhna aur zyada der phone chalane mein mujhe samasya hoti thi. Ek din main apne ek dost ke paas gaya, jo ab chashma lagana chhod chuka tha. Maine usse poocha, 'Yeh kaise hua? Aapne chashma lagana kaise chhod diya?' Tab usne mujhe Vision Amrit ke baare mein bataya. Maine bhi Vision Amrit a order karke mangwaya. Dawa do se teen din mein aa gayi. Maine dawa ek mahina istemal ki aur aaj ek saal ho chuka hai, mujhe chashma lagane ki zarurat nahi padi hai. Main door ka padh bhi sakta hoon, likh bhi sakta hoon aur dekh bhi sakta hoon. Shukriya Vision Amrit..`
    },
    {
      name: "Manjeet Kumar",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      text: `Meri ladki ki ānkhon meṁ samasyā thī. Wō dūr kā paṛh nahīn saktī thī aur chashmā kā upyōg kartī thī, jisse usē skūl meṁ bahut zyada torture kiyā jātā thā. Ek din maine Vision Amrit ke baare meṁ dekhā aur samjhā. Maine apnā nām aur number dālā, tō unke adhikārī kā mere paas call āyā. Unhone mujhe dava ke baare meṁ bahut pyār se samjhāyā aur āswāsan diyā ki merī ladkī isse thīk ho jāyegī. Maine unkī baat par bharosā karke dava mangwāyī. Merī ladkī bārah saal kī thī jab maine yeh dava mangwāyī thī. Āj uskā chaudahwā janmdin hai, aur ab uska chashmā pūrī tarah se hat chukā hai Thankyou Vision Amrit`
    },
    {
      name: "Gaurav Arora",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      text: `नई तकनीक से बना आयुर्वेदिक दवा है जिससे आपका नंबर दिन प्रतिदिन कम होगा और आप मोतियाबिंद से बचेंगे। मेरे पास दवा आई और मैंने इस्तमाल शुरू किया। बहुत अच्छा प्रोडक्ट है।`
    }
  ];

  return (
      
    <div className="bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto p-4">
        {/* Hero Section */}
<div className="bg-white rounded-lg shadow-sm mb-6">
  <h1 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-1 pt-4 px-4">
    क्या?आप भी मोतियाबिंद से पीड़ित हैं?
  </h1>
  <h2 className="text-xl md:text-2xl font-bold text-center text-red-500 mb-4 px-4">
    एक सप्ताह में आपकी दृष्टि वापस आ जाएगी!!!! 100% गारंटी
  </h2>

  <div className="flex flex-col md:flex-row mb-4">
    <div className="w-full md:w-1/2 relative">
      <img
        src="/images/21.jpg"
        alt="Dr. Madhuresh Tomar"
        className="w-full object-cover" 
      />
      
      <div className="absolute top-0 right-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
          alt="Indian Flag" 
          className="w-12 h-8"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <p className="text-sm mb-4">
        एक अनुभवी डॉक्टर, उन्होंने मोतियाबिंद के इलाज (आंखों की दृष्टि बहाल करने के लिए)
        की एक विधि विकसित की है। जो वाकई बहुत प्रभावशाली है। आइए जानते हैं उनके
        इंटरव्यू के जरिए...
      </p>
      
      <p className="font-medium mb-3">
        Dr. Madhuresh Tomar.... अभ्यास अनुभव: 10 वर्ष से अधिक:
      </p>
      
      <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
        <li><strong>काला मोतियाबिंद से छुटकारा.</strong></li>
        <li><strong>सफ़ेद मोतियाबिंद से छुटकारा.</strong></li>
        <li>पास या दूर का देखने में हो रही है परेशानी.</li>
        <li>चश्मे का नंबर होगा गायब.</li>
        <li>रंगों में बदलाव महसूस होना.</li>
      </ul>
      
      <p className="text-sm mb-4">
        आंखों की रोशनी बहाल करने का आयुर्वेदिक तरीका, 7 दिन में मिलेगा आराम...
      </p>
      
      <p className="text-sm">
        दरअसल रहस्य सरल है. हमें <strong>मोतियाबिंद का कारण</strong> समझना चाहिए। आज EyeRest के
        कई कारण हैं। लेकिन इसका आम कारण है उम्र बढ़ना और खान-पान, क्या आप जानते हैं ऐसा क्यों होता है?
        यह लंबे समय तक खान-पान और आनुवांशिक कारकों के कारण भी हो सकता है।
      </p>
    </div>
  </div>
</div>
        {/* First Order Now Button - consistent styling with the one below */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={scrollToOrderForm}
            className="w-full bg-green-600 text-white text-lg font-bold py-3 px-4 rounded-sm hover:bg-green-700 transition-colors"
          >
            ORDER NOW
          </button>
        </div>

        {/* Doctor Info Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-sm">
              <strong>Dr. Madhuresh Tomar</strong> का कहना है कि मोतियाबिंद (आँखों की रोशनी)
              सबसे गंभीर समस्या है लेकिन इसे 25 दिन में ठीक किया जा सकता है। जहाँ तक
              मोतियाबिंद की बात है तो अगर आप इसका इलाज ठीक से करेंगे तो आपको 7 दिन
              के अंदर परिणाम मिल जाएगा। जो उन्होंने अपने 10 साल के अभ्यास में कई बार
              किया है। डॉ. हां हम भाग्यशाली हैं कि हमें तुषार शाह जैसे महान डॉक्टर का
              साक्षात्कार लेने का अवसर मिला। हां, हम भाग्यशाली हैं कि हमें तुषार शाह
              जैसे महान डॉक्टर का साक्षात्कार लेने का अवसर मिला।
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          {/* Red Heading */}
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
            7 दिन में मिलेगा आराम…
          </h2>

          {/* Doctor Statement */}
          <div className="mb-6 text-sm">
            <p>
              <strong>Dr. Madhuresh Tomar</strong> का कहना है कि मोतियाबिंद (आँखों की रोशनी) सबसे गंभीर समस्या है लेकिन इसे 25 दिन में ठीक किया जा सकता है। जहाँ तक मोतियाबिंद की बात है तो अगर आप इसका इलाज ठीक से करेंगे तो आपको 7 दिन के अंदर परिणाम मिल जाएगा। जो उन्होंने अपने 10 साल के अभ्यास में कई बार किया है।
            </p>
          </div>

          {/* First Before-After Image */}
          <div className="text-center mb-6">
            <img
              src="/images/sc5-img4.gif"
              alt="Before and After Comparison"
              className="w-full max-w-md mx-auto rounded-sm border border-gray-300"
            />
          </div>

          {/* Testimonial */}
          <div className="mb-6 text-sm bg-gray-50 p-4 rounded-sm border-l-4 border-green-500">
            <p>
              वास्तव में यह कारगर है! मैंने मेरे पिता के लिए दवा मंगाई। मेरे पिता को मोतियाबिंद से छुटकारा मिल गया, सच में? स्नेहा पटेल। यह सच है कि दृष्टि वापस आ सकती है। हम इसका इलाज किसी अन्य बीमारी की तरह नहीं कर सकते, कई बार यह इलाज ठीक से नहीं हो पाता और मरीज के स्वास्थ्य पर असर पड़ता है।
            </p>
          </div>

          {/* Second Before-After Image */}
          <div className="text-center mb-6">
            <img
              src="/images/5.webp"
              alt="Before and After Comparison"
              className="w-full max-w-md mx-auto rounded-sm border border-gray-300"
            />
          </div>

          {/* Product Description */}
          <div className="mb-6 text-sm">
            <p className="mb-4">
              Vision Amrit एक आयुर्वेदिक दवा है जो सफलता करती है
            </p>
            <p>
              मेरा मानना था कि मोतियाबिंद का एक सरल समाधान है और एक आधुनिक विधि की आवश्यकता है और मैं इस विधि को खोजने में कामयाब रहा।
            </p>
          </div>
        </div>

        {/* Tablet Instruction Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            1 टैबलेट रात को सोने से पहले 1 गोली लें, इससे 10 दिन में आपकी आंखों की रोशनी वापस आ जाएगी
          </h2>

          {/* Description before certificate */}
          <div className="mb-6 text-sm">
            <p className="mb-4">
              हमारी वेबसाइट पर उपलब्ध है, हमने हमें इस वेब साइट पर बेचने का निर्णय लिया क्योंकि हॉस्टर और दुकान इसे लाभ के लिए बेचते हैं। हमारा लक्ष्य इसे न्यूनतम संभव कीमत पर लोगों को उपलब्ध कराना है.
            </p>
            <p className="mb-4">
              उत्पाद कुरियर सेवा द्वारा भेजा जाता है और सेवा का भुगतान डिलीवर वाले को करना होता है। शिविर की फीस और चश्मा के पैसे बचाने के लिए आप यह इलाज घर पर ही कर सकते है। यहि आप इसकी तुलना किसी और चीज से करना चाहते हैं तो आप कर सकते हैं, लेकिन मेरा मानना है Vision Amrit कोई अन्य उत्पाद इतना प्रभावी नहीं है.
            </p>
            <p className="mb-4">
              Vision Amrit सरकार द्वारा निम्नलिखित प्रमाण पत्र दिया गया है
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/Add a heading.webp"
              alt="Certificate Header"
              className="w-full max-w-lg mx-auto border border-gray-200 rounded-sm shadow-sm"
            />
          </div>

          {/* Second Order Now Button - consistent styling */}
          <div className="mb-6">
            <button 
              onClick={scrollToOrderForm}
              className="w-full bg-green-600 text-white text-lg font-bold py-3 px-4 rounded-sm hover:bg-green-700 transition-colors"
            >
              ORDER NOW
            </button>
          </div>

          {/* Vision Amrit Description Title */}
          <h2 className="text-2xl font-bold text-center mb-4">
            Vision Amrit इसलिए इसका प्रयोग करना चाहिए.
          </h2>

          {/* Vision Amrit Description Content */}
          <div className="mb-6 text-sm">
            <p>
              प्रयोगों से पता चला है कि उत्पाद का फॉर्मूला शुद्ध और प्राकृतिक है और इसका कोई दुष्प्रभाव नहीं है। इसमें मुख्य रूप से दुर्लभ जड़ी-बूटियाँ और प्राकृतिक अर्क शामिल हैं, और उनके प्रभावी की पुष्टि कई राष्ट्रीय प्रयोगशालाओं द्वारा की गई है और सबसे महत्वपूर्ण बात यह है, स्वास्थ्य और परिवार कल्याण मंत्रालय द्वारा अनुमोदित। इसका फॉर्मूला टेस्ट और गोपनीय है और हम इसके अवयवों के बारे में किसी के साथ जानकारी साझा नहीं कर सकते।
            </p>
          </div>
        </div>

        {/* Question Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-center text-blue-900 mb-4">
            क्या आप उन हजारों लोगों में शामिल होना चाहेंगे?
          </h1>
          <div className="text-sm">
            <p className="mb-4">
              मैंने बिना किसी परेशानी के आपको इस उपाय के बारे में सारी जानकारी दे दी है। अब आप जानते हैं कि यह कैसे काम करता है, यह आपको कैसे मदद कर सकता है, और इसका अंतिम उपयोगकर्ताओं पर क्या प्रभाव पड़ता है।
            </p>
            <p className="mb-4">
              मैं आपको न केवल एक समाधान दे रहा हूँ, बल्कि इसके प्रभाव को लेकर गारंटी भी दे रहा हूँ।
            </p>
            <p className="mb-4">
              यदि कोई व्यक्ति इस प्राकृतिक उपाय का उपयोग करता है और उसे वांछित परिणाम नहीं मिलते, तो उसे 100% रिफंड मिलेगा। हमारी कंपनी आश्वस्त करती है कि ये आपके लिए कोई जोखिम नहीं है।
            </p>
            <p className="text-red-600 font-semibold mb-4">
              भारत में हमारी एकमात्र कंपनी जो 100% संतोषजनक परिणाम का वादा करती है।
            </p>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              किसी भी नंबर का चश्मा उतारना है, तो इसे ध्यान से देखें!
            </h3>
            <img 
              src="/images/vision veda (1).webp" 
              alt="Vision Amrit Capsules" 
              className="mx-auto mb-4"
            />
            <h3 className="text-lg text-center mb-2">
              आपकी आँखों के लिए, <span className="text-yellow-600">आयुर्वेदिक उपहार</span>
            </h3>
          </div>
        </div>

        {/* Order Form Section */}
        <div className="bg-white rounded-lg shadow-sm mb-10" id="order-form">
          {/* Header Banner */}
          <div className="bg-black text-white py-3 px-4 rounded-t-lg">
            <h2 className="text-xl font-bold text-center">
              आपकी आँखों के लिए, <span className="text-yellow-400">आयुर्वेदिक उपहार</span>
            </h2>
          </div>
          
          {/* Timer Section */}
          <div className="bg-green-600 text-white text-center py-2">
            Limited Time Offer
          </div>
          
          <div className="border border-gray-300 bg-gray-50 px-4 py-6">
            {/* Timer Display */}
            <div className="flex justify-between border border-gray-300 bg-white rounded-md px-3 py-2 mb-4">
              <div className="text-center">
                <div className="text-red-600 font-bold text-xl">
                  {minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-red-600 font-bold text-xl">
                  {seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
            
            {/* Pricing Section */}
            <div className="text-center mb-6">
              <p className="text-red-600 text-lg font-semibold mb-3">
                52.33% छूट के साथ ऑर्डर करें
              </p>
              <p className="text-lg font-medium mb-1">
                पुरानी कीमत: <span className="line-through">3000 Rs</span>
              </p>
              <p className="text-5xl font-bold text-red-600 mb-4">
                नई कीमत: 1,430 Rs
              </p>
            </div>
            
            {/* Order Form */}
            <form onSubmit={handleSubmit} className="bg-gradient-to-b from-red-500 to-yellow-400 p-4 rounded-lg">
              <div className="mb-3">
                <label className="block text-left mb-1 font-medium">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded border-0" 
                  placeholder="अपना पूरा नाम भरिये" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-left mb-1 font-medium">Active Phone number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  pattern="[0-9]{10}" 
                  value={form.phone} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded border-0" 
                  placeholder="अपना 10 अंकों का सही मोबाइल नंबर डाले" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-left mb-1 font-medium">Address</label>
                <textarea 
                  name="address" 
                  value={form.address} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded border-0 min-h-[80px]" 
                  placeholder="कृपया अपना पूरा पता दर्ज करें अन्यथा आपका ऑर्डर डिलीवर नहीं किया जाएगा!" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-left mb-1 font-medium">Pincode</label>
                <input 
                  type="text" 
                  name="pincode" 
                  pattern="[0-9]{6}" 
                  value={form.pincode} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded border-0" 
                  placeholder="सही पिनकोड भरिए" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-green-700"
              >
                अभी ऑर्डर करें
              </button>
            </form>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="bg-white p-4 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            जानिए हमारे ग्राहक क्या कहते हैं
          </h2>
          
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center text-2xl md:text-4xl font-semibold text-gray-800">
              <span className="text-yellow-500 flex items-center">
                4.8
                <Star className="w-4 h-4 md:w-6 md:h-6 mx-1 fill-yellow-500" />
                <Star className="w-4 h-4 md:w-6 md:h-6 mx-1 fill-yellow-500" />
                <Star className="w-4 h-4 md:w-6 md:h-6 mx-1 fill-yellow-500" />
                <Star className="w-4 h-4 md:w-6 md:h-6 mx-1 fill-yellow-500" />
                <Star className="w-4 h-4 md:w-6 md:h-6 mx-1" />
              </span>
              <span className="ml-2 md:ml-4 text-base md:text-xl font-medium">2765+ reviews</span>
            </div>
          </div>

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h3 className="text-base font-semibold text-green-700">
                    {review.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}