import styles from './Layout.module.css';
import {ReactElement} from 'react';

type Props = {
    children: ReactElement;
}

export const Layout = ({children}:Props) => {
    return(
        <div>
            <header>
                <h1>Header do site</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Todos os direitos reservados
            </footer>
        </div>
    );
}

