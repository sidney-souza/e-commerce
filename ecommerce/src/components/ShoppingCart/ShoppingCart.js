import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components'

const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const cartListContainer = styled.div`
  display: grid;
  gap: 4px;
`
export class ShoppingCart extends React.Component {
  render() {
    return (
      <ShoppingCartContainer>
        <h3>Carrinho</h3>
        <cartListContainer>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </cartListContainer>
        <p>Valor total:R$100</p>
      </ShoppingCartContainer>
    )
  }
}
