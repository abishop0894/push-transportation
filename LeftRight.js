import Card from "react-bootstrap/Card";

const LeftRight = () => {
  return (
    <div className="leftRight">
      <img src="https://imagesforproject22.s3.amazonaws.com/rsz_3map_good_iphone13miniblue_portrait.png"></img>
      <Card
        style={{
          width: "23rem",
          height: "28rem",
          color: "black",
          border: "0px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h1>Track Your Orders.</h1>
          </Card.Title>
          <Card.Text style={{ marginTop: "30px" }}>
            <h4>
              Using in-house real-time tracking software provided <br /> to all
              of our clients free of charge, we deliver your cannabis products
              with the utmost transparency.
            </h4>
            <hr></hr>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftRight;
