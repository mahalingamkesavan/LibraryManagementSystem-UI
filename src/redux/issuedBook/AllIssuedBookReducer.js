import * as types from "../actionType"


const IssuedBook={
    allIssuedBook:{},
    loading:true,
    message:""

} 
export const AllIssuedBookReducer = (state=IssuedBook,action) => {
    switch (action.type) {
        case types.GET_ALL_ISSUED_BOOK:
          return {
            ...state,
            allIssuedBook: action.payload,
            loading: false,
          };
        case types.GET_ALL_ISSUED_BOOK_FAILED:
          return {
            ...state,
            message: action.payload,
            loading: false,
          };
        case types.DELETE_ISSUED_BOOK:
          return {
            ...state,
            message:action.payload,
            loading: false,
          };
        default:
          return state;
      }
}
