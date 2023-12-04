import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'
import { Link, Route } from 'react-router-dom'
import Register from '../../Register'

export default function Header() {
    return (
        <header >
            <div className={styles.geral_header}>
                <Link to='/'><img src={Logo} className={styles.img_logo}></img></Link>
                <div className={styles.cadastro}>
                    <Link className={styles.link} to='/produtos' >Produtos</Link>
                    <Link className={styles.link} to='/local'>Localização</Link>
                    <Link className={styles.link} to='/perfil_cliente' >Perfil</Link>
                </div>
            </div>
        </header>

    )
}