import React from 'react'
import styled from 'styled-components'
import Img from '../../img/modulo.jpg'

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`
const CardInfo = styled.div`
  display: grid;
  flex-direction: colum;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: auto;
  margin-top: 30px;
`
export class ProductCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <img src={Img} />
        <CardInfo>
          <p>Produto</p>
          <p>R$100,00</p>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    )
  }
}
