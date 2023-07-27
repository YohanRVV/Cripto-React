import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
        font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`


const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <ResultadoDiv>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más ALto del día es: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más Bajo del día es:: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actulización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoDiv>
    );
}

export default Resultado;