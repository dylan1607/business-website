import Link from "next/link";
import Image from "next/image";
import logo from "../statics/logo.svg";

const Footer = () => {
  return (
    // <div className="flex justify-evenly p-4 bg-gray-800 text-white">
    //   <div className="flex flex-col">
    //     <div className="text-xl text-gray-500 mb-4">Quick Links</div>
    //     <div className="flex flex-col space-y-2">
    //       <Link to="">Home</Link>
    //       <Link to="">Services</Link>
    //       <Link to="">About</Link>
    //       <Link to="">Contact Us</Link>
    //     </div>
    //   </div>

    //   <div className="flex flex-col">
    //     <div className="text-xl text-gray-500 mb-4">Source</div>
    //     <div className="flex flex-col space-y-2">
    //       <Link to="">Questions</Link>
    //       <Link to="">News</Link>
    //       <Link to="">Careers</Link>
    //     </div>
    //   </div>

    //   <div className="flex flex-col">
    //     <div className="text-xl text-gray-500 mb-4">Contact</div>
    //     <div className="flex flex-col space-y-2">
    //       <span>123 Thu Duc City</span>
    //       <span>+84 123456789</span>
    //       <span>admin@tincnc.com</span>
    //     </div>
    //   </div>
    // </div>

    <div id="footer" className="bg-gray-600 md:px-10">
      <footer className="flex justify-between p-6 footer text-white">
        <div>
          <span className="footer-title">Dịch Vụ</span>
          <Link className="link link-hover" href="">
          Sản xuất
          </Link>
          <Link className="link link-hover" href="">
            Thiết kế
          </Link>
          <Link className="link link-hover" href="">
            Tiếp thị
          </Link>
          <Link className="link link-hover" href="">
            Quảng cáo
          </Link>
        </div>
        <div>
          <span className="footer-title">Công ty</span>
          <Link className="link link-hover" href="">
            Về chúng tôi
          </Link>
          <Link className="link link-hover" href="/contact">
            Liên hệ
          </Link>
          <Link className="link link-hover" href="">
            Công việc
          </Link>
        </div>
        <div>
          <span className="footer-title">Chính sách</span>
          <Link href="/legal" className="link link-hover">
            Điều khoản
          </Link>
          <Link href="/legal" className="link link-hover">
            Chính sách bảo mật
          </Link>
        </div>
      </footer>
      <footer
        className="px-10 py-4 border-t footer
      text-white border-base-300"
      >
        <div className="flex items-center">
          <Image className="text-black" src={logo} alt="" />
          <p>CÔNG TY CỔ PHẦN TINCNC</p>
        </div>
        <div className="md:place-self-center md:justify-self-start">
          <div className="grid grid-flow-col gap-4">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
