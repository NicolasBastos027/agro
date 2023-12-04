
import styles from './styles.module.css'
import { Link, Route } from 'react-router-dom'


export default function BotaoConfirmar() {
    return (
            <div>
                <Link  className={styles.botao} to='/'>Cadastrar</Link>
            </div>
    )
}