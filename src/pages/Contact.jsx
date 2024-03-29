import { whatsapp, call, email } from "../assets"

const Contact = () => {

  const handleWhatsAppClick = () => {
    window.open(`whatsapp://send?phone=${918000293444}`, '_blank');
  };

  return (
    <div className="tracking-widest pt-24 sm:pt-20">
      <div className="px-[25px] sm:px-[90px] xl:px-[200px] flex flex-col gap-2 pb-12 sm:pb-16">
        <h1 className="text-4xl sm:text-6xl text-textColor font-semibold">Contact Us</h1>
        <h2 className="text-textColor">Get in touch with us for any inquiries or quotations.</h2>
      </div>
      <div className="px-[25px] sm:px-[90px] pb-8 xl:px-[200px] flex flex-row gap-8 text-textColor overflow-scroll no-scrollbar">
        <div className="shrink-0 flex flex-col justify-between w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-2 border-[#D8D8D8] rounded-2xl p-6">
          <div className="border-2 border-[#D8D8D8] w-fit p-2 rounded-xl shadow-inner">
            <img src={whatsapp} width={25}/>
          </div>
          <div>
            <h1 className="shrink-0 font-semibold">Chat with us on Whatsapp!</h1>
            <h2 className="cursor-pointer text-[#9C9C9C] text-sm pt-2" onClick={handleWhatsAppClick}>Open Whatsapp</h2>
          </div>
        </div>
        <div className="shrink-0 flex flex-col justify-between w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-2 border-[#D8D8D8] rounded-2xl p-6">
          <div className="border-2 border-[#D8D8D8] w-fit p-2 rounded-xl shadow-inner">
            <img src={call} width={25}/>
          </div>
          <div>
            <h1 className="font-semibold">Contact us through a <br/>call!</h1>
            <h2 className="text-[#9C9C9C] text-sm pt-2">+91 80002 93444</h2>
          </div>
        </div>
        <div className="shrink-0 flex flex-col justify-between w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-2 border-[#D8D8D8] rounded-2xl p-6">
          <div className="border-2 border-[#D8D8D8] w-fit p-2 rounded-xl shadow-inner">
            <img src={email} width={25}/>
          </div>
          <div>
            <h1 className="font-semibold">Write us a <br/>mail!</h1>
            <h2 className="text-[#9C9C9C] text-sm pt-2">Info@designimageindia.com</h2>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2434959148522!2d72.59745177538863!3d22.978071879204958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f6d88ed5bf%3A0xbb75a404aa1374b3!2sShiv%20Glass!5e0!3m2!1sen!2sin!4v1709471610659!5m2!1sen!2sin" className="border-0 w-full h-[28rem] pt-4" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

export default Contact