import React from 'react'
import styled from 'styled-components'

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`
export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h3>Filtros</h3>

        <InputContainer>
          Valor mínimo
          <input type="number" />
        </InputContainer>

        <InputContainer>
          Valor máximo
          <input type="number" />
        </InputContainer>

        <InputContainer>
          Buscar por nome:
          <input type="text" />
        </InputContainer>
      </FiltersContainer>
    )
  }
}
