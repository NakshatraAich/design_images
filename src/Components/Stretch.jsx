import { logo_alt } from "../assets"

const Stretch = () => {
  return (
    <section className="px-[160px] py-32 bg-brandColor flex flex-row items-center gap-20 justify-between tracking-widest">
        <img src={logo_alt} width={400}/>
        <div className="text-3xl text-white font-semibold">
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt <br/>ut labore et dolormagna aliqua.
        </div>
    </section>
  )
}

export default Stretch