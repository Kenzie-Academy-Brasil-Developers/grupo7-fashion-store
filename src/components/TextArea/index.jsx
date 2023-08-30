import { forwardRef } from "react";

export const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div>
      <textarea ref={ref} {...rest}></textarea>
      <div>{error ? <p>{error.message}</p> : null}</div>
    </div>
  );
});
