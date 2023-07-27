import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7bfe;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptocoin, SelectCriptoCoin] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, criptocoin].includes('')) {
            setError(true)

            return;
        }

        setError(false);
        setMonedas({
            moneda,
            criptocoin
        })
    }

    return (
        <>
            {error && <Error>Todos los Campos son Obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptoCoin />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>

    );
}

export default Formulario;
