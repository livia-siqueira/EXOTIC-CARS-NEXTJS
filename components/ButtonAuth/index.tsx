import { ButtonHTMLAttributes } from "react";
import * as styles from './styles'


interface Button_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isBorder: boolean
}

const ButtonAuth : React.FC<Button_Props> = (props) => {
    return(
        <styles.Button {...props} isBorder={props.isBorder} >
           {props.title}
        </styles.Button>
    )
}

export default ButtonAuth;