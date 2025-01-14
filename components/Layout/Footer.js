import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="p-10 m-0 bg-acorn-theme-blue">
      <div className="bg-acorn-theme-blue text-white grid-cols-1 grid sm:grid-cols-3 gap-5">
        <div>
          <div>
            <h1 className="font-bold text-xl">Acorn Networks Ltd</h1>
            <ul className="text-lg sm:block flex w-10">
              <li
                className="mb-2 mt-2 w-full h-full p-2 bg-twitter-blue"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <FiTwitter />
              </li>
              <li
                className="mb-2 w-full h-full  p-2 bg-fb-color"
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/ACORNETWORKS"
              >
                <FiFacebook className="" />
              </li>
              <li
                className="mb-2 w-full h-full  p-2  bg-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info.acornnetwork@gmail.com?subject=Inquiry"
              >
                
                  <AiOutlineMail className="" />
               
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">About Us</h4>
          <div>
            <p>
              Acorn Networks Limited is a company created to enable
              organizations enhancement in this tech savvy world. We offer
              consultancy to our clients and turn complex business scenario to
              simple ICT solution Offer uncompromised and uninterrupted after
              sales support to our clients to ensure that their business
              processes are delivered without interruption.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">Services</h4>
          <ul className="list-disc list-inside">
            <li className="">
              <Link href="/products/integrated-security">
                Integrated Security(CCTV, Alarm and Access Control)
              </Link>
            </li>
            <li>
              <Link href="/products/video-confrencing">
               Video Confrencing
              </Link>
            </li>
            <li>
              <Link href="/products/lan-structured-cabling">
               LAN Structured Cabling
              </Link>
            </li>
            <li>
              <Link href="/products/network-cabling">
               Networking and IP Telephone
              </Link>
            </li>
            <li>
              <Link href="/products/branding">
                Branding
              </Link>
            </li>
            <li>
              <Link href="/">
                Piped Music
              </Link>
            </li>
            <li>
              <Link href="/products/electrical-engineering">
                Electrical Engineering
              </Link>
            </li>
            <li>
              <Link href="/products/security-systems-monitoring">
                Security System Monitoring
              </Link>
            </li>
            <li>
              <Link href="/products/lock-systems">
                Hotel Locks Sytem
              </Link>
            </li>
            <li>
              <Link href="/">
                Solar Installation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
