import { useState } from "react"
import { CreateInventoryItem } from "./CreateInventoryItem"
import { InventoryItem, baseInventory } from "../../resources/baseInventory"




export const InventoryHome = () => {



    const [inventory, setInventory] = useState<InventoryItem[]>(baseInventory)


    return (
        <div>
            <div>
                {inventory.map((item, i) => (
                    <div key={i}>{item.itemName}</div>
                ))}
            </div>
        </div>
    )
}