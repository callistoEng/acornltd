import Image from "next/image";
import conf from "../../public/images/elec1.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import cabling3 from "../../public/images/elec2.jpg";

const Electricalengineering = () => {
  const handleEmail =()=>{
    if(typeof window !== "undefined"){
      window.location.href = "mailto:info.acornnetworks@gmail.com"
    }
  }
  return (
    <section>
      <div className="relative h-60">
        <Image
          src={conf}
          layout="fill"
          alt="conf"
          quality={100}
          className="h-full w-full object-cover"
        />
        <div className="absolute bg-acorn-theme-blue bg-opacity-50 h-full p-3 transition-all flex items-center content-center flex-col justify-center w-full">
          <h3 className="text-5xl text-white font-bold">
            Electrical Engineering Services
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md-xls:w-10/12 w-full md-xls:px-0 px-5 mx-auto mt-10 bg">
        <div className="order-last md:order-first">
          <form>
            <div className="">
              <h4 className="font-semibold text-lg">Request Quote</h4>
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium  dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border ring-gray-300 text-gray-900 text-sm rounded-sm focus:border-none block w-full p-2.5 "
                placeholder="name@acorn.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="msg"
                className="block mb-2 text-sm font-medium dark:text-gray-300"
              >
                Message
              </label>
              <input
                type="text"
                id="msg"
                className="shadow-sm bg-gray-50 border ring-gray-300 text-gray-900 text-sm rounded-sm focus:border-none block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="buttom"
              className="text-white bg-acorn-theme-blue hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Request
            </button>
          </form>

          <div className="mt-5 md:mb-1 mb-10">
            <h5 className="text-2xl text-acorn-theme-blue font-semibold mb-3.5">
              Talk to Us
            </h5>
            <div>
              <ul className="flex sm:text-base text-sm flex-col">
                <li className="flex mb-4">
                  <button
                    type="button"
                    className="flex content-center font-semibold text-xl items-center"
                  >
                    <BsTelephoneInbound className="mr-1.5 xs:block hidden text-acorn-theme-gold" />
                    +254721549507
                  </button>
                </li>
                <li className="mr-3 flex">
                  <button
                    type="button"
                    className="flex content-center font-semibold text-xl items-center"
                  >
                    <BsTelephoneInbound className="mr-1.5 xs:block hidden text-acorn-theme-gold" />
                    +254792922378
                  </button>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleEmail}
                className="flex mt-3 items-center bg-acorn-theme-blue px-3 py-2 text-white rounded-md shadow-md"
              >
                <AiOutlineMail className="mr-2" />
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
        <div className="md:p-4 md:col-span-2">
          <div className="relative sm:h-80 h-72 mb-5">
            <Image
              src={cabling3}
              alt=""
              className="rounded-md object-cover"
              layout="fill"
              quality={100}
            />
          </div>
          <div>
            <div className="mb-3.5">
              <h3 className="text-acorn-theme-blue underline text-3xl font-bold">
                Electrical Engineering Services
              </h3>
            </div>
            <p className="mt-3">
              Designing and laying out the right electrical engineering system
              is not an easy job as it takes weeks of research and analysis. Any
              lapse in understanding and implementation makes the system
              vulnerable to failures.
            </p>
            <p className="mt-3">
              Electrical engineering services at{" "}
              <em className="font-semibold text-acorn-theme-blue">
                Acorn Neworks Ltd.
              </em>{" "}
              are intended to help you design and modify the best-in-class
              product. Our electrical design services also help you keep your
              systems efficient, reliable, safe, and up-to-date.
            </p>
            <p className="mt-3">
              Our Electrical Engineering consultant ensure complete adherence to
              industry standards.
            </p>
            <p className="text-lg font-semibold mt-2">The Best In Business</p>
            <p className="mt-3">
              <em className="font-semibold text-acorn-theme-blue">
                Acorn Neworks Ltd.
              </em>{" "}
              is the best electrical engineering consultant that offers
              Electrical Engineering Services, Embedded System Development and
              repairs by experienced & qualified personnel in electrical
              engineering, Automobile, Packaging and Pharmaceutical Industries.
              Our electrical services engineering and Control Systems services
              improve operational efficiency and make sure your high quality
              products reach the market rapidly
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Electricalengineering;
