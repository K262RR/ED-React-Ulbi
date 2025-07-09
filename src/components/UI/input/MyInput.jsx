import React, { forwardRef } from "react";
import classes from "./MyInput.module.css";

const MyInput = forwardRef(({ ...props }, ref) => {
  return <input ref={ref} className={classes.input} {...props} />;
});

export default MyInput;
