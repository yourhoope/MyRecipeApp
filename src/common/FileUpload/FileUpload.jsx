import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PropTypes from "prop-types";
import { AiOutlinePicture } from "react-icons/ai";

function FileUpload({ onFileUpload }) {
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null); 

  async function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileRef = ref(storage, `uploads/${file.name}`);
    setLoading(true);

    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setFileUrl(url); 
      onFileUpload(url); 
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="addImg-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "start",
      }}
    >
      {fileUrl ? (
        <img
          src={fileUrl}
          alt="Uploaded file preview"
          className="file-preview"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      ) : (
        <AiOutlinePicture
          style={{
            cursor: "pointer",
            width: "200px",
            height: "200px",
            color: "#6A9C89",
          }}
        />
      )}

      <input
        type="file"
        onChange={handleChange}
        style={{ cursor: "pointer", width: "200px" }}
      />
      {loading && <p>Uploading...</p>}
    </div>
  );
}

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

export default FileUpload;
