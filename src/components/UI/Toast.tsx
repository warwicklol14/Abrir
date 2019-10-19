import * as React from "react";
import './Toast.css'

interface ToastProps {
    appearance:string;
}

export const Toast:React.FC<ToastProps> = ({ appearance, children }) => {
  return (
    <div className={appearance === 'success'? "Toast" : "Toast Toast_error"}>
      <div className={appearance}>
        <pre>{appearance === 'success' ? "^_^" : "(;︵;)"}</pre>
      </div>
      <div className="message">
        {children}
      </div>
    </div>
  );
}