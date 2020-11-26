import React from 'react';
import styled from 'styled-components';

import Flag from '../../assets/flag-brazil-small.png';

const Container = styled.div`
    width: 100%;
    height: 54px;
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 20px;

    & img {
        width: 42px;
    }
`

const TopBanner = () => {
    return (
        <Container>
            <img src={Flag} alt="Brasil" />
            <span>
                FRETE GRÁTIS PARA TODO O BRASIL NAS COMPRAS ACIMA DE R$99* 
            </span>
            <img src={Flag} alt="Brasil" />
        </Container>
    )
}

export default TopBanner;