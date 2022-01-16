import { ButtonHTMLAttributes } from "react";
import * as styles from './styles'


interface Button_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isBorder: boolean;
    page: string;
}

const ButtonAuth : React.FC<Button_Props> = (props) => {
    return(
        <styles.Button {...props} page={props.page} isBorder={props.isBorder} >
           {props.title}
        </styles.Button>
    )
}

export default ButtonAuth;