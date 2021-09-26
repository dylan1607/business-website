// Import static
import printer from "../statics/printer3d.svg";
import process from "../statics/process.svg";
import injection from "../statics/injection.svg";
import fanuc from "../statics/fanuc.svg";
import makino from "../statics/makino.svg";
import bosch from "../statics/bosch.svg";
import technology from "../statics/technology.svg";
import industry from "../statics/industry.svg";
import boxes from "../statics/boxes.svg";
import logo from "../statics/logo.png";
import landing from "../statics/landing.jpeg";

// Import component
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";
import Footer from "../components/Footer";
import CardNews from "../components/CardNews";
import CardFeedback from "../components/CardFeedback";
import CardBox from "../components/CardBox";

// Import icon
import { LightningBoltIcon } from "@heroicons/react/outline";
import { LockClosedIcon } from "@heroicons/react/solid";

// Import function
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [sideToggle, setSideToggle] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>TinCNC</title>
      </Head>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      {/* <HomeScreen /> */}

      <div className="flex flex-col overflow-hidden ">
        {/* Landing section */}
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
          }}
          className="bg-cover bg-center text-white"
        >
          <div className="mx-8 my-40 space-y-8">
            <div className="space-y-4">
              <h2 className="flex flex-col font-medium text-5xl">
                <p>Sản Xuất Theo</p>
                <p>Nhu Cầu</p>
              </h2>
              <p>
                Mang đến tương lai của ngành sản xuất và nguồn cung ứng toàn cầu
                ngay bây giờ.
              </p>
            </div>
            <Link href="/quote" passHref>
              <p className="btn btn-info">Nhận báo giá ngay</p>
            </Link>
            <div className="flex items-center space-x-2">
              <LockClosedIcon width={20} className="text-white" />
              <p>Tất cả các nội dung tải lên được giữ an toàn và bảo mật</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div
          className="flex items-center justify-between overflow-x-scroll
      space-x-5 p-8 scrollbar-hide"
        >
          <CardBox title="Gia Công CNC" path={process} />
          <CardBox title="In 3D" path={printer} />
          <CardBox title="Injection" path={injection} />

          <CardBox title="Analyze" path={injection} />
          <CardBox title="QC/QA" path={injection} />
          <CardBox title="Material" path={injection} />
        </div>

        {/* Client */}
        <div className="flex flex-col items-center justify-center p-8">
          <div
            className="flex max-w-screen-md items-center justify-between
        overflow-x-scroll mb-10 scrollbar-hide"
          >
            <Image src={fanuc} alt="" />
            <Image src={bosch} alt="" />
            <Image src={makino} alt="" />
          </div>
          <span>
            Được tin tưởng và mua hàng bởi những Kỹ Sư của những Công Ty trên
            toàn thế giới.
          </span>
        </div>

        {/* Feedback */}
        <div className="py-10 space-y-10">
          <p className="text-center text-2xl font-semibold px-4">
            Những khách hàng của chúng tôi nói gì
          </p>
          <div className="flex justify-center space-x-10 px-8">
            <CardFeedback
              src={fanuc}
              content="TinCNC luôn đưa đến những gì chúng tôi cần.
              Chúng tôi nhận hàng đúng nơi và đúng thời điểm. 
              Trang web thân thiện với người dùng"
              author="CEO"
            />
          </div>
        </div>

        {/* Processing */}
        <div className="flex flex-col items-center bg-gray-200 p-10 space-y-10">
          <p className="text-center font-semibold text-2xl px-4">
            Làm thế nào để đặt hàng ?
          </p>
          <div
            className="flex flex-col md:flex-row justify-around items-center
        md:items-start space-y-4 md:space-y-0"
          >
            <div className="flex md:flex-col items-center text-lg space-x-4">
              <div className="rounded-full p-4 border border-blue-500 bg-white">
                <Image width={60} height={50} src={technology} alt="" />
              </div>
              <div className="flex flex-col items-center w-52">
                <p className="font-semibold my-2">
                  Bước 1: Nhận báo giá ngay lập tức
                </p>
                <p>
                  Để nhận báo giá tức thời, chỉ cần tải lên tệp 3D của bạn và
                  chọn quy trình sản xuất, vật liệu, hậu xử lý và số lượng của
                  bạn
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex md:flex-col items-center text-lg space-x-4">
                <div className="rounded-full p-4 border border-blue-500 bg-white">
                  <Image width={60} height={50} src={industry} alt="" />
                </div>
                <div className="flex flex-col items-center w-52">
                  <p className="font-semibold my-2">
                    Bước 2: Xác nhận đơn hàng
                  </p>
                  <p>
                    Sau khi xác nhận đơn hàng của bạn, quá trình sản xuất sẽ bắt
                    đầu. Bạn sẽ nhận được cập nhật trạng thái thường xuyên.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex md:flex-col items-center text-lg space-x-4">
                <div className="rounded-full p-4 border border-blue-500 bg-white">
                  <Image width={60} height={50} src={boxes} alt="" />
                </div>
                <div className="flex flex-col items-center w-52">
                  <p className="font-semibold my-2">Bước 3: Nhận hàng</p>
                  <p>
                    Chúng tôi cung cấp đảm bảo chất lượng, báo cáo chất lượng và
                    theo dõi giao hàng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/quote" passHref>
            <p className="btn btn-info">Nhận báo giá ngay</p>
          </Link>
        </div>

        {/* News section */}
        <div className="bg-white space-y-6 py-8">
          <p className="text-center font-semibold text-2xl px-4">
            Tìm hiểu cách thiết kế các bộ phận để sản xuất
          </p>
          <div
            className="flex items-center justify-between p-2 space-x-5 
            overflow-x-scroll scrollbar-hide"
          >
            <CardNews
              path={landing}
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

      <Footer />
    </div>
  );
}
