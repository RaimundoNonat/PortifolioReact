import styled from 'styled-components'

// componentes
import PetshopImg from '../Imagens/petshop.png'
import ComprasImg from '../Imagens/compras.png'

const SessaoStyled = styled.section`
    nav {
        display: flex;
        justify-content: center;
        text-align: center;
        border-radius: 25px;
    } 
    div {
        margin: 2%;
        width: 450px;
        cursor: pointer;
        background-color: rgb(81, 74, 88);
        border-radius: 10px;
    }
    img {
        width: 200px;
        height: 180px;
    }
    h4 {
        color: rgb(235, 205, 199);
        font-size: 20px;
    }
    p {
        color: white;
        font-size: 16px;
        margin: 2%;
    }
    div:hover {
        background-color: rgb(56, 52, 61);
    }

    @media(max-width: 1368px) {
        nav {
            margin: 3% 10% 2% 10%;
        }
        div {
            margin: 2%;
        }
        img {
            width: 140px;
            height: 130px;
        }
        h4 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        nav {
            margin: 2%;
        }
        div {
            margin: 2%;
        }
        img {
            width: 140px;
            height: 130px;
        }
        h4 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        nav {
            border-radius: 10px;
        }
        img {
            width: 80px;
            height: 70px;
        }
        h4 {
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
        div:hover {
            background-color: rgb(43, 39, 46);   
        }
`
    
function Sessoes() {
    return (
        <SessaoStyled>
            <nav>
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
        </SessaoStyled>
    )
}

export default Sessoes