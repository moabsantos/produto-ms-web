import React from "react";
import "./spinner.css";

export default function LoadingSpinner(props) {

  return (
    props.ativar && <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}