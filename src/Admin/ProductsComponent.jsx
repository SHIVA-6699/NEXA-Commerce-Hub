import React, { useState } from "react";
import { Storage } from "aws-amplify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsComponent = () => {
  const [folderName, setFolderName] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleFolderChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validate that the file is a JPG image
    if (file && file.type !== "image/jpeg") {
      toast.error("Please select a JPG image file.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setFileName(file ? file.name : "");
    setFileContent(file);
  };

  const handleCreateFolder = async () => {
    if (!folderName) {
      toast.error("Please provide a folder name.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      // Create the folder
      await Storage.put(`${folderName}/`, "");

      console.log("Folder created successfully:", folderName);

      // Clear the folder name after successful creation
      setFolderName("");

      toast.success("Folder created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error creating folder:", error);
      toast.error(
        "Error creating folder. Please check the console for details.",
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

  const handleUpdateFolder = async () => {
    if (!folderName) {
      toast.error("Please provide a folder name.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      // Update the folder
      await Storage.put(`${folderName}/`, "");

      console.log("Folder updated successfully:", folderName);

      toast.success("Folder updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error updating folder:", error);
      toast.error(
        "Error updating folder. Please check the console for details.",
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

  const handleCreateFile = async () => {
    if (!fileName) {
      toast.error("Please provide a file name.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      // Create the file inside the folder
      await Storage.put(`${folderName}/${fileName}`, fileContent, {
        contentType: "image/jpeg",
      });

      console.log("File created successfully:", fileName);

      // Clear the file-related state after successful creation
      setFileName("");
      setFileContent("");

      toast.success("File created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error creating file:", error);
      toast.error(
        "Error creating file. Please check the console for details.",
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
      <h3>Create/Update Folder and Add File in S3</h3>
      <div className="mb-3">
        <label htmlFor="folderName" className="form-label">
          Folder Name:
        </label>
        <div className="input-group">
          <input
            type="text"
            id="folderName"
            className="form-control"
            value={folderName}
            onChange={handleFolderChange}
            placeholder="Enter folder name"
          />
          <button
            className="btn btn-primary border-0"
            type="button"
            onClick={handleCreateFolder}
            style={{ background: "#163A66" }}
          >
            Create Folder
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleUpdateFolder}
          
          >
            Update Folder
          </button>
        </div>
      </div>
      {folderName && (
        <div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Choose JPG Image File:
            </label>
            <input
              type="file"
              id="file"
              className="form-control"
              onChange={handleFileChange}
              accept=".jpg, .jpeg"
            />
          </div>
          {fileName && (
            <div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleCreateFile}
              >
                Create File
              </button>
            </div>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductsComponent;
