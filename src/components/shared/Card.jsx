import React from 'react';
import { Card as CardPrime } from 'primereact/card';

function Card({children}) {
  return (
    <CardPrime className='card'>
      {children}
    </CardPrime>
  )
}

export default Card
