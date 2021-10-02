import "../styles/globals.css";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";
import Footer from "../components/Footer";
import { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

// const MessengerCustomerChat = dynamic(() =>
//   import("react-messenger-customer-chat")
// );

function MyApp({ Component, pageProps }) {
  const [sideToggle, setSideToggle] = useState(false);

  return typeof window === "undefined" ? null : (
    <div>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />

      <Component {...pageProps} />
      <MessengerCustomerChat pageId="671656946378930" appId="651615732489589" />

      <Footer />
    </div>
  );
}

export default MyApp;
