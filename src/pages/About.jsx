const About = () => {
  return (
    <section>
      <div className="tracking-widest pt-12">
        <div className="px-[200px] flex flex-col gap-2 pb-16">
          <h1 className="text-6xl text-textColor font-semibold">About Us</h1>
          <h2 className="text-altTextColor max-w-[750px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
        </div>
        <div className="flex flex-row px-[200px] justify-between gap-16">
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1500" className="rounded-2xl" alt="Burger" />
            <div className="pt-4 text-2xl text-textColor font-semibold">Name</div>
            <div className="text-altTextColor">Position</div>
          </div>
          <div className="flex flex-col items-start">
            <img src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1500" className="rounded-2xl" alt="Burger" />
            <div className="pt-4 text-2xl text-textColor font-semibold">Name</div>
            <div className="text-altTextColor">Position</div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1500" className="rounded-2xl" alt="Burger" />
            <div className="pt-4 text-2xl text-textColor font-semibold">Name</div>
            <div className="text-altTextColor">Position</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About