import styles from './Layout.module.css';
import { ReactElement } from 'react';
import Link from 'next/link';
import { NavBar } from '../NavBar';

type Props = {
    children: ReactElement;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <header className={styles.topo}>
            </header>

            <NavBar/>
            
            <main className={styles.content}>
                {children}
            </main>

            <footer className={styles.rodape}>
                Todos os direitos reservados
            </footer>

        </div>
    );
}

