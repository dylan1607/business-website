import Image from "next/image";
const CardFeedback = ({ src, content, author }) => {
  return (
    <div className="card w-56 pt-10 bg-gray-100">
      <Image src={src} alt="" height={300} />
      <div className="card-body">
        <p>{content}</p>
        <div className="font-bold">{author}</div>
      </div>
    </div>
  );
};

export default CardFeedback;
