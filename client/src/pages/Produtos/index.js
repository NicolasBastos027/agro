import Lupa from '../../assets/magnifying-glass.png';
import Batata from '../../assets/Potato.svg';
import Cenoura from '../../assets/carrot.svg';
import styles from './style.css';
import Header from '../components/headerNav';

function Produtos () {
    return (

        <body>
        <Header />
    <header></header>
    <main>
        <h1 class="titulo_produtos">Produtos</h1>

        <div class="barra_de_pesquisa">

            <input class="input_pesquisa" type="text" placeholder="buscar um produto..."></input>
            <button class="btn_pesquisa"><img src={Lupa} alt="lupa de pesquisa"></img></button>
        </div>

            <div class="container_produto">
                <div class="container_inf_produtos">
                    <div class="inf_alimento">
                        <img src={Batata} alt="ícone batata"></img>
                        <p class="quantia_total_estocada">Batata(300kg)</p>
                    </div>

                    <div class="inf_venda">
                        <p class="nome_fazenda">Carlos Produções</p>
                        <p class="preco_produto">Preço por Kg: R$3,75</p>
                    </div>

                </div>

                <div class="telefone_localizacao">
                    <p>(16)9832-1535</p>
                    <p>Rua Rio Purus 225, Ipiranga - RP </p>
                </div>
            </div>


            <div class="container_produto">
                <div class="container_inf_produtos">
                    <div class="inf_alimento">
                        <img src={Cenoura} alt="ícone batata"></img>
                        <p class="quantia_total_estocada">Batata(700kg)</p>
                    </div>

                    <div class="inf_venda">
                        <p class="nome_fazenda">Carlos Produções</p>
                        <p class="preco_produto">Preço por Kg: R$4,75</p>
                    </div>

                </div>

                <div class="telefone_localizacao">
                    <p>(16)9838-8535</p>
                    <p>Rua Rio Maroni 225, Ipiranga - RP </p>
                </div>
            </div>

    </main>
</body>
    )
};

export default Produtos;