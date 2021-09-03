const CardBox = ({ title, path }) => {
  return (
    <div
      className="group flex flex-col items-center p-6 border-2 my-4
     shadow-xl w-48 space-y-3 transition ease-in-out duration-200 
     hover:bg-blue-100"
    >
      <h1 className=" font-bold">{title}</h1>
      <img width={100} src={path} alt="" />
      <div className="btn btn-info">
        <p className="text-sm">Start a quote</p>
      </div>
      <div className="btn btn-ghost">Learn More</div>
    </div>
  );
};

export default CardBox;
