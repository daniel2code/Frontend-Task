import React from "react";

interface Props {
  className?: string;
  htmlFor?: any;
  id?: string;
  children?: any;
}

const LabelHelper: React.FC<Props> = ({ children, className, id, htmlFor }) => {
  return (
    <label id={id} htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default LabelHelper
