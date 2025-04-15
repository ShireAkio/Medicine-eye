import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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

  // useEffect(() => {
  //   const updateTimeLeft = () => {
  //     const now = new Date();
  
  //     // Get current IST time
  //     const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  //     const nowIST = new Date(now.getTime() + istOffset);
  
  //     let targetIST = new Date(nowIST);
  
  //     // Set target time to 10 PM IST
  //     targetIST.setHours(22, 0, 0, 0);
  
  //     // If it's past 10 PM IST, set target to 5 AM next day
  //     if (nowIST.getTime() >= targetIST.getTime()) {
  //       targetIST.setDate(targetIST.getDate() + 1);
  //       targetIST.setHours(5, 0, 0, 0);
  //     }
  
  //     const diff = targetIST.getTime() - nowIST.getTime();
  
  //     if (diff <= 0) {
  //       setHours(0);
  //       setMinutes(0);
  //       setSeconds(0);
  //       return;
  //     }
  
  //     const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //     const mins = Math.floor((diff / (1000 * 60)) % 60);
  //     const secs = Math.floor((diff / 1000) % 60);
  
  //     setHours(hrs);
  //     setMinutes(mins);
  //     setSeconds(secs);
  //   };
  
  //   updateTimeLeft(); // run once on mount
  //   const timer = setInterval(updateTimeLeft, 1000);
  
  //   return () => clearInterval(timer);
  // }, []);
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
    
    const templateParams = {
      name: form.name,
      phone: form.phone,
      address: form.address,
      pincode: form.pincode,
      to_email: "your_email@example.com", 
    };
    
    emailjs.send(
      'service_lh46qc5', 
      'template_ole0tpc', 
      templateParams,
      '3ewQRIokNpJA-NPa9' 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Order received! You'll be contacted shortly.");
      setForm({ name: "", phone: "", address: "", pincode: "" }); // Reset form
    }, (err) => {
      console.error('FAILED...', err);
      alert("Something went wrong. Please try again.");
    });
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdHdZHLJ7kQ7b8_BnX-ZPkhfwg2CPGjkQDw&s",
      text: `Mere Mummy Apne Ankho Ko le Kar Bhut Pershan Thi Fir Ek Din Maine Vision Amrit Ka Ads Facebook Par Dekha Order Kiya Mere Mummy ek 1 month use karne ke baad muje btya ki abn unke ankho mai phle se aram hai Thankyou Vision Amrit`
    },
    {
      name: "Rajeev Arora",
      image: "https://imgs.search.brave.com/Bq9Nko1W0T9Hc8njOexb4hu1Pp0i5MOa1CHf-jLTnjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/bmRpYW4tbWFuLXBv/cnRyYWl0LXRlbXBs/ZV81Mzg3Ni0xNDUz/NS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
      text: `Hello Team Vision Amrit Muje Dwa Mnage Hue Aaj 20 Din se Upar hogye Hai Phle To muje lga tha yeh fruad hai but ab isko ishtmal karne ke baad muje Vision Amrit pr pura bharosa hai thankyou Vision Amrit`
    },
    {
      name: "Abhishek Singh",
      image: "https://imgs.search.brave.com/40SnPJNUIiVJX1M947WAkMKXl1MXme2ZMeOaZ2UGzQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/Mjk4NTgyL3Bob3Rv/L3Byb2ZpbGUtb2Yt/YW4tYXNpYW4tbWFu/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZelZaU20teDJO/YlRTRmc2eGQ4VEZE/ZXo3TjRYSmFtMm45/aXBXaWFkLWxVPQ",
      text: `Hello बढ़ती उम्र के कारण, मेरी आँखों में समस्या आ गई थी। एक दिन में फेसबुक चला`
    },
    {
      name: "Shikha Singh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhl5_Rjr92qRbO3zzt9i6JnQ3XJNhsB7zIg&s",
      text: `Mainne apni dadi ke liye dawa mangwayi thi, aaj mujhe mangwayi ek mahina ho gaya, par jab maine mangwayi thi iska price ₹3000 tha. Abhi aap logon ne isko 50% off diya hai. Dawa bahut asardaar hai, par aap logon ne mujhe 50% off nahi diya.`
    },
    {
      name: "Raj Malhotra",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: `Bachpan se hi meri aankhon mein samasya thi, door ka padhna aur zyada der phone chalane mein mujhe samasya hoti thi. Ek din main apne ek dost ke paas gaya, jo ab chashma lagana chhod chuka tha. Maine usse poocha, 'Yeh kaise hua? Aapne chashma lagana kaise chhod diya?' Tab usne mujhe Vision Amrit ke baare mein bataya. Maine bhi Vision Amrit a order karke mangwaya. Dawa do se teen din mein aa gayi. Maine dawa ek mahina istemal ki aur aaj ek saal ho chuka hai, mujhe chashma lagane ki zarurat nahi padi hai. Main door ka padh bhi sakta hoon, likh bhi sakta hoon aur dekh bhi sakta hoon. Shukriya Vision Amrit..`
    },
    {
      name: "Manjeet Kumar",
      image: "data:image/jpeg;base64,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",
      text: `मेरी लड़की की आँखों में समस्या थी। वह दूर का पढ़ नहीं सकती थी और चश्मा का उपयोग करती थी, जिससे उसे स्कूल में बहुत ज़्यादा टॉर्चर किया जाता था। एक दिन मैंने विज़न अमृत के बारे में देखा और समझा। मैंने अपना नाम और नंबर डाला, तो उनके अधिकारी का मेरे पास कॉल आया। उन्होंने मुझे दवा के बारे में बहुत प्यार से समझाया और आश्वासन दिया कि मेरी लड़की इससे ठीक हो जाएगी। मैंने उनकी बात पर भरोसा करके दवा मंगवाई। मेरी लड़की बारह साल की थी जब मैंने यह दवा मंगवाई थी। आज उसका चौदहवाँ जन्मदिन है, और अब उसका चश्मा पूरी तरह से हट चुका है। धन्यवाद विज़न अमृत।`
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
{/* WhatsApp Floating Button */}
<a 
  href="https://wa.me/+919220537662?text=Hello,%20I'm%20interested%20in%20Vision%20Amrit%20for%20my%20eyes." 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
  style={{ width: '60px', height: '60px' }}
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="w-8 h-8 fill-current"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
</a>
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