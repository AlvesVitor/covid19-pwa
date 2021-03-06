import React, { memo } from 'react';
import { Card as CardUI } from '../../../components';
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style';

import { formatNumber } from 'commons/utils'

function Card({ value, label, color }) {
  return (
    <CardUI >
      <CardContentStyled color={color}>
        <ValueStyled>{formatNumber(value)}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)