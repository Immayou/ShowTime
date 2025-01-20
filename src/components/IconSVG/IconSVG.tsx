import React from "react";

interface IIcon {
  width: string;
  height: string;
  className?: string;
  href: string;
}

const IconSVG: React.FC<IIcon> = ({ width, height, href, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={href} />
    </svg>
  );
};

export default IconSVG;
