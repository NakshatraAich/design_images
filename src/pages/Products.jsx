const Products = () => {

  const featuresAndTopics = [
    { feature: "Material", topic: "Toughened Glass" },
    { feature: "Edge", topic: "Beveled/Straight Edge" },
    { feature: "Size", topic: "As per customer Requirement" },
    { feature: "Colour Variants", topic: "As per customer Requirement" },
    { feature: "Packaging", topic: "EPE Foam Bag, Carton box, Safety Wooden box" },
    { feature: "Delivery", topic: "10-15 Days" },
    { feature: "OEM", topic: "Provided" },
    { feature: "Printing Type", topic: "Digital Print / Screen Print" },
    { feature: "Effects", topic: "Mirror, Frosting" }
  ];

  const render = (array) => {
    return array.map((item, index) => (
      <p key={index} className="pb-4">
        <p className="text font-bold text-textColor">{item.feature}</p>
        <p className="text-lg font text-altTextColor">{item.topic}</p>
      </p>
    ));
  };

  return (
    <div className="tracking-widest pt-12">
      <div className="px-[200px] flex flex-col gap-2 pb-16">
          <h1 className="text-6xl text-textColor font-semibold">Products</h1>
          <h2 className="text-altTextColor max-w-[750px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
      </div>

      <div className="px-[200px] flex flex-col gap-2 pb-16">
        <h3 className="text-2xl text-textColor font-semibold pb-4">Touch Switch/Switch Panels</h3>   
        
        <div className="carousel carousel-center max-w-full pr-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
        </div> 

        <div className="join join-vertical w-full flex flex-col gap-2 pt-8">
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
                Product Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
              Glass Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="px-[200px] flex flex-col gap-2 pb-16">
        <h3 className="text-2xl text-textColor font-semibold pb-4">Touch Switch/Switch Panels</h3>   
        
        <div className="carousel carousel-center max-w-full pr-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
        </div> 

        <div className="join join-vertical w-full flex flex-col gap-2 pt-8">
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
                Product Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
              Glass Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="px-[200px] flex flex-col gap-2 pb-16">
        <h3 className="text-2xl text-textColor font-semibold pb-4">Touch Switch/Switch Panels</h3>   
        
        <div className="carousel carousel-center max-w-full pr-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[28rem] h-auto rounded-box" />
          </div> 
        </div> 

        <div className="join join-vertical w-full flex flex-col gap-2 pt-8">
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
                Product Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus join-item border-0">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-altTextColor text-xl font-semibold border-b-2">
              Glass Specifications
            </div>
            <div className="collapse-content"> 
              <p className="pt-4">
                {render(featuresAndTopics)}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products