const Footer = () => {
  return (
    <div className="footer">
      <div className="footWrap">
        <div className="leftSide">
          <div>
            <h3>About Us</h3>
            <hr style={{ width: "7.4rem" }}></hr>
          </div>
          <div className="righttextmargin">
            <p4 style={{ color: "black" }}>
              Push Transportation strives
              <br />
              to deliver around-the-clock <br /> satisfactory service to our{" "}
              <br />
              clients. Safe, secure, and <br /> stress-free transportation{" "}
              <br /> of your cannabis products
              <br /> is assured with Push.
            </p4>
          </div>
        </div>
        <div className="rightSide">
          <h3>Contact Information</h3>
          <hr></hr>
          <div className="iconsRight">
            <div className="iconOne">
              <img
                src="https://img.icons8.com/material-sharp/344/mail.png"
                width="30px"
                height="30px"
              ></img>
              <p4>ericpkozlow@gmail.com</p4>
            </div>
            <div className="iconTwo">
              <img
                src="https://img.icons8.com/ios-filled/344/iphone-x.png"
                width="30px"
                height="30px"
              ></img>
              <p4>908-858-6819</p4>
            </div>
            <div className="iconThree">
              <img
                src="https://img.icons8.com/ios-filled/344/marker.png"
                width="30px"
                height="30px"
              ></img>
              <p4>
                Route 22 East Drive 8a, <br />
                Westfield, NJ 07090
              </p4>
            </div>
          </div>
        </div>
      </div>
      <hr style={{}}></hr>
      <center>
        <p4 style={{ color: "black" }}>© Push Transportation, 2022</p4>
      </center>
    </div>
  );
};

export default Footer;
