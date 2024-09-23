"use client";

import React, { useState } from 'react';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  width?: string;
  height?: string;
  fadeDuration?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  width = '608px',
  height = '196px',
  fadeDuration = '0.6s',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: width,
        height: height,
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={altText}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: `opacity ${fadeDuration} ease-in-out`,
          opacity: isHovered ? 0.7 : 1,
        }}
      />

      {/* Hover Effect - Black Shade with Text */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: isHovered
            ? 'linear-gradient(to top right, rgba(0, 0, 0, 0.8) 0%, transparent 50%)'
            : 'transparent',
          color: '#fff',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '10px',
          transition: `background ${fadeDuration} ease-in-out, opacity ${fadeDuration} ease-in-out`,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h3 style={{ margin: '0', fontSize: '18px' }}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
