import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Ensure the versions match
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const { path } = useParams();
  const filePath = path;
  console.log("pth",path)   
  console.log("filpath",filePath)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) =>
      Math.min(Math.max(prevPageNumber + offset, 1), numPages)
    );
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={previousPage}
          disabled={pageNumber <= 1}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-800 font-semibold"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-800 font-semibold"
        >
          Next
        </button>
      </div>
      <div className="border border-gray-300">
        <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
