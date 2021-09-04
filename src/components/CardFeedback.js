const CardFeedback = ({ src, content, author }) => {
  return (
    <div className="card bordered w-56">
      <figure>
        <img width={150} src={src} alt="" />
      </figure>
      <div className="card-body">
        <p>"{content}"</p>
        <div className="font-bold">{author}</div>
      </div>
    </div>
  );
};

export default CardFeedback;
