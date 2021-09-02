const BackDrop = ({ show, click }) => {
  return (
    show && (
      <div
        className="w-full h-screen z-20 fixed
        top-0 left-0 backdrop-filter backdrop-blur-md"
        onClick={click}
      ></div>
    )
  );
};

export default BackDrop;
