import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar =props => {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <div className={styles.navigation}>
                    <a className={styles.icon} href="/"><span className="fa fa-tasks" /></a>
                    <ul className={styles.list}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/favorite">FAVORITE</a></li>
                        <li><a href="/about">ABOUT</a></li>
                    </ul>
                </div>
            </Container>   
        </nav>
    )
}

export default NavBar;