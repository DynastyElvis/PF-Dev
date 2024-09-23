import React from 'react';
import '../../globals.css'; // Correct the import path

interface ButtonProps {
  label: string;
  onClick?: () => void; // Optional click handler
  style?: React.CSSProperties; // Optional custom style
  width?: string; // Optional width
  height?: string; // Optional height
}

const Button: React.FC<ButtonProps> = ({ label, onClick, style, width = 'auto', height = 'auto' }) => {
  return (
    <button
      onClick={onClick}
      className="custom-button" // Apply the CSS class
      style={{
        width: width,  // Override width if needed
        height: height,  // Override height if needed
        ...style,
      }}
    >
      <p style={{ margin: 0 }}>{label}</p> {/* Text is now inside a <p> */}
    </button>
  );
};

export default Button;
