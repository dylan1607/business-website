import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 bg-gray-800 text-white">
      <div className="flex flex-col items-center p-5">
        <div className="text-2xl mb-5">Quick Links</div>
        <div className="flex flex-col space-y-2">
          <Link to="">Home</Link>
          <Link to="">Services</Link>
          <Link to="">About</Link>
          <Link to="">Contact Us</Link>
        </div>
      </div>

      <div className="flex flex-col items-center p-5">
        <div className="text-2xl mb-5">Source</div>
        <div className="flex flex-col space-y-2">
          <Link to="">Questions</Link>
          <Link to="">News</Link>
          <Link to="">Careers</Link>
        </div>
      </div>

      <div className="flex flex-col items-center p-5">
        <div className="text-2xl mb-5">Contact</div>
        <div className="flex flex-col space-y-2">
          <span>123 Thu Duc City</span>
          <span>+84 123456789</span>
          <span>admin@tincnc.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
