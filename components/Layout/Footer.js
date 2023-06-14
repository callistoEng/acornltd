import { FiFacebook, FiTwitter } from "react-icons/fi";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="p-10 m-0 bg-acorn-theme-blue">
      <div className="bg-acorn-theme-blue text-white grid-cols-1 grid sm:grid-cols-3 gap-5">
        <div>
          <div>
            <h1 className="font-bold text-xl">Acorn Networks Ltd</h1>
            <ul className="text-lg sm:block flex">
              <li className="mb-0 mt-2 text-twitter-blue">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com"
                >
                  <FiTwitter />
                </a>
              </li>
              <li className="mb-0.5 mt-2 text-fb-color">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com/ACORNETWORKS"
                >
                  <FiFacebook className="" />
                </a>
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
              <Link href="/">
                <a>Integrated Security(CCTV, Alarm and Access Control)</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Video Confrencing</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>LAN Structured Cabling</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Networking</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>IP Telephone</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Piped Music</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Electrical Engineering</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Security System Monitoring</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Hotel Locks Sytem</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
