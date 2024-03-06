import { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay} from 'swiper/modules';

import { Context } from '../App';

const Products = () => {
  const [activeTab, setActiveTab] = useContext(Context);

  const productCategories = [
    {
      id: 'Touch Switch/Switch Panels',
      name: 'Touch Switch/Switch Panels',
      featuresAndTopics : [
        { "feature": "Material", "topic": "Toughened Glass" },
        { "feature": "Edge", "topic": "Beveled/Straight Edge" },
        { "feature": "Color Variants", "topic": "As per customer Requirement" },
        { "feature": "Packaging", "topic": "EPE Foam Bag, Carton box, Safety Wooden box" },
        { "feature": "Delivery", "topic": "10-15 Days" },
        { "feature": "OEM", "topic": "Provided" },
        { "feature": "Printing Type", "topic": "Digital Print / Screen Print" },
        { "feature": "Effects", "topic": "Mirror, Frosting" }
      ],
      featuresAndTopics2 : [
        { "feature": "Glass Type", "topic": "Extra Clear Glass" },
        { "feature": "Glass Thickness", "topic": "3mm to 6mm" },
        { "feature": "Specific weight (kg/m2)", "topic": "4mm to 10.0kgs" },
        { "feature": "Mechanical Strength", "topic": "100 MPa" },
        { "feature": "Young Modules", "topic": "70 Gpa" },
        { "feature": "Density (kg/m3)", "topic": "2500" }
      ],
      images: [
        'https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 'Modular Switch Glass Plates',
      name: 'Modular Switch Glass Plates',
      featuresAndTopics : [
        { feature: 'Material', topic: 'Toughened Glass' },
        { feature: 'Edge', topic: 'Beveled/Straight Edge' },
        { feature: 'Size', topic: 'As per customer Requirement' },
        { feature: 'Colour Variants', topic: 'As per customer Requirement' },
        { feature: 'Packaging', topic: 'EPE Foam Bag, Carton box, Safety Wooden box' },
        { feature: 'Delivery', topic: '10-15 Days' },
        { feature: 'OEM', topic: 'Provided' },
        { feature: 'Printing Type', topic: 'Digital Print / Screen Print' },
        { feature: 'Effects', topic: 'Mirror, Frosting' },
      ],
      featuresAndTopics2 : [
        { "feature": "Glass Type", "topic": "Extra Clear Glass" },
        { "feature": "Glass Thickness", "topic": "3mm to 6mm" },
        { "feature": "Specific weight (kg/m2)", "topic": "4mm 10.0 kgs" },
        { "feature": "Mechanical Strength", "topic": "100 MPa" },
        { "feature": "Young Modules", "topic": "70 GPa" },
        { "feature": "Density (kg/m3)", "topic": "2500" }
      ], 
      images: [
        'https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 'Machinery',
      name: 'Machinery',
      featuresAndTopics : [
        { "feature": "Material", "topic": "Toughened Glass" },
        { "feature": "Edge", "topic": "Beveled/Straight Edge" },
        { "feature": "Colour Variants", "topic": "As per customer Requirement" },
        { "feature": "Packaging", "topic": "EPE Foam Bag, Carton box, Safety Wooden box" },
        { "feature": "Delivery", "topic": "10-15 Days" },
        { "feature": "OEM", "topic": "Provided" },
        { "feature": "Printing Type", "topic": "Digital Print / Screen Print" },
        { "feature": "Effects", "topic": "Mirror, Frosting" }
      ],
      featuresAndTopics2 : [
        { "feature": "Glass Type", "topic": "Extra Clear Glass" },
        { "feature": "Glass Thickness", "topic": "3mm to 12mm" },
        { "feature": "Specific weight (kg/m2)", "topic": "4mm 10.0 kgs" },
        { "feature": "Young Modules", "topic": "70 GPa" },
        { "feature": "Mechanical Strength", "topic": "100 MPa" },
        { "feature": "Density (kg/m3)", "topic": "2500" }
      ],      
      images: [
        'https://images.unsplash.com/photo-1678107520091-c250d5068943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1534659477036-c05235c62402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.uplash.com/pmium_photo-1683129640700-c9c56c82dcdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1441031854696-009616241b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tracking-widest pt-24 sm:pt-20 flex flex-col">
      <div className="px-[25px] sm:px-[90px] xl:px-[200px] flex flex-col gap-2 pb-8 sm:pb-16">
        <h1 className="text-4xl sm:text-6xl text-textColor font-semibold">Products</h1>
        <h2 className="text sm:text text-textColor">Discover an extensive array of inventive and user-friendly products designed to meet your needs and enhance your experience.</h2>
      </div>
      
      <div className="px-[25px] sm:px-[90px] xl:px-[200px] flex flex-row gap-2 pb-[2rem] overflow-scroll no-scrollbar">
        {productCategories.map((category) => (
          <button
            key={category.id}
            className={`tab btn focus:bg-brandColor ${activeTab === category.id ? 'active border-brandColor bg-brandColor text-white' : 'border-brandColor border-2 bg-white text-brandColor'} border-brandColor bg-brandColor rounded-full`}
            onClick={() => handleTabChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {productCategories.map((category) => (
        <div
          key={category.id}
          id={category.id}
          className={`flex flex-col px-[25px] sm:px-[90px] xl:px-[200px] pb-12 product-section ${activeTab === category.id ? 'active' : 'hidden'}`}
        >

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}

              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              
              {category.images.map((image, index) => (
                // eslint-disable-next-line react/jsx-key
                <SwiperSlide>
                  <div key={index} className="carousel-item">
                    <img src={image} className="h-auto rounded-box" alt={`Product ${index}`} />
                  </div>
                </SwiperSlide>
                  ))}
            </Swiper>
          </div>

          <div className="pt-4 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium border-b-2 border-[#C9C9C9]">
              Product Specifications
            </div>
            <div className="collapse-content w-full flex flex-col gap-4 pt-4">
              {category.featuresAndTopics.map((item, index) => (
                <div key={index} className="border-0">
                  <div className="text-altTextColor text-sm font-bold">
                    {item.feature}
                  </div>
                  <div className="font-medium text-xs">
                    <p className="pt-2">
                      <span className="text leading-none font-medium text-textColor">{item.topic}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium border-b-2 border-[#C9C9C9]">
              Glass Specifications
            </div>
            <div className="collapse-content w-full flex flex-col gap-4 pt-4">
              {category.featuresAndTopics2.map((item, index) => (
                <div key={index} className="border-0">
                  <div className="text-altTextColor text-sm font-bold">
                    {item.feature}
                  </div>
                  <div className="font-medium text-xs">
                    <p className="pt-2">
                      <span className="text leading-none font-medium text-textColor">{item.topic}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
      
    </div>
  );
};

export default Products;
