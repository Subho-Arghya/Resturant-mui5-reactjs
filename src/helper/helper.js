import { FormHelperText } from "@mui/material"
import { useFormControl } from '@mui/material/FormControl';
import { useMemo } from "react";


export const isEmail = ( mailInput ) => {
    let regEx = /^[\w.-]+@([\w-]+\.)+[a-z-]{2,4}$/g
    return regEx.test(mailInput)
}

export const isPassWord = ( passwordInput) => {
    let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g
    return regEx.test(passwordInput)
}

//Helper Text for PassWord
export function MyFormPassWordHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = useMemo(() => {
      if (focused) {
        return 'Min 6 char. Max 20 char. Must contain at least 1 capital letter, 1 small letter and 1 number';
      }
  
      return '';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }

  