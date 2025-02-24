export const wishReducer = (state, { type, payload }) => {
    switch (type) {  
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wish: [...state.wish, payload.product]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wish: state.wish.filter(product => product.id !== payload.id)
            }
        default:
        return state

    }
}