import HeaderNav from "../../components/headerNav";
import iconTelefone from "../../../assets/icon_telefone.png";
import iconLocalizacao from "../../../assets/icon_localizacao.png";
import imgPerfil from "../../../assets/foto_perfil_cliente.png";
import styles from './styles.module.css'
import potato from '../../../assets/Potato.svg'
import carrot from '../../../assets/carrot.svg'
import edit from '../../../assets/edit.svg'
import edit_foto from '../../../assets/edit_foto.svg'
import { Link } from "react-router-dom";
function PerfilCliente() {
    return (
        <div>
            <HeaderNav />
            <main>
                <div className={styles.tudo}>

                    <section className={styles.perfil_container}>
                        <div className={styles.tudo}>

                            <div className={styles.perfil_dados}>
                                <img src={imgPerfil} alt="imagem perfil"></img>
                                <img className={styles.edit_foto} src={edit_foto}></img>
                                <div className={styles.descricao}>
                                    <h2 className={styles.titulo_perfil}>José Carlos Palma</h2>
                                    <div className={styles.subtitulo_producoes}>
                                        <img src={iconTelefone} alt="icon telefone" />
                                        <p>(12) 3456-7890</p> <img src={edit}></img>
                                    </div>
                                    <div className={styles.subtitulo_producoes}>
                                        <img src={iconLocalizacao} className={styles.img} alt="icon de localização" />
                                        <p>Rua Rio Maroni 225, Ipiranga - Batatais - SP</p>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.product}>
                                <h1 className={styles.titulo_producoes}>Produções</h1>
                                <h1 className={styles.subtitulo_producoes}>Batata, Cenoura, Mandioca.</h1>
                            </div>
                            <div>
                                <h1 className={styles.titulo_estoque}>Estoque</h1>
                                
                                <div className={styles.container_botao_adicionar}>
                                      <Link to='/cadastrar-produtos'><button className={styles.botao_adicionar}>Adicionar produto</button></Link>
                                    </div>
                            </div>
                            <div className={styles.container_anuncio}>
                                <div className={styles.anuncio}>
                                    <div className={styles.alimento_container}>
                                        <img className={styles.alimento} src={potato}></img>
                                        <h1 className={styles.alimento_texto}>Batata (700Kg)</h1>
                                    </div>
                                    <h1 className={styles.alimento_texto_descricao}>Carlos produções</h1>
                                    <h1 className={styles.alimento_texto_descricao}>Preço por Kg: R$4,75</h1>
                                    <div className={styles.container_botao}>
                                        <button className={styles.botao}>Comprar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container_anuncio}>
                                <div className={styles.anuncio}>
                                    <div className={styles.alimento_container}>
                                        <img className={styles.alimento} src={carrot}></img>
                                        <h1 className={styles.alimento_texto}>Cenoura (200Kg)</h1>
                                    </div>
                                    <h1 className={styles.alimento_texto_descricao}>Carlos produções</h1>
                                    <h1 className={styles.alimento_texto_descricao}>Preço por Kg: R$2,45</h1>
                                    <div className={styles.container_botao}>
                                        <button className={styles.botao}>Comprar</button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default PerfilCliente;