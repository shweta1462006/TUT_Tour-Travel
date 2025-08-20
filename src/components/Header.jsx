import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { faHouse,faLocationDot, faPhotoFilm ,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from "./Contact/ThemeToggle";

import Login from "./Login";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Mode from "./Mode";
import { icon } from "@fortawesome/fontawesome-svg-core";

const navigation = [
  { name: "Home",
    icon: <FontAwesomeIcon icon={faHouse}/>, 
     to: "/", 
     current: true },

 { name: "Destination",
      icon: <FontAwesomeIcon icon={faLocationDot}/>, 
 to: "/Tour", current: false },
  { name: "Gallery",
        icon: <FontAwesomeIcon icon={ faPhotoFilm }/>, 
 to: "/gallery", current: false },
  { name: "Contact us",
        icon: <FontAwesomeIcon icon={faEnvelope}/>, 
 to: "/contact", current: false },
  

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navRef = useRef(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: navRef.current,
      start: "top top",
      end: "bottom top+=1",
      onEnter: () => {
        // tween into glass
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255,165,0,0.3)", // thin orange
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          zIndex: 500,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        // tween back to solid
        gsap.to(navRef.current, {
          backgroundColor: "#f97316", // tailwind orange-400
          backdropFilter: "blur(0px)",
          position: "relative",
          zIndex: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login'); 
  };

  return (
    
    <Disclosure
      as="nav"
      ref={navRef}
      className="w-full bg-orange-400 transition-none"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-50 hover:bg-gray-100 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src="https://www.freeiconspng.com/thumbs/travel-icon/travel-guide-icon-map-ticket-travel-icon-17.png"
                className="h-10 my-auto w-10 filter invert"
              ></img>
            </div>
           
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
{navigation.map((item) => (
  <NavLink
    key={item.name}
    to={item.to}
    className={({ isActive }) =>
      classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-50 hover:bg-gray-700 hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium flex items-center"
      )
    }
  >
    <span className="mr-2">{item.icon}</span>
    <span>{item.name}</span>
  </NavLink>
))}
              </div>
            </div>
          </div>
        <div>
          <button onClick={handleClick} style={{backgroundColor:"#f1bf5c"}} className="hover:border-b-2 border-balck   hover:bg-green-800 h-10 w-20  rounded-full " >login</button>
        </div>
        <div className="ml-10">
                    {/* <Mode/> */}
                    <ThemeToggle/>
                    </div>

        </div>
        
     
      </div>
      
      

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.to}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )
              }
            >
              {item.name}
              
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}