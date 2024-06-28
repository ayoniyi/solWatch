"use client";
import React from "react";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import { useState } from "react";
import { Document, Page } from "react-pdf";

const Docs = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <>
      <div className="pdfBox">
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
        {/* <Document className="pdfDoc" file="/solanawatch.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
        <Document file="/solanawatch.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page
                  className="pdfDoc"
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={0.6}
                />
              );
            })}
        </Document>
      </div>
      <div className="pdfBoxRes">
        <Document file="/solanawatch.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  // scale={1}
                  width={440}
                  height={600}
                />
              );
            })}
        </Document>
      </div>
    </>
  );
};

export default Docs;
