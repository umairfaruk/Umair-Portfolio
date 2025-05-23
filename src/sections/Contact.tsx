import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r text-gray-900 from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's Create something Amazing togather
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your project Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam blanditiis quidem culpa
                voluptatem nesciunt, labore accusantium ratione iusto amet
                officiis! Quisquam odio impedit nihil at! Vel ad quisquam
                provident delectus.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl mt-8 gap-2 w-max border border-gray-900">
                <span 
                //  onClick={() => ()} 
                className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
