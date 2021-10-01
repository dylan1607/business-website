import { useState } from "react";
import JotformEmbed from "react-jotform-embed";

// Import Component
import BackDrop from "../components/BackDrop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";

const Quote = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />

      {/* Content */}
      <JotformEmbed src="https://form.jotform.com/211844668719468" />

      <Footer />
    </div>
  );
};

export default Quote;
