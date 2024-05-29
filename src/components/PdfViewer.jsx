import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./PdfViewer.css"; // Import your custom CSS

// Ensure the versions match
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const { path } = useParams();
  const filePath = path;
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
    <div className="max-w-screen-lg mx-auto flex flex-col h-screen">
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
      <div className="pdf-container border border-gray-300 flex-grow">
        <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={window.innerWidth * 0.75} />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
