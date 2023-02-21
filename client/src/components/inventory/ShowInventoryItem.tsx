import { InventoryItem } from "../../resources/baseInventory"

interface Props {
    itemInfo: InventoryItem
}

export const ShowInventoryItem = ({ itemInfo }: Props) => {

    return (
        <div className='flex'>
            <div>{itemInfo.itemName}</div>
            <div>{itemInfo.itemQuantity}</div>
            <div>{itemInfo.itemUnit}</div>
        </div>
    )
}