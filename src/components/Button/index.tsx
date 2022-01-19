import { ButtonHTMLAttributes } from 'react';
import * as styles from './styles'



interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isCompleted: boolean;
}

const Button : React.FC<Props> = ({isCompleted, onClick, children}) => {
    return (
        <styles.Button isCompleted={isCompleted} onClick={onClick}>
          {children}
        </styles.Button>
    )
}

export default Button;