import TextField, { TextFieldProps } from "@mui/material/TextField";

import TextareaAutosize from "@mui/material/TextareaAutosize";

import Button from "@mui/material/Button";
import { useForm } from "@formspree/react";

import Toast from "react-bootstrap/Toast";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkyzqyz");
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 8000);
    return (
      <div>
        <center>
          <Toast
            style={{ marginBottom: "5rem", marginTop: "5rem" }}
            className="toast"
          >
            <Toast.Header closeButton={false}>
              <img src="" className="rounded me-2" alt="" />
              <strong className="me-auto">Push Team</strong>
              <small>Just now</small>
            </Toast.Header>
            <Toast.Body style={{ color: "black" }}>
              Thank You! We'll be in touch.
            </Toast.Body>
          </Toast>
        </center>
      </div>
    );
  }
  return (
    <div className="contactWrap" id="contact">
      <div className="cttwrap">
        <h1 style={{ color: "black" }}>Inquiries</h1>
        <h3 className="ctext">Let's talk.</h3>
        <hr></hr>
      </div>
      <div
        className="contactForm"
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "2rem",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" id="name" required />
          <TextField
            fullWidth
            label="Email"
            type="email"
            id="email"
            name="email"
            required
            style={{ marginTop: "2rem" }}
          />
          <TextField
            fullWidth
            label="Company"
            type="text"
            id="company"
            name="company"
            required
            style={{ marginTop: "2rem" }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            required
            id="Message"
            name="message"
            minRows={5}
            placeholder="Message"
            style={{
              marginTop: "2rem",
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "3px",
              maxHeight: "150px",
            }}
          />

          <Button
            variant="contained"
            style={{
              width: "10rem",
              height: "3rem",
              backgroundColor: "#B6D433",
              marginTop: "2rem",
              gap: "1rem",
            }}
            type="submit"
            disabled={state.submitting}
          >
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
