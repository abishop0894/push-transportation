import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";

const ItemCarousel = () => {
  return (
    <div className="carousel" id="services">
      <h4 style={{ color: "black" }}>Deliver Shipments Via</h4>
      <Carousel variant="dark">
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src="https://imagesforproject22.s3.amazonaws.com/car.png"
            alt="First slide"
            width={400}
          />
          <Carousel.Caption>
            <h3>Car</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src="https://imagesforproject22.s3.amazonaws.com/van.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Van</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-120 h-120"
            src="https://imagesforproject22.s3.amazonaws.com/truck.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Truck</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <Figure>
          <Figure.Image
            width={321}
            height={340}
            alt="171x180"
            src="https://www.peoplegis.com/sites/default/files/24-7-365-icons.png"
          />
          <Figure.Caption>
            Big shipment? No problem! Our team is available 24/7
            <br />
            to accomodate you suitably.{" "}
          </Figure.Caption>
        </Figure>
        <hr />
      </div>
    </div>
  );
};

export default ItemCarousel;
