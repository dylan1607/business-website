import landing from "../statics/landing.mp4";
const HomeScreen = () => {
  return (
    <div className="flex flex-col bg-white h-full overflow-hidden">
      <div className="flex items-center justify-center w-screen">
        <div>
          <video autoPlay loop muted>
            <source src={landing} type="video/mp4" />
          </video>
        </div>

        <div className="text-white w-60 space-y-5">
          <h1 className="font-bold text-2xl">
            The Future Manufacturing is Autonomous
          </h1>
          <p>Delivering the future of manufacturing and global sourcing now.</p>
        </div>
      </div>

      <div className="bg-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est
        eos quam sint animi maiores ex dolor dolore libero, quod laborum nostrum
        impedit voluptatibus culpa, minus expedita perspiciatis odit facere?
      </div>
    </div>
  );
};

export default HomeScreen;
