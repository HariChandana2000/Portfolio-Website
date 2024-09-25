import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./ContactStyles";

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jcileaw",
        "template_bhrjovq",
        form.current,
        "NpLapiPCOWgiK4sB_"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder='Your Email' name='from_email' required />
          <ContactInput placeholder='Your Name' name='from_name' required />
          <ContactInput placeholder='Subject' name='subject' />
          <ContactInputMessage
            placeholder='Message'
            rows='4'
            name='message'
            required
          />
          <ContactButton type='submit' value='Send' />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message='Email sent successfully!'
          severity='success'
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
