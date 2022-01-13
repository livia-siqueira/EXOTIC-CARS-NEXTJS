
import Link from 'next/link';
import ButtonAuth from '../ButtonAuth';
import * as styles from './styles';

const Header = () => {

    return (
        <styles.Header>
            <div>
                <styles.Title>exotic cars</styles.Title>
            </div>
            <div>
            </div>
            <nav>
                <Link href="/auth"><ButtonAuth title='Sign Up' isBorder={false}/></Link>
                <Link href="/auth"><ButtonAuth isBorder={true} title='Sign In'/></Link>
            </nav>
        </styles.Header>
    )
}

export default Header;