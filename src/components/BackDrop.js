const BackDrop = ({ show, click }) => {
  return (
    show && (
      <div
        className="w-full h-screen z-1000 fixed
        top-0 left-0 backdrop-filter backdrop-blur-sm"
        onClick={click}
      ></div>
    )
  );
};

export default BackDrop;
