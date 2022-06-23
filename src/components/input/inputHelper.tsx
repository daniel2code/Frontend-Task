import React from "react";

interface Props {
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
  onChange?: any;
  value?: string | number;
  name?: string;
  type?: string;
  others?: any;
}

const InputHelper = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default InputHelper;
