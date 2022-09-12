import logo from "../../public/images/homet.jpg";
import lock from "../../public/images/hotel.jpg";
import wiring from "../../public/images/elec3.jpg";
import security from "../../public/images/security.png";
import piped from "../../public/images/piped.png";
import abt from "../../public/abt.jpg";
import cable2 from "../../public/images/cable2.jpg";
import cable1 from "../../public/images/cable1.jpg";
import networkserver from "../../public/images/vconf.png";
import concept from "../../public/images/brand.jpg";
import cctv2 from "../../public/images/cctv2.jpg";
import Best from "../../public/images/Best.jpg";
import { BiBullseye } from "react-icons/bi";
import { HiOutlineGlobe, HiOutlineSparkles } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const handleEmail = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:info.acornnetworks@gmail.com";
    }
  };
  return (
    <>
      <section>
        <div className="mb-5 md:mb-8 mt-[1rem] md:h-[85vh] sm:h-[60vh] h-[40vh] relative px-0">
          <div className="w-full flex justify-center content-center items-center h-full">
            <div
              className="flex flex-col w-11/12 xs-l:w-4/5 sm:w-2/3 bg-opacity-50
          sm:p-10 p-5 justify-center content-center items-center rounded-lg bg-acorn-theme-blue mx-auto shadow-lg"
            >
              <h2 className="font-bold md:text-3xl md:mb-10 sm:text-xl text-lg text-white opacity-100 text-left">
                Networking, Cabling and All IT Solutions
              </h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome the Future with Acorn Networks")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("We Do the Best for All Your IT Environment")
                    .pauseFor(900)
                    .deleteAll()
                    .typeString("Networking services")
                    .pauseFor(900)
                    .deleteAll()
                    .typeString("CCTV Solutions")
                    .pauseFor(900)
                    .deleteAll()
                    .typeString("Networking and Cabling Services")
                    .pauseFor(900)
                    .deleteAll()
                    .typeString("IT Solutions")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                  wrapperClassName:
                    "md:text-2xl sm:text-xl text-lg text-acorn-theme-gold opacity-100 font-bold text-left",
                }}
              />
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 -z-10">
            <Image
              alt="acorn networks banner"
              src={logo}
              layout="fill"
              quality={100}
              priority={true}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="md:px-14 sm:px-8 px-5 mt-11">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 h-auto mb-14">
          <div className="w-full sm:h-80 h-72 overflow-hidden rounded-lg shadow-xl relative">
            <Image
              src={abt}
              alt="who are we"
              layout="fill"
              quality={100}
              priority={true}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-4">Who are We?</h4>
            <p className="leading-loose">
              Acorn Networks limited is a private Limited Company incorporated
              under the laws of Kenya. The business was set up to take care of
              information and communication system consultancy, solution,
              support, maintenance and general ICT supplies. We deal in a wide
              range of ICT hardware, Integrated security system (CCTV, Alarm,
              and Access control), Video conferencing, Wired and Wireless
              Networks and Structured cabling, Network and Security Systems
              Monitoring and Support.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-gray-200 md:px-14 sm:px-8 px-5 py-14">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <div className="bg-white p-3 rounded-md shadow-lg">
            <div className="flex justify-center text-5xl mb-2 text-acorn-theme-blue">
              <BiBullseye />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg mb-1.5">Vision</h4>
              <p>
                Acorn Networks Limited vision is to empower people. Enable
                organizations to enhance and sustain excellence in this tech
                savvy world. Engage in research and development of innovative
                technologies to stay a head in future technology advancements.
              </p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-lg">
            <div className="flex justify-center text-5xl mb-2 text-acorn-theme-blue">
              <HiOutlineGlobe />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg mb-1.5">Mission</h4>
              <p>
                {" "}
                To offer consultancy to our clients and turn complex business
                scenario to simple ICT solution Offer uncompromised and
                uninterrupted after sales support to our clients to ensure that
                their business processes are delivered without interruption.
              </p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-lg">
            <div className="flex justify-center text-5xl mb-2 text-acorn-theme-blue">
              <HiOutlineSparkles />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg mb-1.5">POLICY</h4>
              <p>
                Acorn Networks Limited strives to be the leading organization in
                the East Africa and Beyond for IT Consultancy, Integration and
                Support services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-14 sm:px-8 md:py-14 p-5 mt-10">
        <div>
          <h3 className="text-center text-acorn-theme-blue text-3xl mb-5 font-bold">
            Our Services
          </h3>
        </div>
        <div className="grid sm-2:grid-cols-3 xs-l:grid-cols-2 grid-cols-1 sm-2:gap-6 gap-4">
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={cable1}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-50 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Network Cabling
              </p>
              <Link href="/products/network-cabling">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={cable2}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                LAN Structured Cabling
              </p>
              <Link href="/products/lan-structured-cabling">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={networkserver}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Video Confrencing
              </p>
              <Link href="/products/video-confrencing">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={piped}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Piped Music
              </p>
              <Link href="/">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={wiring}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Electrical Engineering
              </p>
              <Link href="/products/electrical-engineering">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={security}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Security System Monitoring
              </p>
              <Link href="/products/security-systems-monitoring">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt=""
              src={lock}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Hotel Lock Systems
              </p>
              <Link href="/products/lock-systems">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt="acorn networks banner"
              src={cctv2}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Integrated Security (CCTV, Alarm & Access Control)
              </p>
              <Link href="/products/integrated-security">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full group h-60 rounded-md shadow-md relative overflow-hidden">
            <Image
              alt="acorn networks banner"
              src={concept}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />

            <div className="absolute bg-acorn-theme-blue bg-opacity-40 h-full -top-full duration-500 group-hover:top-0 p-3 transition-all flex items-center content-center flex-col justify-center w-full">
              <p className="text-lg text-white font-semibold mb-1.5">
                Branding
              </p>
              <Link href="/products/branding">
                <a className="bg-acorn-theme-gold px-4 py-2 shadow-md rounded-md text-white text-sm">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-14 sm:px-8 md:py-9 p-5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 h-auto mb-3">
          <div className="w-full sm:h-80 h-72 relative rounded-md shadow-xl">
            <Image
              alt=""
              src={Best}
              layout="fill"
              quality={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-4">
              We Are the Best Services Partner For IT Support and CCTV Kenya!
            </h4>
            <p className="leading-loose my-3">
              Acorn Network Limited is built on core values that provide only
              the highest levels of IT, Security Solutions and Visual
              Communications in Kenya.
            </p>
            <button
            onClick={handleEmail}
              type="button"
              className="bg-acorn-theme-gold px-3 py-3 text-lg shadow-lg rounded-md text-white mt-2.5"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
