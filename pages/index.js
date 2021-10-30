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
import metal from "../statics/metal.svg";
import material from "../statics/material.svg";

// Import component
import CardFeedback from "../components/CardFeedback";
import CardBox from "../components/CardBox";

// Import icon
import { LockClosedIcon } from "@heroicons/react/solid";

// Import function
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";

export default function Home({ blogPosts }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          Manufacturing on Demand | Rapid Prototpying, Custom Parts | TinCNC
        </title>
      </Head>

      {/* <HomeScreen /> */}

      <div className="flex flex-col overflow-hidden ">
        {/* Landing section */}
        <div
          style={{
            backgroundImage: `url("https://pbs.twimg.com/media/DAmD3kJXcAAlqzl?format=jpg&name=4096x4096")`,
          }}
          className=" bg-cover bg-fixed bg-left text-black"
        >
          <div className="mx-8 my-40 space-y-8">
            <div className="space-y-4">
              <h2 className="flex flex-col font-medium text-5xl">
                Sản Xuất Theo
                <br /> Nhu Cầu
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
              <LockClosedIcon width={20} className="text-black" />
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
          <CardBox title="Injection Mold" path={injection} />
          <CardBox title="Sheet Metal" path={metal} />
          <CardBox title="Vật Liệu" path={material} />
        </div>

        {/* Client */}
        <div className="flex flex-col items-center justify-center p-8">
          <div className="flex max-w-screen-md mb-5">
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
        <div className="py-5 space-y-10">
          <p className="text-center text-2xl font-semibold px-4">
            Những khách hàng của chúng tôi nói gì
          </p>
          <div className="flex flex-wrap justify-center space-x-10 space-y-5 px-8">
            <CardFeedback
              src={fanuc}
              content="TinCNC luôn đưa đến những gì chúng tôi cần.
              Chúng tôi nhận hàng đúng nơi và đúng thời điểm. 
              Trang web thân thiện với người dùng"
              author="CEO"
            />
            <CardFeedback
              src={bosch}
              content="TinCNC mang đến sự chuyên nghiệp và dễ dàng. 
              Họ quan tâm đến việc hoàn thành sản phẩm nên tôi không cần phải tung hứng hay quản lý các nhà cung cấp. 
              Chúng tôi mua báo giá, và TinCNC sẽ lo phần còn lại "
              author="Ryan Lambert"
            />
          </div>
        </div>

        {/* Processing */}
        <div className="flex flex-col items-center bg-gray-200 p-10 space-y-10">
          <h2 className="text-center font-semibold text-2xl px-4">
            Làm thế nào để đặt hàng ?
          </h2>
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
        <div className="bg-white py-10 space-y-4">
          <h2 className="text-center font-semibold text-2xl px-8">
            Tìm hiểu cách thiết kế các bộ phận để sản xuất
          </h2>
          <div
            className="flex p-4 space-x-5 justify-between
          overflow-x-scroll scrollbar-hide"
          >
            {blogPosts?.map((item) => (
              <CardNews
                key={item.id}
                id={item.id}
                path={item?.coverImage?.url}
                title={item.title}
                author="Admin"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckucyn6v66g7m01yz259g4qm9/master"
  );

  const { blogPosts } = await graphcms.request(
    `
      { 
        blogPosts {
          id
          title
          content
          coverImage {
            url
          }
        }
      }
    `
  );
  return {
    props: {
      blogPosts,
    },
  };
}
