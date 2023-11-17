// src/components/UserProfile.jsx
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form,Button } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    verificationCode: "",
    forgotPasswordEmail: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
        setFormData({
          username: userData.username,
          email: userData.attributes.email,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
          verificationCode: "",
          forgotPasswordEmail: "",
        });
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    // Implement the logic to update user profile using Amplify Auth API
    try {
      // Update user profile logic here

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleChangePassword = async () => {
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      await Auth.changePassword(user, oldPassword, newPassword);
      toast.success("Password changed successfully!");
      setFormData({
        ...formData,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error changing password: ", error);
      toast.error(
        "Failed to change password. Please check your old password and try again."
      );
    }
  };

  const handleForgotPassword = async () => {
    const { forgotPasswordEmail } = formData;

    if (!forgotPasswordEmail) {
      toast.error(
        "Please provide your email to initiate the password reset process."
      );
      return;
    }

    try {
      await Auth.forgotPassword(forgotPasswordEmail);
      toast.success("Password reset instructions sent to your email.");
    } catch (error) {
      console.error("Error sending password reset instructions: ", error);
      toast.error(
        "Failed to send password reset instructions. Please try again."
      );
    }
  };

  const handleVerifyCode = async () => {
    const { forgotPasswordEmail, verificationCode, newPassword } = formData;

    if (!verificationCode || !newPassword) {
      toast.error(
        "Please provide both the verification code and a new password."
      );
      return;
    }

    try {
      await Auth.forgotPasswordSubmit(
        forgotPasswordEmail,
        verificationCode,
        newPassword
      );
      toast.success(
        "Password reset successful. You can now log in with your new password."
      );
      setFormData({
        ...formData,
        verificationCode: "",
        newPassword: "",
      });
    } catch (error) {
      console.error("Error verifying code and resetting password: ", error);
      toast.error(
        "Failed to verify code and reset password. Please try again."
      );
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <h4 className="mt-4" style={{ color: "#163A66" }}>
        User Profile
      </h4>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleUpdateProfile} className="mt-3">
            <Form.Group controlId="formUsername">
              <Form.Label style={{ color: "#163A66" }}>Username</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user?.username}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: "#163A66" }}>
                {" "}
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                defaultValue={user?.attributes?.email}
                disabled
              />
            </Form.Group>

        

            <Button
              variant="primary"
              type="submit"
              className="mt-3 border-0"
              style={{ background: "#163A66" }}
            >
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>

      <hr className="mt-5" />

      <Row>
        <Col md={6}>
          <h4 style={{ color: "#163A66" }}>Forgot Password</h4>
          <Form className="mt-3">
            <Form.Group controlId="formForgotPasswordEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="forgotPasswordEmail"
                value={formData.forgotPasswordEmail}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="mt-3 border-0"
              onClick={handleForgotPassword}
              style={{ background: "#163A66" }}
            >
              Send Reset Code
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="mt-3">
            <Form.Group controlId="formVerificationCode">
              <Form.Label style={{ color: "#163A66" }}>
                Verification Code
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter verification code"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formNewPasswordForgot">
              <Form.Label style={{ color: "#163A66" }}>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="border-0 mt-3"
              onClick={handleVerifyCode}
              style={{ background: "#163A66" }}
            >
              Verify Code & Reset Password
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Add ToastContainer to display toast messages */}
      <ToastContainer />
    </Container>
  );
};

export default Profile;
