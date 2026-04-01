import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const myNumber = "919325293274"; // Aapka number with country code

    // WhatsApp message format
    const text =
      `*New Inquiry from SK Solar*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;

    // Naya tab kholne ke liye
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact-main-section">
      <div className="contact-grid-container">
        {/* Left Side: Info Cards */}
        <div className="info-cards-column">
          <div className="info-card">
            <div className="info-icon pink">📍</div>
            <h3>Address</h3>
            <p>Jalgaon, Maharashtra, India</p>
          </div>

          <div className="info-card">
            <div className="info-icon purple">📞</div>
            <h3>Phone</h3>
            <p>+91 9325293274</p>
          </div>

          <div className="info-card">
            <div className="info-icon navy">✉️</div>
            <h3>Email</h3>
            <p>info@sksolar.com</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleWhatsAppSend}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
