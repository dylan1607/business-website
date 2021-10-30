import Img from "next/image";
import landing from "../statics/landing.jpeg";
import Link from "next/link";

const CardNews = ({ id, path, title, author }) => {
  return (
    <Link key={id} href={`/articles/${id}`} passHref>
      {/* <Link key={id} href={`/articles`}> */}
      <div
        className="flex flex-col space-y-2 cursor-pointer
      transform transition w-60 h-auto duration-200 hover:scale-105 
      whitespace-nowrap relative"
      >
        {/* <p
          className="absolute top-2 left-2 z-50 text-white
        font-bold font-mono"
        >
          Article: {id}
        </p> */}
        <div>
          <Img
            className="rounded-xl "
            src={path ? path : landing}
            alt=""
            height={150}
            width={200}
            layout="responsive"
          />
        </div>
        <p className="font-bold truncate">{title}</p>
        <div className="flex justify-between">
          <p>{author}</p>
          <span>3 phút đọc</span>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
