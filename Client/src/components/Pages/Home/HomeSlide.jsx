import Carousel from "react-slider-responsive";
import image1 from "../../../images/mosque.jpg";
import image2 from "../../../images/airbus.jpg";
import image3 from "../../../images/flight.jpg";
import image4 from "../../../images/pilgrims.jpg";

const HomeSlide = () => {
  return (
    <div>
      <Carousel autoplay={10000}>
        <div>
          <img src={image1} alt="home-slide" />
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
    </div>
  );
};

export default HomeSlide;
