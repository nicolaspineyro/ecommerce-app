import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'src/assets/crown.svg'
import Styles from 'src/styles/header.module.scss';

const Header = () => {
    const headerMenu = ['Shop', 'Contact','Sign In'];
    return (
        <div className={Styles['header']}>
            <Link to='/'>
                <Logo />
            </Link>
            <div className={Styles['menu']}>
                {headerMenu.map((menuItem) =>
                    <Link
                        to={`/${menuItem.replace(/\s/g, "").toLocaleLowerCase()}`}
                        className={Styles['menu-item']}
                    >
                        {menuItem.toUpperCase()}
                    </Link>)}
            </div>
        </div>
    )
}

export default Header;