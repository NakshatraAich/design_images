const Features = () => {
  return (
    <section className="flex flex-row justify-between px-[160px] tracking-widest py-20 bg-[#D9D9D9] gap-12">
        <div>
            <h1 className="text-5xl font-semibold text-textColor leading-30 pb-5">Lorem ipsum <br/>dolor sit amet, consectetur.</h1>
            <h2 className="text-lg text-altTextColor">Lorem ipsum dolor sit amet, consectetur.<br/> Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</h2>
        </div>
        <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-row gap-4">
                <div width="80" height="80"/>  
                <div className="text-altTextColor text-lg">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</div>  
            </div>
            <div className="flex flex-row gap-4">
                <div width="80" height="80"/> 
                <div className="text-altTextColor text-lg">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</div>  
            </div>
            <div className="flex flex-row gap-4">
                <div width="80" height={80} className="border-2 border-black"/> 
                <div className="text-altTextColor text-lg">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</div>  
            </div>
        </div>
    </section>
  )
}

export default Features