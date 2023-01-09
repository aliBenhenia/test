import React from 'react'
import {plantList} from "../data/plantList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ShoppingList() {
  return (
    <div>
        {plantList.map((plant)=>
            <li key={plant.id}>
                {plant.name}    {plant.isBestSale && <span>🔥</span> }
            </li>
        )}
    </div>
  )
}
