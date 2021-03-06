import Link from "next/link";
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/outline";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <div
        className="flex flex-col p-8 items-center space-y-8 
      overflow-hidden"
      >
        <h1 className="font-semibold text-4xl">Contact Us</h1>
        <ul className="bg-gray-300 max-w-md p-6 space-y-4 rounded-b-box">
          <li className="flex items-center space-x-4">
            <LocationMarkerIcon width={30} height={30} />
            <address>
              49/13 Street 22, Phuoc Long B Ward, Distric 9, Ho Chi Minh City
            </address>
          </li>
          <li className="flex items-center space-x-4">
            <PhoneIcon height={30} width={30} />
            <Link href="tel:+84933580721">+84 933 580 721</Link>
            <Link href="tel:+84933207143">+84 933 207 143</Link>
          </li>
          <li className="flex items-center space-x-4">
            <MailIcon height={30} width={30} />
            <Link href="mailto:admin@tincnc.vn">admin@tincnc.com</Link>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.780680954031!2d106.77581305074148!3d10.828089061160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f6faa8a563%3A0x16fba23db378baaa!2sTinCNC!5e0!3m2!1svi!2s!4v1636099556479!5m2!1svi!2s"
          height={300}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default contact;
