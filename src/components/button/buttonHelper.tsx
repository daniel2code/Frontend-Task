import React from "react";

interface Props {
  className?: string;
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  background?: string;
  hover?: string;
  margin?: string;
  borderRadius?: string;
  smwidth?: string;
  smfontSize?: string;
  smMargin?: string;
  onClick?: any;
  disabled?: boolean;
  children?: any;
}

const ButtonHelper: React.FC<Props> = ({
  className,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonHelper;
