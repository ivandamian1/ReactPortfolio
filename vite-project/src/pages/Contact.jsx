import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as the user types
    if (value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Validate fields
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
      formIsValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      alert('Your message has been submitted!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
