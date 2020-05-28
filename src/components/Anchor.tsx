import React from 'react';

export const Anchor = ({ url, text }: { url: string, text: string }) => (
  <a href={url} target="_blanck">{text}</a>
);
