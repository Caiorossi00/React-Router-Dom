import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleContact = () => {
    alert("We received your message!\n\nGoing back to Homepage");
    return navigate("/");
  };

  return (
    <div>
      Contact Details from user: {id}
      {id && <button onClick={handleContact}>Contact us</button>}
    </div>
  );
};

export default ContactDetails;
