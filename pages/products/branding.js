
import Image from "next/image";
import conf from "../../public/images/brand2.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import cabling3 from "../../public/images/brand1.jpg";

const Branding = () => {
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
            We Inspire Creativity
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
                Branding For Sustainability
              </h3>
            </div>
            <p className="mt-3">
              Unsure about the meaning of “branding”? Don’t worry! Branding is
              one of those marketing concepts that are a bit vague and can
              quickly become confusing, even for people who have studied
              marketing.
            </p>
            <p className="mt-3">
              “A brand is a name, term, design, symbol, or any other feature
              that identifies one seller’s good or service as distinct from
              those of other sellers” (American Marketing Association).
            </p>
            <p className="mt-3">
              You can consider a brand as the idea or image people have in mind
              when thinking about specific products, services, and activities of
              a company, both in a practical (e.g. “the shoe is light-weight”)
              and emotional way (e.g. “the shoe makes me feel powerful”). It is
              therefore not just the physical features that create a brand but
              also the feelings that consumers develop towards the company or
              its product. This combination of physical and emotional cues is
              triggered when exposed to the name, the logo, the visual identity,
              or even the message communicated. A product can be easily copied
              by other players in a market, but a brand will always be unique.
              For example, Pepsi and Coca-Cola taste very similar, however for
              some reason, some people feel more connected to Coca-Cola, others
              to Pepsi. Let’s illustrate this again with our water example. The
              product sold is water, but in order to convince people to purchase
              a particular water, companies developed different water brands,
              such as Evian, Perrier, Fiji or Volvic. And each one of these
              brands provides a different meaning to the product water: – Evian
              makes you feel young – Perrier is refreshing, bubbling and sexy –
              Fiji Water is pure, healthy and natural …and so on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
