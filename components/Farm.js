
import React, { useState } from 'react';
import Chicken from './Chicken';

export default function Farm() {
  const initialChickens = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    type: 'industrial',
    bornAt: Date.now(),
    lastEggTime: Date.now(),
    health: 100,
    stage: 'adult' // or 'baby'
  }));

  const [chickens, setChickens] = useState(initialChickens);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {chickens.map(chicken => (
        <Chicken key={chicken.id} chicken={chicken} />
      ))}
    </div>
  );
}
