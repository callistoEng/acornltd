import Image from "next/image";
import conf from "../../public/images/conf.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import cabling3 from "../../public/images/network-server.jpg";

const VideoConfrencing = () => {
  const handleEmail = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:info.acornnetworks@gmail.com";
    }
  };
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
            Simply the best Video Conferencing.
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
                Video Confrencing
              </h3>
            </div>
            <p className="mb-4">
              Since technology has been providing wonderful innovations right at
              our doorsteps, therefore, video conferencing is a beneficial mode
              of communication. If you want to stay in contact with your
              employees, sales prospects and clients on an everyday basis such
              that the services offered and received don’t face any hassle, this
              form of interaction serves to be the best. The ideal enterprise
              solution should target the increasing productivity of your company
              profile through a boost in your clients. Considering how most
              business deals are being made online- it is highly beneficial to
              obtain video conferencing as one of the marketing assets of your
              enterprise’s website.
            </p>
            <p>
              If you are to consider video conferencing services then there is
              an assurance that your enterprise will certainly improve
              visibility online. Once you become one of the professional
              establishments online that manage their client’s business through
              video conferencing then there will be a balance obtained in your
              workspace. Video conferencing saves up on time and money
              especially since it allows you to communicate with outside
              employees who live around the office boundaries. You don’t have to
              send in your employees just for a conversation with your clients
              but can manage to survey a conversation through video conferencing
              that can be recorded for future assistance.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 p-8 leading-relaxed">
        <div className="mb-5">
          <h5 className="text-acorn-theme-blue font-semibold text-xl mb-2">
            Working Better Together
          </h5>
          <p className="mb-3">
            Adaptable for any workstyle, role, or device so you can choose when,
            where, and how you work.Equal experiences for everyone regardless of
            geography, language, or communication style.
          </p>
          <p className="mb-3">
            Make the office worth the commute. Easy to navigate. Built to spark
            creativity and power productivity. Designed to connect hybrid teams.
            Yes, your office can have it all.
          </p>
          <p className="mt-3">
            Secure by design, private by default, to defend against threats no
            matter where you're working.
          </p>
          <p className="mt-3">
            Message Instatntly. Collaborate with anyone Create a more efficient
            workflow with team messaging and file sharing for both internal and
            external teams—all in the same space.
          </p>
          <p className="mt-3">
            Collaborate with anyone Create a more efficient workflow with team
            messaging and file sharing for both internal and external teams—all
            in the same space.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-8 p-8">
        <p className="mt-2">
          Instant audience engagement Encourage more active participation in
          meetings and events with easy interactive audience tools for polling
          and Q&A.
        </p>
      </div>
    </section>
  );
};

export default VideoConfrencing;
