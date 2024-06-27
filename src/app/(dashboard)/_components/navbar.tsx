import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-slate-50">
      <div className="flex z-50 bg-slate-50 border-b-2 fixed top-0 items-center w-full py-6 px-8 text-black">
        <div className="justify-center items-center font-semibold text-base text-[#dc4a2d] py-2 px-3 bg-[#e7e7e7]">
          Logo
        </div>
        <div className="justify-center items-center flex mx-auto">
          <button className="flex mr-8 py-2 px-2 text-white shadow-md shadow-[#dc4a2d] border-[#fcb4a5] border-2 bg-[#dc4a2d] rounded-full ">
            <Image
              src="/briefcase-02.svg"
              className="object-contain mr-1 mt-1"
              width={15}
              height={15}
              alt="reading"
            />
            Jobs
          </button>
          <div className="flex items-center justify-center text-[#b0b0b0] px-4 text-sm shadow-inner-strong border-2 rounded-full py-3">
            <button className="flex mr-8 -space-x-1">
              <Image
                src="/Icon.svg"
                className="object-contain"
                width={15}
                height={15}
                alt="reading"
              />
              <div>
                <Image
                  src="/ellipse4.svg"
                  className="object-left-top mr-1"
                  width={5}
                  height={5}
                  alt="reading"
                />
              </div>
              Messages
            </button>
            <button className="flex mr-8">
              <Image
                src="/Icon (1).svg"
                className="object-contain mr-1"
                width={15}
                height={15}
                alt="reading"
              />
              Payments
            </button>
            <button className="flex">
              <Image
                src="/Icon (2).svg"
                className="object-contain mr-1"
                width={15}
                height={15}
                alt="reading"
              />
              Applications
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex -space-x-2 mr-1">
            <Image
              src="/bell-02.svg"
              className="object-contain"
              width={25}
              height={25}
              alt="reading"
            />
            <div>
              <Image
                src="/ellipse4.svg"
                className="object-left-top items-start"
                width={5}
                height={5}
                alt="reading"
              />
            </div>
          </div>
          <Image
            src="/Rectangle 5.svg"
            className="object-contain mr-1"
            width={25}
            height={25}
            alt="reading"
          />
          <Image
            src="/Icon (3).svg"
            className="object-contain mr-1"
            width={8}
            height={8}
            alt="reading"
          />
        </div>
      </div>
      <hr />
      <div className="fixed flex item-center bg-slate-50 w-full mt-20 px-12 pt-8 border-b text-[#888888]">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <button className="mr-8 pb-2 hover:text-[#dc4a2d] hover:border-b-2 hover:border-[#dc4a2d]">
            Job Preview
          </button>
          <button className="mr-8 pb-2 hover:text-[#dc4a2d] hover:border-b-2 hover:border-[#dc4a2d]">
            Applicants
          </button>
          <button className="mr-8 pb-2 hover:text-[#dc4a2d] hover:border-b-2 hover:border-[#dc4a2d]">
            Match
          </button>
          <button className="mr-8 pb-2 hover:text-[#dc4a2d] hover:border-b-2 hover:border-[#dc4a2d]">
            Messages
          </button>
        </nav>
      </div>
    </div>
  );
};
