import React, { useState, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [updateUserName, setUpdateUserName] = useState("");
  const [updateUserDetails, setUpdateUserDetails] = useState("");
  const [deleteUserName, setDeleteUserName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch all users
      const userData = await Auth.listUsers();
      setUsers(userData.Users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const createUser = async () => {
    try {
      // Create a new user
      await Auth.signUp({
        username: newUserName,
        password: "tempPassword", // You may want to handle passwords more securely
      });

      // Notify success
      toast.success(`User ${newUserName} created successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Fetch updated user list
      fetchUsers();
    } catch (error) {
      console.error("Error creating user:", error);

      // Notify error
      toast.error(
        "Error creating user. Please check the console for details.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const updateUser = async () => {
    try {
      // Update user attributes
      await Auth.updateUserAttributes(updateUserName, updateUserDetails);

      // Notify success
      toast.success(`User ${updateUserName} updated successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Fetch updated user list
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);

      // Notify error
      toast.error(
        "Error updating user. Please check the console for details.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const deleteUser = async () => {
    try {
      // Delete user
      await Auth.deleteUser(deleteUserName);

      // Notify success
      toast.success(`User ${deleteUserName} deleted successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Fetch updated user list
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);

      // Notify error
      toast.error(
        "Error deleting user. Please check the console for details.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  return (
    <div className="container mt-5">
      

      {/* Create User */}
      <div className="mb-3">
        <h4>Create New User</h4>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button className="btn btn-primary" onClick={createUser}>
            Create User
          </button>
        </div>
      </div>

      {/* Update User */}
      <div className="mb-3">
        <h4>Update User</h4>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username to update"
            value={updateUserName}
            onChange={(e) => setUpdateUserName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter updated details"
            value={updateUserDetails}
            onChange={(e) => setUpdateUserDetails(e.target.value)}
          />
          <button className="btn btn-primary" onClick={updateUser}>
            Update User
          </button>
        </div>
      </div>

      {/* Delete User */}
      <div className="mb-3">
        <h4>Delete User</h4>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username to delete"
            value={deleteUserName}
            onChange={(e) => setDeleteUserName(e.target.value)}
          />
          <button className="btn btn-danger" onClick={deleteUser}>
            Delete User
          </button>
        </div>
      </div>

      {/* List Users */}
      <div>
        <h4>List of Users</h4>
        <ul>
          {users.map((user) => (
            <li key={user.Username}>{user.Username}</li>
          ))}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Users;
