import Figure from "react-bootstrap/Figure";

const About = () => {
  return (
    <div>
      <center>
        <h1
          style={{ color: "black", marginTop: "5rem", marginBottom: "5.5rem" }}
        >
          We Guarantee
        </h1>
      </center>

      <div className="about">
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://img.icons8.com/external-justicon-lineal-justicon/344/external-calendar-calendar-and-date-justicon-lineal-justicon-7.png"
          />
          <Figure.Caption>
            <center>
              <h3>Punctuality</h3>
            </center>
            <hr></hr>
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://img.icons8.com/ios-filled/344/clock--v1.png"
          />
          <Figure.Caption>
            <center>
              <h3>Flexibility</h3>
            </center>
            <hr></hr>
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://img.icons8.com/ios-filled/344/high-priority-message.png"
          />
          <Figure.Caption>
            <center>
              <h3>Reliability</h3>
            </center>
            <hr></hr>
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default About;
