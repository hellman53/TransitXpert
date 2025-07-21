"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  // var cursor = document.querySelector("#cursor");
  // var blur = document.querySelector("#cursor-blur");
  // document.addEventListener("mousemove", function (det) {
  //   // console.log(det.x)
  //   cursor.style.left = det.x + "px";
  //   cursor.style.top = det.y + "px";
  //   blur.style.left = det.x - 200 + "px";
  //   blur.style.top = det.y - 200 + "px";
  // });
  const container = useRef(null);
  

  useEffect(() => {
    // GSAP Animations
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.5,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });

    gsap.to("#main", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -10%",
        end: "top -30%",
        scrub: 2,
      },
    });
  }, []);
  const [open, setopen] = useState(false);
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
      {/* <video
        className=""
        autoPlay
        loop
        muted
        src="https://media.istockphoto.com/id/114773416/video/telephoto-city-traffic-with-people.mp4?s=mp4-640x640-is&k=20&c=Ah48wpV1imKdUYU7TRX1-POpOYm8S4rIu4azqJS_eg4="
      ></video> */}

<video
  className=""
  autoPlay
  loop
  muted
  src="https://media.istockphoto.com/id/114773416/video/telephoto-city-traffic-with-people.mp4" height={100} weight={100}
></video>

      <div id="main">
        <div id="page1">
          <h1 className="hidden sm:block">Ride. Relax. Arrive.</h1>
          <h3>
            Welcome to Transit<span className="text-yellow-500">Xpert!</span>
          </h3>
          <p className="">
            Safe, reliable rides with professional drivers. We ensure comfort
            and punctuality for every trip. Your destination, our
            priority.Whether for business or leisure, we're here to get you
            where you need to go.
          </p>
        </div>
        <div id="page2">
          <div id="scroller">
            <div className="scroller-in">
              <h4>Your Ride, Ready</h4>
              <h4>Driven with Care</h4>
              <h4>Arrive in Comfort</h4>
              <h4>Travel Made Easy</h4>
            </div>
            <div className="scroller-in">
              <h4>Your Ride, Ready</h4>
              <h4>Driven with Care</h4>
              <h4>Arrive in Comfort</h4>
              <h4>Travel Made Easy</h4>
            </div>
          </div>
          <div className="about-us flex items-center">
            <div className="about-us-in">
              <h2>ABOUT US</h2>
              <p>
                At TransitXpert, we specialize in providing safe, reliable, and
                affordable transportation services tailored to meet your needs.
                Whether you're commuting to work, catching a flight, or
                exploring the city, our experienced drivers ensure a smooth and
                comfortable ride every time.
              </p>
              <p>
                TransitXpert, your journey is our priority—trust us to get you
                where you need to go, efficiently and stress-free.
              </p>
            </div>
            <div className="flex hidden sm:block ml-4">
              <img
                className="hidden"
                src="https://images.pexels.com/photos/876228/pexels-photo-876228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                className="shadow-white"
                src="https://images.pexels.com/photos/2591894/pexels-photo-2591894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-wrap relative min-h-[80vh]">
            <img
              className="absolute h-[160px] top-0 left-[110px]"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-white.svg"
              alt=""
            />
            <div className="cards-container flex flex-wrap relative justify-center top-8 gap-x-9 ">
              <div className="card" id="card1">
                <div className="overlay">
                  <h4>Driven with Care</h4>
                  <p>
                    “Driven with Care” reflects our dedication to your safety
                    and comfort, ensuring a secure, enjoyable journey with every
                    ride
                  </p>
                </div>
              </div>
              <div className="card" id="card2">
                <div className="overlay">
                  <h4>Arrive in Comfort</h4>
                  <p>
                    “Arrive in Comfort” means you can relax and enjoy the ride,
                    knowing our professional drivers prioritize your comfort and
                    safety throughout your journey with TransitXpert.
                  </p>
                </div>
              </div>
              <div className="card" id="card3">
                <div className="overlay">
                  <h4>Travel Made Easy</h4>
                  <p>
                    “Travel Made Easy” signifies hassle-free booking and
                    seamless rides with TransitXpert, ensuring you reach your
                    destination quickly and comfortably without any stress or
                    complications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sign-up flex justify-center ">
            <img
              className="hidden md:block "
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt="Loading..."
            />
            <h3 className="pb-12">
              Book with TransitXpert today for a fast, comfortable ride wherever
              you need to go!
            </h3>
            <img
              className="hidden md:block"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt="Loading..."
            />
          </div>
        </div>
        <footer className=" bg-zinc-200 z-90">
          <div className="container mx-auto py-8 z-90">
            <div className=" ml-10 grid grid-cols-2 md:flex justify-around">
              <div className="footer-links flex flex-col justify-start align-middle">
                <h1 className="text-black font-bold text-[25px] pr-10">
                  {" "}
                  Transit<span className="text-yellow-500">Xpert</span>
                </h1>
                <div className="flex items-center mt-5">
                  <InstagramIcon
                    className="text-black"
                    style={{ fontSize: 25 }}
                  />
                  <YouTubeIcon
                    className="ml-5 text-black"
                    style={{ fontSize: 25 }}
                  />
                  <TwitterIcon
                    className="ml-5 text-black"
                    style={{ fontSize: 25 }}
                  />
                </div>
              </div>
              <div className="footer-links">
                <h3 className="text-lg font-semibold text-slate-800">
                  Explore
                </h3>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Book a Ride
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Outstation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links">
                <h3 className="text-lg font-semibold text-slate-800">
                  Customer Support
                </h3>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links">
                <h3 className="text-lg font-semibold text-slate-800">Legal</h3>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-slate-600">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 py-4">
            <div className="container mx-auto">
              <p className="text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Tansit
                <span className="text-yellow-600">Xpert</span>. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
function Dropdown() {
  return (
    <div className="flex flex-col absolute top-20 right-1 p-3 bg-black rounded z-50">
      <ul>
        <li className="mr-6 border-b mb-1">
          <a href="/home-page" className="text-slate-300 hover:text-blue-200">
            Home
          </a>
        </li>
        <li className="mr-6 border-b mb-1">
          <a href="#" className="text-slate-300 hover:text-blue-200">
            Outstation
          </a>
        </li>
        <li className="mr-6 border-b mb-1">
          <a href="#" className="text-slate-300 hover:text-blue-200">
            About Us
          </a>
        </li>
        <li className="mr-6 border-b mb-1">
          <a href="#" className="text-slate-300 hover:text-blue-200">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
