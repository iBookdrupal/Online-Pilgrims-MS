import Carousel from "react-slider-responsive";
import image1 from "../../../images/mosque.jpg";
import image2 from "../../../images/airbus.jpg";
import image3 from "../../../images/flight.jpg";
import image4 from "../../../images/pilgrims.jpg";
const HomeSlide = () => {
  return (
    <Carousel autoplay={10000} style={{ height: "50%" }}>
      <div>
        <img src={image1} alt="home-slide" size="medium" />
      </div>

      <div>
        <img src={image2} alt="home-slide" />
      </div>

      <div>
        <img src={image3} alt="home-slide" />
      </div>

      <div>
        <img src={image4} alt="home-slide" />
      </div>
    </Carousel>
  );
};

export default HomeSlide;
