import React from "react";
import Button from "./Button.jsx";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ color: "black" }}>
      <h1>Something went wrong 😢</h1>
      <p style={{ marginBottom: "1.6rem" }}>{error.message}</p>
      <Button type="primary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
