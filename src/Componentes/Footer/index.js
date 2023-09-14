import styled from 'styled-components'

const RodapeStyled = styled.footer`
    padding: 3%;
    background-color: rgb(92, 96, 102);
    text-align: center;
    margin-bottom: 0%;
    margin-top: 10%;
    justify-content: center;
    h3 {
        color: white;
        font-size: 1re
    }

`

function Rodape() {
    return(
        <RodapeStyled>
            <h3>Desenvolvido por Raimundo Nonato</h3>
        </RodapeStyled>
    )
}

export default Rodape
