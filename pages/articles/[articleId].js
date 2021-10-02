/* eslint-disable react/no-children-prop */
// Import Static
import logo from "../../statics/logo.svg";

// Import Component
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideDrawer from "../../components/SideDrawer";
import BackDrop from "../../components/BackDrop";

// Import function
import { useState } from "react";
import { fetchQuery } from "../../utils/request";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Article({ article }) {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />

      {/* Content */}
      <div className="flex justify-center">
        <div className="flex flex-col px-4 py-10 max-w-4xl space-y-5">
          <h2 className="font-semibold text-2xl break-words">{article.name}</h2>

          <div className="">
            <div className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <Image className="text-black" src={logo} alt="" width={25} />
                <p>By Team TinCNC</p>
              </span>
              <p>3 phút đọc</p>
            </div>
            <Image
              className="rounded-xl"
              src={article.header}
              alt=""
              width={150}
              height={100}
              layout="responsive"
            />
          </div>

          <div className="flex flex-col space-y-10">
            <ReactMarkdown children={article.content} />
            <ReactMarkdown children={article.footer} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetchQuery("articles", `${params.articleId}`);
  const article = res.data;
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetchQuery("articles");
  const paths = res.data.map((item) => {
    return {
      params: { articleId: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
