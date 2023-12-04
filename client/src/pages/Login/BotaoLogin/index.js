
import styles from './styles.module.css'
import { Link} from 'react-router-dom'


export default function BotaoLogin() {
    return (
            <div>
                <Link  className={styles.botao} to='/perfil_cliente'>Login</Link>
            </div>
    )
}