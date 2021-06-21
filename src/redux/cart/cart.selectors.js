import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCarthidden = createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(((accumatedQuan, cartItem) => accumatedQuan + cartItem.quantity),0)
)
export const selectCartTotal= createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(((accumatedQuan, cartItem) => accumatedQuan + cartItem.quantity * cartItem.price ),0))
