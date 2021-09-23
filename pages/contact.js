import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const contact = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <div
        className="flex flex-col p-8 items-center space-y-8 
      overflow-hidden"
      >
        <h1 className="font-semibold text-4xl">Contact Us</h1>
        <ul className="bg-gray-300 max-w-md p-6 space-y-4 rounded-b-box">
          <li className="flex items-center space-x-4">
            <LocationMarkerIcon width={30} height={30} />
            <address>
              49/13 Street 22, Phuoc Long B Ward, Distric 9, Ho Chi Minh City
            </address>
          </li>
          <li className="flex items-center space-x-4">
            <PhoneIcon height={30} width={30} />
            <a href="tel:+84933580721">+84 93 3580721</a>
          </li>
          <li className="flex items-center space-x-4">
            <MailIcon height={30} width={30} />
            <a href="mailto:admin@tincnc.vn">admin@tincnc.com</a>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.12300557843!2d106.76925233310695!3d10.828083676582963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526fdf4aad5e7%3A0xd237aa9b5b2eca8e!2sVinahometech%20Nh%C3%A0%20Th%C3%B4ng%20Minh!5e0!3m2!1svi!2s!4v1631172826719!5m2!1svi!2s"
          height={300}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default contact;
