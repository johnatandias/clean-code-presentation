import React from 'react';

interface IImage {
  alt: string,
  name: string,
}

export const Image: React.FC<IImage> = ({ alt, name }) => (
  <img
    style={{ height: '100%' }}
    src={require(`../assets/${name}`)}
    alt={alt}
  />
);
