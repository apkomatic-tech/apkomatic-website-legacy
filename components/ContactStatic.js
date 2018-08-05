import React from 'react';

const ContactStatic = () => (
  <div className="static-contact">
    <div className="top">
      <address>
        Email: <a href="mailto:apkomatic@gmail.com">apkomatic@gmail.com</a>
      </address>
    </div>
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27400089975!2d-118.69191545156662!3d34.02016131792394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1524695402254"
      width="100%"
      height="350px"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />
  </div>
);

export default ContactStatic;
