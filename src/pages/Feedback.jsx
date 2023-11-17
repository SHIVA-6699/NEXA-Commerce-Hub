// Feedback.js
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createFeedback } from "../graphql/mutations";
import { FileUploader } from "react-drag-drop-files";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fileTypes = ["JPG", "PNG", "GIF"];

const Feedback = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (files) => {
    setFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a feedback object
    const feedbackData = {
      name,
      email,
      message,
      file: file ? file.base64 : null,
    };

    try {
      // Set loading state
      setLoading(true);

      // Save feedback data to DynamoDB using GraphQL mutation
      await API.graphql(
        graphqlOperation(createFeedback, { input: feedbackData })
      );

      // Reset loading state
      setLoading(false);

      // Show success toast
      toast.success("Feedback submitted successfully!");

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setFile(null);
    } catch (error) {
      console.error("Error saving feedback:", error);

      // Reset loading state
      setLoading(false);

      // Show error toast
      toast.error("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="" style={{ "color": "#163A66" }}>
        Contact Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">File:</label>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          {file && <p className="mt-2">Selected file: {file.name}</p>}
        </div>
        <button
          type="submit"
          className="btn btn-primary border-0"
          style={{ background: "#163A66" }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Feedback;
