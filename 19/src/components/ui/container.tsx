import React from 'react';
import { ContainerCapsuleProps } from '../../types/container';



export const ContainerCapsule: React.FC<ContainerCapsuleProps> = ({ children, className='', style }) => {
  return (
    <div className={`container mx-auto border bg-white p-14 ${className}`} style={style}>
      {children}
    </div>
  );
};


