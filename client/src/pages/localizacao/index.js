import HeaderNav from '../components/headerNav';
import lupa from '../../assets/magnifying-glass.png';
import Pessoa from '../../assets/foto_perfil_cliente.png'
import maps from '../../assets/maps.svg'
import cel from '../../assets/icon_telefone.png'

function Localizacao() {
    return(
        <div>
            <HeaderNav/>
            <main>
                <h2 className='titulo'>Localização dos fornecedores</h2>
                <div className="container_busca_fornecedor">
                    <input className='input_busca' placeholder="Buscar produtos"></input>
                    <button><img src={lupa} alt='lupa de pesquisa'></img></button>
                </div>
                <p>Fornecedores mais próximos:</p>
                <section>
                    <img>Imagem do mapa</img>
                    <div className='perfil_div'>
                        <div className='Informacoes'>
                            <div>
                                <img src={maps}>Mapa</img>
                                <p>Local</p>
                            </div>
                            <div>
                                <img src={cel}>celular</img>
                                <p>(12) 3456-7890</p>
                            </div>
                            <div>
                                <h3>Produtos fornecidos:</h3>
                                <p>- Batata</p>
                                <p>- Milho</p>
                            </div>
                        </div>
                        <div>
                            <img src={Pessoa}>Imagem do idoso</img>
                            <p>José Carlos Palma</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Localizacao;