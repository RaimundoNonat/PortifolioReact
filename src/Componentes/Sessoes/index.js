import './Estilo.css'


// componentes
import PetshopImg from '../Imagens/petshop.png'
import ComprasImg from '../Imagens/compras.png'

    
function Sessoes() {
    return (
        <section>
            <nav className='sessao'>
                <div>
                    <h4>PETSHOP</h4>
                    <p>Site foi desenvolvido através da linguagem JavaScript utilizando o framework bootstrap.</p>
                    <img src={PetshopImg} alt="petshop" />
                </div>
                <div>
                    <h4>MERCADO</h4>
                    <p>Site foi desenvolvido através da linguagem JavaScript utilizando o framework bootstrap.</p>
                    <img src={ComprasImg} alt="compras" />
                </div>
            </nav>

            <nav class="sessao">
                <div>
                    <h4>PLAN</h4>
                    <p>Site foi desenvolvido utilizando HTML/CSS e JavaScript.</p>
                    <img src={PetshopImg} alt="petshop" />
                </div>
                <div>
                    <h4>RH Investimentos</h4>
                    <p>Site foi desenvolvido utilizando HTML/CSS e JavaScript.</p>
                    <img src={ComprasImg} alt="compras" />
                </div>
            </nav>

            <nav class="sessao">
                <div>
                    <h4>Cronômetro</h4>
                    <p>Este site foi desenvolvido utilizando HTML/CSS e JavaScript.</p>
                    <img src={PetshopImg} alt="petshop" />
                </div>
                <div>
                    <h4>Calculadora de IMC</h4>
                    <p>Site foi desenvolvido utilizando HTML/CSS e JavaScript.</p>
                    <img src={ComprasImg} alt="compras" />
                </div>
            </nav>
        </section>
    )
}

export default Sessoes