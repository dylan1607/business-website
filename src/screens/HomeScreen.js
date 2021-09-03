import landing from "../statics/landing.mp4";
import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
import printer from "../statics/printer3d.svg";
import process from "../statics/process.svg";
import injection from "../statics/injection.svg";
import { LightningBoltIcon } from "@heroicons/react/outline";
import { useState } from "react";

const HomeScreen = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)`,
        }}
        className="h-screen bg-cover bg-center space-y-14
        flex flex-col justify-center items-center p-10"
      >
        {/* <video width={600} autoPlay loop muted>
          <source src={landing} type="video/mp4" />
        </video> */}
        <div className="text-black space-y-2">
          <p className="flex flex-col font-medium text-5xl">
            <span>Manufacturing on</span>
            <span>Demand</span>
          </p>
          <p>Delivering the future of manufacturing and global sourcing now.</p>
        </div>
        <div className="btn btn-secondary bg-blue-500 text-white">
          <p>Get Your Quotation</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-evenly sm:flex-row ">
        <CardBox title="CNC Machining" path={process} />
        <CardBox title="3D Printer" path={printer} />
        <CardBox title="Data Analysis" path={injection} />
      </div>

      {/* IconChat */}
      <div
        className="fixed bottom-5 right-5 rounded-full z-40 bg-blue-400
      text-white p-2 cursor-pointer animate-bounce"
        onClick={() => setClick(!click)}
      >
        <LightningBoltIcon width={30} />
      </div>

        {/* ShowBoxChat */}
      {click && (
        <div
          className="fixed bottom-12 right-16 bg-gray-400 w-60 h-96
        rounded-xl"
        ></div>
      )}

    </div>
  );
};

export default HomeScreen;
