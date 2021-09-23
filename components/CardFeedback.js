import Image from "next/image";
const CardFeedback = ({ src, content, author }) => {
  return (
    <div className="card p-4 w-56">
      <Image src={src} alt="" />
      <div className="card-body">
        <p>{content}</p>
        <div className="font-bold">{author}</div>
      </div>
    </div>
  );
};

export default CardFeedback;
