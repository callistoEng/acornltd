import Image from "next/image";
import cabling from "../../public/images/cable44.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import cabling3 from "../../public/images/network-server.jpg";

const LanStructuresCabling = () => {
  const handleEmail =()=>{
    if(typeof window !== "undefined"){
      window.location.href = "mailto:info.acornnetworks@gmail.com"
    }
  }
  return (
    <section>
      <div className="relative h-60">
        <Image
          src={cabling}
          layout="fill"
          alt="cabling"
          quality={100}
          className="h-full w-full object-cover"
        />
        <div className="absolute bg-acorn-theme-blue bg-opacity-50 h-full p-3 transition-all flex items-center content-center flex-col justify-center w-full">
          <h3 className="text-5xl text-white font-bold">LAN Structured Cabling</h3>
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
                Structured Cabling
              </h3>
            </div>
            <p>
              <em className="font-bold text-acorn-theme-blue">
                Acorn Networks Ltd.!{" "}
              </em>
              has a superb team of technicians who make structured cabling a
              work of art. Our technicians have worked in a variety of
              structured cabling installations, giving us a leading edge over
              our competitors. Structured cabling systems are the foundation of
              a modern information network. Do you frequently move, change, or
              make increase to your current infrastructure? Our goal is to
              provide you with a structured cabling system that’s adaptable
              enough to allow changes and upgrades without disrupting your
              productivity.
            </p>
          </div>
          <div className="mt-7">
            <div className="mb-3.5">
              <h3 className="text-acorn-theme-blue underline text-3xl font-bold">
                About Our Structured Cabling Kenya Systems
              </h3>
            </div>
            <p>
              <em className="font-bold text-acorn-theme-blue">
                Acorn Networks Ltd.!{" "}
              </em>
              We are one of the top structured cabling companies in Kenya. We
              offer reliable connectivity backbone for your company that allows
              proper data transfer. We always use good quality cables from
              structured cable brands in Kenya. We generally ensure your data
              cabling in Kenya is profoundly effective in terms of data cable
              quality and project management. Voice cabling and Data cabling are
              the basic components of your network. As the best company in Kenya
              for structured cabling, you can always rely on our commitment.
            </p>
            <p className="mt-3">
              We offer outstanding solutions for structured cabling Kenya. That
              is the reason we are one of the top network cabling companies in
              Kenya. We specialized in the design and installation of structured
              cabling systems with an accentuation on new development and
              corporate movements. Regardless of whether your network is ten
              computers or ten buildings in a campus environment, we can give
              you fiber and copper network cabling solutions expected to connect
              data and voice over the neighborhood. Our structured cabling Kenya
              experts have extensive knowledge concerning large scale corporate
              installation, hands-on, corporate relocation, construction, and
              expansion.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 p-8 leading-relaxed">
        <div className="mb-5">
          <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
            Choose the Best Company for Structured Cabling
          </h5>
          <p>
            If you have finally decided to fix your cabling infrastructure and
            looking for the best solutions for structured cabling{" "}
            <em className="font-bold text-acorn-theme-blue">
              Acorn Networks Ltd.!{" "}
            </em>{" "}
            got you covered. Our team is highly trained and experienced to
            handle even the most complicated and complex cabling issues in a
            data center, large offices, buildings, apartments and more.
          </p>
          <p className="mt4">
            We take structured cabling and network cabling to a new level with
            cutting edge services. Our solutions for network cabling / data
            cabling / structured cabling in Kenya are designed with high quality
            and today’s business bandwidth requirement in mind. we have
            networking products to help all the network strategies including
            voice and data. we offer high quality structured cabling
            installation services across Kenya as well as best price access in
            this region.
          </p>
          <p className="mt4">
            As one of the leading companies for structured cabling in Kenya, we
            bring you creative and innovative solutions for security and
            surveillance, data center networking, business solutions and more.
            as a trusted company, we provide reliable service for structured
            cabling that you can rely on.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
            Advantages of{" "}
            <em className="font-bold text-acorn-theme-blue">
              Acorn Networks Ltd.{" "}
            </em>{" "}
            Structured Cabling Systems
          </h5>
          <ul className=" list-inside list-disc">
            <li>Consistency</li>
            <li>Support for equipment from a variety of manufacturers</li>
            <li>Simplified moves, adds, and changes</li>
            <li>Simplified troubleshooting</li>
            <li>Support for future applications</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 mb-8 p-8">
        <p>
          So, no matter whether you are looking for structured cabling company
          or structured cabling services, we are the one you can stop by.
        </p>
        <p className="mt-4">
          Browse our website and make your selection accordingly. If you need
          any support, give us a call now or contact us today for your
          requirements for network cabling / data cabling / structured cabling
          . We cover the entire Country. Our structured cabling experts are here to help you.
        </p>
      </div>
    </section>
  );
};

export default LanStructuresCabling;
