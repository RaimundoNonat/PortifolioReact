import styled from 'styled-components'

const CabecalhoStyle = styled.header`
    color: black;
    font-family: 'Aboreto';
    text-align: center;
    margin: 5% 0% 5% 0%;
    font-size: 20px;
    h1 {
        border-bottom: 1px solid black;
        margin: 0% 35% 0% 35%;
    }
    @media (max-width: 1368px) {
    h1 {
        font-size: 2rem;
    }
}
    @media (max-width: 768px) {
    h1 {
        font-size: 18px;
    }
}
    @media (max-width: 480px) {
    h1 {
        font-size: 20px;
    }
}
`

function Cabecalho() {
    return (
        <CabecalhoStyle>
            <h1>Meus Projetos</h1>
        </CabecalhoStyle>
    )
}

export default Cabecalho