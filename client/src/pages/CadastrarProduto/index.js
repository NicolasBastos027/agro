import HeaderNav from "../components/headerNav";
import iconTelefone from "../../assets/icon_telefone.png";
import iconLocalizacao from "../../assets/icon_localizacao.png";
import imgPerfil from "../../assets/foto_perfil_cliente.png";
import styles from './styles.module.css'
import potato from '../../assets/Potato.svg'
import carrot from '../../assets/carrot.svg'
import edit from '../../assets/edit.svg'
import edit_foto from '../../assets/edit_foto.svg'
import { Link } from "react-router-dom";

export default function CadastrarProduto() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div>
            <HeaderNav />
            <main>
                <div className={styles.tudo}>
                    <body>
                        {/* geral */}
                        <div  >
                            {/* titulos  */}
                            <div className={styles.titulo}>
                                <h1 className={styles.titulo_principal}>Cadastrar produtos</h1>
                            </div>
                            <div className={styles.geral}>
                                <select className={styles.container} options={options} placeholder='Insira seu nome...'>
                                    <option value="opcao1">Selecione o produto</option>
                                    <option value="opcao2">Batata</option>
                                    <option value="opcao3">Cenoura</option>
                                </select>
                                <select className={styles.container} options={options} >
                                    <option value="opcao1">Quantidade de produto</option>
                                    <option value="opcao2">100 Kg</option>
                                    <option value="opcao2">200 Kg</option>
                                    <option value="opcao2">300 Kg</option>
                                    <option value="opcao2">400 Kg</option>
                                    <option value="opcao2">500 Kg</option>
                                    <option value="opcao2">600 Kg</option>
                                    <option value="opcao2">700 Kg</option>
                                </select>
                                <select className={styles.container} options={options} >
                                    <option value="opcao1">Selecione (unidade ou Kg)</option>
                                    <option value="opcao1">Por Unidade</option>
                                    <option value="opcao1">Por Quilo</option>

                                </select>
                                <input className={styles.container} type="text" placeholder="Digite o preço por quilo "></input>
                            </div>
                            <div>
                            <button className={styles.container} type="text" placeholder="Digite o preço por quilo ">Cadastrar</button>
                            </div>

                        </div>
                    </body>
                </div>

            </main >
        </div >
    )
}