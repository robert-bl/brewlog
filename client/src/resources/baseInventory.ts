
export interface InventoryItem {
    itemName: string
    itemType: string
    itemBrand: string
    itemQuantity: number
    itemUnit: string
}

export let baseInventory: InventoryItem[] = [
    {
        itemName: 'Pale Malt',
        itemType: 'Ingredient',
        itemBrand: 'Weyermann',
        itemQuantity: 1000,
        itemUnit: 'lbs'
    },
    {
        itemName: 'C-15 Malt',
        itemType: 'Ingredient',
        itemBrand: 'Crisp',
        itemQuantity: 110,
        itemUnit: 'lbs'
    },
    {
        itemName: 'ElDorado',
        itemType: 'Ingredient',
        itemBrand: 'BSG',
        itemQuantity: 44,
        itemUnit: 'lbs'
    }
]