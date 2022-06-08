import React from 'react';
import TypeAnimation from 'react-type-animation';

export function TextTypeAnimation({ sequence, className = '' }) {
  return <TypeAnimation cursor={true} sequence={sequence} className={className} wrapper="h3" repeat={Infinity} />;
}
