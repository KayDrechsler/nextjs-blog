import Link from 'next/link';
import Logo from './logo';
import styles from './main-navigation.module.css';

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles['nav-list-link']}>
                <Logo />
            </Link>
            <nav>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-list-item']}>
                        <Link href="/posts" className={styles['nav-list-link']}>Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles['nav-list-link']}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;