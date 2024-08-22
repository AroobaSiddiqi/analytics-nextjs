import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  color?: string;
  className?: string;
}

export default function SkeletonLoader({
  width = 'w-full',
  height = 'h-6',
  borderRadius = 'rounded-md',
  color = 'bg-gray-300',
  className = '',
}: SkeletonLoaderProps) {
  return (
    <div
      className={`${width} ${height} ${borderRadius} ${color} animate-pulse ${className}`}
    ></div>
  );
}
