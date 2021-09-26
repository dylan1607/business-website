import Image from "next/image";
import Link from "next/link";
const CardBox = ({ title, path }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 border-2
     shadow-xl space-y-3 transition ease-in-out duration-200 w-60
     hover:bg-blue-50 whitespace-nowrap"
    >
      <h1 className=" font-bold">{title}</h1>
      <Image src={path} alt="" />
      <Link href="/quote" passHref>
        <div className="btn btn-info">
          <p className="text-sm">Start a quote</p>
        </div>
      </Link>
      <div className="btn btn-ghost">Learn More</div>
    </div>
  );
};

export default CardBox;
