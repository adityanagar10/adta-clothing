import { createSelector } from "reselect";

const COLLECTION_ID_MAP ={ 
    hats : 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
    [selectShop],
    shop => shop.shop
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopSections],
    shop => shop.find(shop => shop.id === COLLECTION_ID_MAP[collectionUrlParam])
)