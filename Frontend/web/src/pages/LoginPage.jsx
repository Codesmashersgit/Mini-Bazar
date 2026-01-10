import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login({ dark,toggle}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpSent) {
      // Validate phone number
      if (!/^\d{10}$/.test(phoneNumber)) {
        setMessage("Please enter a valid 10-digit phone number");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsOtpSent(true);
          setMessage("OTP sent successfully. Please enter the OTP.");
        } else {
          setMessage(data.message || "Error sending OTP.");
        }
      } catch (error) {
        setMessage("An error occurred while sending OTP.",error);
      }
      setLoading(false);
    } else {
      // Validate OTP
      if (!/^\d{6}$/.test(otp)) {
        setMessage("Please enter a valid 6-digit OTP");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, otp }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("OTP verified successfully!");
          alert("Login successful! You can now access the product page.");
          setOtp("");
          setPhoneNumber("");
          setIsOtpSent(false);
        } else {
          setMessage(data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        setMessage("Error verifying OTP.",error);
      }
      setLoading(false);
    }
  };

  return (
    <>
      
<Navbar dark={dark} toggle={toggle}/>
      <form onSubmit={handleSubmit}>
        <div
          className={`h-screen w-screen flex flex-col justify-center items-center pt-7 ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } transition-all duration-1000 ease-in-out`}
        >
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/b7eb4f88-4a93-4b68-beac-982d29be81671698648116564-Flat_500--1-.jpg"
            className="md:h-[160px] md:w-[400px] w-[320px] h-[144px]"
            alt="Myntra"
          />

          <div
            className={`md:w-[400px] w-[320px] p-10 ${
              dark
                ? "bg-black text-white border border-slate-200"
                : "bg-white text-black shadow-lg"
            } transition-all duration-1000 ease-in-out`}
          >
            <div className="flex gap-[7px]">
              <p className="font-[sk] text-[20px]">Login</p>
              <p className="text-[20px] opacity-25">or</p>
              <p className="font-[sk] text-[20px]">Signup</p>
            </div>

            {/* Phone Number Input */}
            <div className={`flex items-center border mt-5 transition-all duration-1000 ease-in-out
                 ${dark ? "border-gray-600 bg-gray-800" : "border-gray-400 bg-white"}`}>
  <p className={`bg-slate-100 text-black p-2  
                 ${dark ? "bg-gray-100 text-black" : "bg-gray-300 "} transition-all duration-1000 ease-in-out`}>+91</p>
  <input
    type="tel"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    className="w-full p-2 outline-none placeholder-black dark:text-black placeholder:opacity-35"
    placeholder="Mobile number...(10 Digits)"
    required
  />
</div>


            {/* OTP Input */}
            {isOtpSent && (
              <div className="flex items-center border border-slate-400 mt-5">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-2 outline-none"
                  placeholder="Enter OTP"
                  required
                />
              </div>
            )}

            {/* Terms */}
            <p className="md:text-[12px] text-[11px] mt-8">
              By continuing, I agree to the{" "}
              <a className="text-[#FC427B] font-[sk]" href="">
                Terms of Use
              </a>{" "}
              &{" "}
              <a className="text-[#FC427B] font-[sk]" href="">
                Privacy Policy
              </a>
            </p>

            {/* Submit Button */}
            <button
              className="bg-[#FC427B] text-white font-[sk] p-2 mt-5 w-full uppercase disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : isOtpSent
                ? "Verify OTP"
                : "Continue"}
            </button>

            {/* Message */}
            {message && <p className="mt-4 text-red-500">{message}</p>}

            <p className="mt-8 text-[13px]">
              Having trouble logging in?{" "}
              <a className="text-red-400 font-[sk]" href="">
                Get help
              </a>
            </p>
          </div>
        </div>
      </form>
      
    </>
  );
}

export default Login;
