import { logo } from "../assets";

const About = () => {
  return (
    <section>
      <div className="tracking-widest py-12">
        <div className="px-[50px] sm:px-[90px] xl:px-[200px] flex flex-col gap-2 pt-8 sm:pt-0 pb-16">
          <h1 className="text-4xl sm:text-6xl text-textColor font-semibold">About Us</h1>
          <h2 className="text-altTextColor max-w-[750px]">With over 50+ years of experience in the glass industry and registered in the year 1972. </h2>
        </div>
        <div className="px-[50px] sm:px-[90px] xl:px-[200px] flex flex-col xl:flex-row gap-20 xl:gap-32 items-center">
          <img src={logo} className="max-w-[30rem]"/>
          <div className="flex flex-col gap-4 text-textColor ">
            <h1 className="text-2xl font-semibold">About Design Images</h1>
            <div className="w-full border-b-2 border-[#c9c9c9]"></div>
            <p>
            Design Image Is the manufacturer of glass plates for modular switches in India. We are pioneers in the industry. We offer innovative designs of glass plate for switch industries. From the very beginning, the company has focused on its core principles of customer service, quality, value for money. It is these principle that has enabled the company to gain the trust of customers. On the manufacturing front, we invest in new technology and machinery to continue it's popular pace with new designs and styles to suit clients needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About