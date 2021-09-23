import Img from "next/image";
const CardNews = ({ path, title, author }) => {
  return (
    <div
      className="flex flex-col space-y-2 cursor-pointer
      transform transition w-60 h-auto duration-200 hover:scale-105 
      whitespace-nowrap"
    >
      <Img className="rounded-xl" src={path} alt="" />
      <p className="font-bold truncate">{title}</p>
      <div className="flex justify-between">
        <p>{author}</p>
        <span>3 min read</span>
      </div>
    </div>
  );
};

export default CardNews;
