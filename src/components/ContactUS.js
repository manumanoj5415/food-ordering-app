import React, { useState } from "react";
import "./Contact.Module.css";
function Contact() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted name: ${name}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Please drop your name here"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p> Wee will contact you soon </p>
    </>
  );
}

export default Contact;
