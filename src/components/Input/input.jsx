import { forwardRef } from "react";

export const Input = forwardRef(({type, placeholder, error, ...rest}, ref) => {
   
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} {...rest} />
            {error ? <span>{error.message}</span> : null}
        </div>
    )
})