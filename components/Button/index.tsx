import { ButtonHTMLAttributes } from 'react';
import * as styles from './styles'


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isCompleted: boolean
}

const Button : React.FC<Props> = ({title, isCompleted, onClick}) => {
    return (
        <styles.Button isCompleted={isCompleted} onClick={onClick}>
            {title}
        </styles.Button>
    )
}

export default Button;