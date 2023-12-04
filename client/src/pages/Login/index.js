import styles from './styles.module.css'

import HeaderCadastro from '../components/header_cadastro'

import maps from '../../assets/maps.svg'

import { Link } from 'react-router-dom'
import BotaoLogin from './BotaoLogin'

export default function Login() {
    return (
        <div>
            <HeaderCadastro />
            <body>
                {/* geral */}
                <div  >
                    {/* titulos  */}
                    <div>
                        <h1 className={styles.titulo_principal}>Login</h1>
                    </div>
                    <div className={styles.geral}>
                        <input className={styles.container} type='text' placeholder='Insira seu nome...'></input>
                        <input className={styles.container} type='text' placeholder='Insira sua senha...'></input>
                    </div>
                    <div>
                        <Link to='/register'><h1 className={styles.verifica_cadastro}>Ainda não está cadastrado? Clique aqui</h1></Link>
                    </div>
                    <div>
                       <BotaoLogin></BotaoLogin>
                    </div>
                </div>
            </body>
        </div>
    )
}