import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import PrintInformation from "./PrintInformation";
// import outputer from "./outputer"

function PrintInformation({ data }) {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae
        eum optio maiores ea quis doloremque pariatur similique iusto alias sint
        consequatur, labore sapiente quo aperiam earum velit dolor non.
      </p>
      <br/>
    </div>
  );
}

export default function () {
  // State for form fields
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
    if (formSubmitted) {
      setFormData({ ...formData, question: "" });
    }
    else
    setFormData({ ...formData, [name]: value });
    console.log(formSubmitted);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted({ formSubmitted: true });
    setSubmittedData([...submittedData, formData]);
    console.log(formData);
  };
  const changeState = (e) => {
    e.preventDefault();

    setFormSubmitted({ formSubmitted: false });
    console.log(formData);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Submit the form when Enter key is pressed
      handleSubmit(e);
    }
  };

  return (
    <div className="mainContent">
      <div className="form-form">
        <form
          onSubmit={handleSubmit}
          className="form3"
          onKeyDown={handleKeyDown}
        >
          {/* <input type="text" placeholder="Ask Your Question Here" className="form-form"></input> */}
          <label>
            <input
              type="text"
              className="form2"
              name="question"
              placeholder="Ask your question here"
              value={formData.question}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="output--place">
      {submittedData.map((data, index) => (
          <PrintInformation key={index} data={data} />
        ))}
        {/* {formSubmitted && <changeState/>} */}
      </div>
    </div>
  );
}
