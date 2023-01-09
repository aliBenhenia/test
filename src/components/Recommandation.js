import React from 'react'

export default function Recommandation() {
    const curentMont = new Date().getMonth();
    const isSpring = curentMont >=2 && curentMont <=5
   if (isSpring) {
     return <div>it's spring , time to repot</div>
   }
  return (
    <div>
        it's not time to repot
    </div>
  )
}
