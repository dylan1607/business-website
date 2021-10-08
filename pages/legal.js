import Link from "next/link";

const Legal = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 py-20">
          <p className=" text-center text-3xl font-bold">
            Điều khoản và Thỏa thuận
          </p>
        </div>
        <div
          className="flex flex-col text-center text-blue-500 text-xl
      space-y-4 my-20"
        >
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/drive/folders/1mYHeLM3HSkgFnvQDW9eJc4hOuK8QhTG2?usp=sharing"
          >
            Điều Khoản Và Chính Sách
          </Link>
        </div>
      </div>
    </>
  );
};

export default Legal;
