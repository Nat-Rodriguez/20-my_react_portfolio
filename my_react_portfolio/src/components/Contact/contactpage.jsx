import { useState } from 'react';

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState('');

  // Destructuring form data
  const { name, message } = formData;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (!errorMessage) {
      console.log('Submit Form', formData);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    // Validation for other inputs
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }

    // Update form data if no errors
    if (!errorMessage) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log('Handle Form', formData);
    }
  };

  return (
    <section>
      {/* Form */}
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        {/* Message Textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
          />
        </div>
        {/* Display Error Message */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
