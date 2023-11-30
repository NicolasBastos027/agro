
import styles from './styles.module.css'
import { Link} from 'react-router-dom'


export default function BotaoConfirmar() {
    return (
        <header >
            <div className={styles.botao} >
                <button><Link to='/'>Cadastrar</Link></button>
            </div>
        </header>

    )
}