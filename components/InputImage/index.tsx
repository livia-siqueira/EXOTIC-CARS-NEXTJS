import React from 'react';
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
          placeholder={props.placeholder}
        />
        <styles.Input
          type="text"
          placeholder="Color"
        />
      </styles.ImageColor>
    )
}

export default InputImage;