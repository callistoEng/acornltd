import Image from "next/image";
import cabling from "../../public/images/cable1.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import cabling3 from "../../public/images/cable3.jpg";

const NetworkCabling = () => {
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
          <h3 className="text-5xl text-white font-bold">Network Cabling</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md-xls:w-10/12 w-full md-xls:px-0 px-5 mx-auto mt-10 bg">
        <div className="order-last md:order-first">
          <form >
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
                {" "}
                Network Cabling
              </h3>
            </div>
            <p>
              Network cabling is the backbone of your IT network. The voice,
              data, and video signal that you receive and transmit everyday for
              your business activities depend on these network cabling. That is
              why there can be no compromise on the cabling front. Regardless of
              the place you operate and the size of your business operations,
              network cabling is one thing that should always be of highquality.
              And the same is true for businesses in Kenya as well. Whether you
              are a start-up, an SMB, or a big conglomerate, you need to make
              sure you find a reliable network cabling Kenya company. In the
              case of network cabling in Kenya, you should always look for the best
              in your area. Welcome to the world of <em className="font-bold text-acorn-theme-blue">Acorn Networks Ltd.!</em> When you have <em className="font-bold text-acorn-theme-blue">Acorn Networks Ltd</em> in Kenya, you
              don’t need to worry about finding a reliable network cabling Kenya
              company. We are a reputed network cabling provider in Kenya and
              offer our clients the latest and most trusted technology in
              network cabling. We have a dedicated team of expert technicians
              who have mastered the art of structured cabling. Our technicians
              have the experience of working in a variety of structured cabling
              installations. That is what sets us apart from our competitors. We
              make sure that our structured cabling network is scalable and
              flexible in terms of upgrades.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 p-8 leading-relaxed">
        <div className="mb-5">
          <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
            Why do businesses need structured cabling?
          </h5>
          <p>
            structured cabling links all your devices together. structured
            cabling improves both the efficiency and performance of
            telecommunication systems. if you want your broadband and telephone
            data to work seamlessly, you need to think about network cabling.
            structured cabling makes your communication stronger and clearer.
            structured cabling allows you to plug in from anywhere in the
            system. smart network cabling can save you money, enhances
            communication speed, and improves business efficiency.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
            Benefits of network cabling
          </h5>
          <ul className=" list-inside list-disc">
            <li>Scalability and simplicity</li>
            <li>Less downtime</li>
            <li>Easier to isolate and rectify problems</li>
            <li>Improves safety</li>
            <li>Helps improve adaptability</li>
          </ul>
        </div>
        <div>
          <div>
            <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
              What do we Offer
            </h5>
          </div>
          <div>
            <ul className=" list-inside list-disc">
              <li>Data cabling</li>
              <li>Network cabling</li>
              <li>Structured cabling</li>
              <li>Voice & data cabling</li>
              <li>Fiber optics</li>
              <li>Network wiring</li>
            </ul>
            <p className="mt-4">
              Network cabling is crucial to your business interests.That is why
              you need to make sure that you hire the best network cabling
              company in Kenya. After all, you cannot compromise on the
              communication front.Make sure the company you hire for network
              cabling ticks all these check boxes:
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-8 p-8">
        <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
          Why you should select <em className="font-bold text-acorn-theme-blue">Acorn Networks Ltd</em> metwork cabling company?
        </h5>

        <p>
          we have the necessary experience and expertise in providing the most
          effective structured cabling to our clients. it is crucial to select
          the right solutions for your business. we have trained technicians who
          have the experience to execute network cabling infrastructure of all
          sizes. al marjan communication has earned a name for itself in the
          network cabling vertical in Kenya due to the experience and
          expertise we bring to the table. we are always there for our clients.
          we have responsive customer care. one thing that sets us apart from
          others is our customer service. we are available 24x7 to resolve your
          issues. we only use high-quality products. we never compromise on the
          quality of products. we believe in delivering quality services and
          products to all our clients. we follow the highest moral and ethical
          business standards. we have a battery of skilled and experienced
          engineers who specialise in delivering tailor-made solutions for
          businesses of different sizes and verticals. we can customisesolutions
          to suit your requirements. our pricing is not just competitive, but it
          matches the best in the industry. if you are looking for a reliable
          network cabling Kenya company, you should get in touch with al marjan
          communication now. we will make sure you communicate properly with the
          world!
        </p>
      </div>
    </section>
  );
};

export default NetworkCabling;
