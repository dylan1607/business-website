// import library
import { Link } from "react-router-dom";
import { useState } from "react";

// import icon, image
import CardBox from "../components/CardBox";
import printer from "../statics/printer3d.svg";
import process from "../statics/process.svg";
import injection from "../statics/injection.svg";
import fanuc from "../statics/fanuc.svg";
import makino from "../statics/makino.svg";
import bosch from "../statics/bosch.svg";
import { LightningBoltIcon } from "@heroicons/react/outline";
import { LockClosedIcon } from "@heroicons/react/solid";
import CardNews from "../components/CardNews";
import CardFeedback from "../components/CardFeedback";

const HomeScreen = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex flex-col overflow-hidden ">
      {/* Landing section */}
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
        }}
        className="bg-cover bg-center text-white"
      >
        {/* <video width={600} autoPlay loop muted>
          <source src={landing} type="video/mp4" />
        </video> */}
        <div className="mx-8 my-40 space-y-8">
          <div className="space-y-4">
            <p className="flex flex-col font-medium text-5xl">
              <span>Manufacturing on</span>
              <span>Demand</span>
            </p>
            <p>
              Delivering the future of manufacturing and global sourcing now.
            </p>
          </div>
          <div className="btn btn-info text-white">
            <p>Get Your Quotation</p>
          </div>
          <div className="flex items-center space-x-2">
            <LockClosedIcon width={20} className="text-white" />
            <p>All uploads are secure and confidential</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        className="flex items-center justify-between overflow-x-scroll
      space-x-5 py-10 px-4 scrollbar-hide"
      >
        <CardBox title="CNC Machining" path={process} />
        <CardBox title="3D Printer" path={printer} />
        <CardBox title="Injection" path={injection} />

        <CardBox title="Analyze" path={injection} />
        <CardBox title="QC/QA" path={injection} />
        <CardBox title="Material" path={injection} />
      </div>

      {/* Client */}
      <div className="flex flex-col items-center justify-center p-8">
        <div
          className="flex w-screen items-center justify-between
        px-10 space-x-10 overflow-x-scroll mb-10 scrollbar-hide"
        >
          <img src={fanuc} width={150} alt="" />
          <img src={bosch} width={150} alt="" />
          <img src={makino} width={150} alt="" />
        </div>
        <span>
          Trusted by Engineers and Purchasing Leaders at the World's Most
          Successful Companies
        </span>
      </div>

      {/* Feedback */}
      <div className="py-10 space-y-10">
        <p className="flex justify-center text-center text-3xl font-semibold px-8">
          What Our Customers Say
        </p>
        <div className="flex justify-center space-x-10 px-8">
          <CardFeedback
            src={fanuc}
            content="TinCNC has always given us exactly what we needed. We’ve received parts with holes in the right places, with the right finish, and on time. Their user-friendly website means faster turnaround"
            author="CEO"
          />
        </div>
      </div>

      {/* News section */}
      <div className="bg-gray-100 py-10 space-y-10">
        <p className="flex justify-center text-center items-center font-semibold text-3xl px-4">
          Learn How to Design Custom Parts for Manufacturing
        </p>
        <div className="flex p-4 space-x-8 overflow-x-scroll scrollbar-hide">
          <CardNews
            path="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
            title="What Every Designer Needs to Know ?"
            author="Admin"
          />
          <CardNews
            path="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
            title="What Every Designer Needs to Know ?"
            author="Admin"
          />
          <CardNews
            path="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
            title="What Every Designer Needs to Know ?"
            author="Admin"
          />
          <CardNews
            path="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
            title="What Every Designer Needs to Know ?"
            author="Admin"
          />
          <CardNews
            path="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
            title="What Every Designer Needs to Know ?"
            author="Admin"
          />
        </div>
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