import React from "react";
import Button from "./Button.jsx";
import styles from "./ErrorFallback.module.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className={styles.errorFallback}>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <Button type="primary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
