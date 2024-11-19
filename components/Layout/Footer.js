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
            <ul className="text-lg sm:block flex bg-slate-300 w-8 px-2 py-1">
              <li
                className="mb-0 mt-2 text-twitter-blue"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <FiTwitter />
              </li>
              <li
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/ACORNETWORKS"
                className="mb-0.5 mt-2 text-fb-color"
              >
                <FiFacebook className="" />
              </li>
              <li
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info.acornnetwork@gmail.com?subject=Inquiry"
                className="mb-0.5 mt-2 text-fb-color"
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
              <Link href="/">
                Integrated Security(CCTV, Alarm and Access Control)
              </Link>
            </li>
            <li>
              <Link href="/">
               Video Confrencing
              </Link>
            </li>
            <li>
              <Link href="/">
               LAN Structured Cabling
              </Link>
            </li>
            <li>
              <Link href="/">
               Networking
              </Link>
            </li>
            <li>
              <Link href="/">
                IP Telephone
              </Link>
            </li>
            <li>
              <Link href="/">
                Piped Music
              </Link>
            </li>
            <li>
              <Link href="/">
                Electrical Engineering
              </Link>
            </li>
            <li>
              <Link href="/">
                Security System Monitoring
              </Link>
            </li>
            <li>
              <Link href="/">
                Hotel Locks Sytem
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
