import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";
import { useState } from "react";
const legal = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <div>
        <div className="bg-gray-100 py-20">
          <p className=" text-center text-3xl font-bold">
            Điều khoản và Thỏa thuận
          </p>
        </div>
        <div
          className="flex flex-col text-center text-blue-500 text-xl
      space-y-4 my-20"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://xometry-marketing.cdn.prismic.io/xometry-marketing/895c7155-a7e9-4299-bc0a-26f78a02223d_Terms+%26+Conditions+04_04_2017.pdf"
          >
            1. Điều Khoản
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://xometry-marketing.cdn.prismic.io/xometry-marketing/895c7155-a7e9-4299-bc0a-26f78a02223d_Terms+%26+Conditions+04_04_2017.pdf"
          >
            2. Thỏa Thuận
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://xometry-marketing.cdn.prismic.io/xometry-marketing/8f98ebfc-88dc-455f-bc3c-74a56edb2ea7_Privacy+Policy+07_02_2020.pdf"
          >
            3. Chính sách bảo mật
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default legal;
