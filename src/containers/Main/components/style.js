import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
`

export const ValueStyled = styled(Typography)`
  font-weight: 600;
  font-size: 1.8rem;
  color: #fff;
`

export const Title = styled(Typography)`
  font-weight: 600;
  color: #fff;
  font-size: 1.8rem;
`

export const Description = styled(Typography)`
  font-weight: 700;
  color: #fff;
  font-size: 0.9rem;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`

