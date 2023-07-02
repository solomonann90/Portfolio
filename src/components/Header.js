import React from "react";
import "../index.css";

const Header = () => {
  const PDF_FILE_URL = "http://localhost:3000/Ann-Resume.pdf";
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="logo">
            ANN SOLOMON
          </a>
          <button
            className="btn btn-sm"
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
