import { Carousel } from "antd";

const contentStyle = {
  height: "180px",
  color: "#fff",
  lineHeight: "190px",
  textAlign: "center",
  background: "#364d79",
};

const Casousel = () => (
  <Carousel autoplay={true} className="md:mt-11 md:mx-20">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Casousel;
