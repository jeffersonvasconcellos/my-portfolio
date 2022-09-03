
import Link from 'next/link';
import styles from './Botao.module.css';


export const Botao = () => {

    return(
        <div>
           <button className={styles.btn}><Link href={'/sobre'}>Clique aqui</Link></button> 
        </div>
    );
}