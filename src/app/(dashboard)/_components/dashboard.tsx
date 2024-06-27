import Image from "next/image";

export const Dashboard = () => {
  return (
    <section className="text-gray-600 body-font min-h-full pb-22">
      <div className="container flex flex-wrap pl-5 mx-auto ">
        <div className="md:w-3/4 md:pr-12 md:py-2 md:border-r md:border-b-1 mb-10 md:mb-0 pb-10 ">
          <div className="flex items-center justify-start pl-2">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-[#3d3d3d]">
              Senior Product Designer
            </h1>
            <div className="flex text-sm px-6 items-center font-normal text-gray-400 mb-1">
              <Image
                src="/Ellipse 11.svg"
                className="object-contain mr-1 text-gray-400"
                width={4}
                height={4}
                alt="reading"
              />
              posted 2 days ago
            </div>
            <div className="flex text-xs p-1 items-center font-medium border-2 border-[#abefc6] rounded-xl text-[#067647] bg-[#ecfdf3] mb-1">
              <Image
                src="/dot.svg"
                className="object-contain mr-1"
                width={5}
                height={5}
                alt="reading"
              />
              Open
            </div>
          </div>

          <div className="flex py-3 pl-2">
            <div className="flex">
              <Image
                src="/Icon (4).svg"
                className="object-contain mr-1"
                width={15}
                height={15}
                alt="reading"
              />
              Delaware, USA{" "}
            </div>
            <div className="flex pl-20">
              <Image
                src="/Icon (5).svg"
                className="object-contain mr-1"
                width={18}
                height={18}
                alt="reading"
              />
              $300k-$400k
            </div>
          </div>

          <hr className="pt-8 flex-grow" />
          {/* <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p> */}
          <div className="flex flex-wrap -mx-2 -my-8 px-4 pt-6 text-sm pb-4">
            <div className="items-center gap-x-4 w-1/4">
              Skills required
              <ul className="mt-4 text-xs">
                <li className="flex shadow-inner-strong border-gray-300 border-2 rounded-lg p-1 my-2 w-fit">
                  <Image
                    src="/image 1.svg"
                    className="object-contain mr-1"
                    width={15}
                    height={15}
                    alt="reading"
                  />
                  Figma
                </li>
                <li className="flex shadow-inner-strong border-gray-300 border-2 rounded-lg p-1 my-2 w-fit">
                  <Image
                    src="/image 2.svg"
                    className="object-contain mr-1"
                    width={15}
                    height={15}
                    alt="reading"
                  />
                  Adobe Illustrator
                </li>

                <li className="flex shadow-inner-strong border-gray-300 border-2 rounded-lg p-1 my-2 w-fit">
                  <Image
                    src="/image 6.svg"
                    className="object-contain mr-1"
                    width={15}
                    height={15}
                    alt="reading"
                  />
                  Adobe XD
                </li>
              </ul>
            </div>

            <div className="items-center gap-x-4 w-1/4">
              Preferred Language
              <div>
                <ul className="mt-4">
                  <li>English</li>
                </ul>
              </div>
            </div>
            <div className="items-center gap-x-4 w-1/4">
              Type
              <div>
                <ul className="mt-4">
                  <li>Full Time</li>
                </ul>
              </div>
            </div>
            <div className="items-center w-1/4">
              Years of Experience
              <div>
                <ul className="mt-4">
                  <li>3+ Years of Experience</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="mt-8" />
          <div className="py-6 px-4 flex-grow w-2/3 text-[#3d3d3d] text-base">
            <h3 className="text-[#6e6c6d] pb-2 text-sm">About the job</h3>
            <ul>
              <li>1. Handle the UI/UX research design</li>
              <li>
                2. Work on researching on latest web applications designs &
                trends
              </li>
              <li>3. Work on conceptualizing and visualizing</li>
              <li>
                4. Work on creating graphics content and other graphic related
                works
              </li>
            </ul>
            <ul>Benefits:</ul>
            <li>Health insurance</li>
            <li>Provident Fund</li>
            <ul>Schedule:</ul>
            <li>Day shift</li>
            <ul>Supplemental pay types:</ul>
            <li>Performance bonus</li>
          </div>
          <hr className="pt-4" />

          <div className="flex px-4">
            <Image
              src="/rectangle4.svg"
              className="object-contain mr-1"
              width={25}
              height={25}
              alt="reading"
            />
            <p className="px-2">Atlassian</p>
            <button className="py-1 px-2 text-[#003788] bg-[#E0EBF9] shadow-md shadow-gray-400 rounded-md text-xs font-bold">
              Follow
            </button>
          </div>
          <div className="flex flex-wrap -mx-2 -my-8 pl-6 pt-12 text-sm pb-4 text-[#3d3d3d]">
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Company size</h3>
              <p className="text-base">1k-2k Employees</p>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Type</h3>
              <p className="text-base">Private</p>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Sector</h3>
              <p className="text-base">
                Information Technology, Infrastructure
              </p>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Funding</h3>
              <p className="text-base">Bootstrapped</p>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Founded in</h3>
              <p className="text-base">2019</p>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="text-sm py-2 text-[#6e6c6d]">Founded by</h3>
              <p className="text-base">Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>

          <button className="pt-6 text-xs underline px-4 text-[#b0b0b0] hover:text-gray-800">
            Report this listing
          </button>
        </div>

        <div className="md:w-1/4 md:pl-8">
          <div className="flex justify-center gap-x-6 pt-6">
            <button className="items-center justify-center inline-flex text-sm text-[#dc4a2d] px-2 w-1/2 py-2 border-2 border-[#dc4a2d] bg-[#FEF4F2] rounded-md">
              <Image
                src="/Icon (6).svg"
                className="object-contain mr-2 py-1"
                width={13}
                height={13}
                alt="reading"
              />
              Delete job
            </button>
            <button className="items-center justify-center inline-flex text-sm text-white px-2 w-1/2 border-2 rounded-md border-[#fcb4a5] bg-[#dc4a2d]">
              <Image
                src="/Icon (7).svg"
                className="object-contain mr-2 py-1"
                width={13}
                height={13}
                alt="reading"
              />
              Edit job
            </button>
          </div>
          <ul className="flex flex-wrap -mb-1">
            <li className="py-6 mb-1 w-full border-b-2">
              <a className="flex text-gray-600 hover:text-gray-800">
                <Image
                  src="/Icon (8).svg"
                  className="object-contain mr-2"
                  width={16}
                  height={16}
                  alt="reading"
                />
                Applications
                <h2 className="ml-auto text-right justify-between">400</h2>
              </a>
            </li>

            <li className="py-6 mb-1 w-full border-b-2">
              <a className="flex text-gray-600 hover:text-gray-800">
                <Image
                  src="/Icon (9).svg"
                  className="object-contain mr-2"
                  width={16}
                  height={16}
                  alt="reading"
                />
                Matches
                <h2 className="ml-auto text-right justify-between">100</h2>
              </a>
            </li>
            <li className="py-6 mb-1 w-full border-b-2">
              <a className="flex text-gray-600 hover:text-gray-800">
                <Image
                  src="/Icon (10).svg"
                  className="object-contain mr-2"
                  width={16}
                  height={16}
                  alt="reading"
                />
                Messages
                <h2 className="ml-auto text-right justify-between">147</h2>
              </a>
            </li>
            <li className="py-6 mb-1 w-full">
              <a className="flex text-gray-600 hover:text-gray-800">
                <Image
                  src="/Icon (11).svg"
                  className="object-contain mr-2"
                  width={16}
                  height={16}
                  alt="reading"
                />
                Views<h2 className="ml-auto text-right justify-between">800</h2>
              </a>
            </li>
          </ul>

          <div className="p-4 mx-auto mt-4 w-full border-gray-900 shadow-xl rounded-lg">
            <h2 className="mb-4 font-extrabold text-lg text-black">
              "A quote from Atlassian"
            </h2>
            <div className="h-full flex items-center py-4 px-2">
              {/* <img alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/> */}
              <Image
                src="/Avatar.svg"
                className="object-contain mr-4"
                width={40}
                height={40}
                alt="reading"
              />
              <h2 className="ml-auto text-right justify-between"></h2>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Name</h2>
                <p className="text-gray-500">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </div>

    // </div>
  );
};
