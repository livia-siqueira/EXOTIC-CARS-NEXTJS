import React, { useRef } from 'react';
import { InputHTMLAttributes, RefObject } from 'react';
import * as styles from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    
}



const InputImage : React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    
    return(
        <styles.ImageColor>
        {" "}
        <styles.Input
          type="url"
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <styles.Input
          type="text"
          placeholder="Color"
          onChange={props.onChange}
        />
      </styles.ImageColor>
    )
}

export default InputImage;