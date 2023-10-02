import BottomBar from "../../components/bottomBar/BottomBar";
import "./contact.css";

export default function Contact() {
  return (
    <div class="contact-section1">
      <h1 className="header1">Contact Us</h1>
      <p className="ctx">
        Have questions or feedback? Feel free to get in touch with us using the
        form below:
      </p>
      <form className="contactForm" action="#" method="post">
        <label className="label1" for="name">Name:</label>
        <input className="input1" type="text" id="name" name="name" required />

        <label className="label1" for="email">Email:</label>
        <input className="input1" type="email" id="email" name="email" required />

        <label className="label1" for="message">Message:</label>
        <textarea className="msg" id="message" name="message" rows="4" required></textarea>
        <br />
        <button id="btn" type="submit">Submit</button>
      </form>
      <BottomBar />
    </div>
  );
}
