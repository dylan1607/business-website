import Img from "next/image";
import landing from "../statics/landing.jpeg";

const CardNews = ({ path, title, author }) => {
  return (
    <div
      className="flex flex-col space-y-2 cursor-pointer
      transform transition w-60 h-auto duration-200 hover:scale-105 
      whitespace-nowrap"
    >
      <Img
        className="rounded-xl"
        src={path ? path : landing}
        alt=""
        height={150}
        width={200}
        layout="responsive"
      />
      <p className="font-bold truncate">{title}</p>
      <div className="flex justify-between">
        <p>{author}</p>
        <span>3 phút đọc</span>
      </div>
    </div>
  );
};

export default CardNews;
