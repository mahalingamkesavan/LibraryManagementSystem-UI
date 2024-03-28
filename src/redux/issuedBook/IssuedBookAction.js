import * as types from "../../redux/actionType";


export const FetchIssuedBookSuccessAction = (listOfIssuedBook) => {
  return (
    {
        type: types.GET_ALL_ISSUED_BOOK,
        payload: listOfIssuedBook,
    }
  )
}
export const FetchIssuedBookFailedAction = (errorMessage) => {
    return (
      {
        type: types.GET_ALL_ISSUED_BOOK_FAILED,
        payload: errorMessage,
      }
    )
  }
  export const DeleteIssuedBookAction = (returnBook) => {
    return (
      {
        type:types.DELETE_ISSUED_BOOK,
        payload:returnBook
      }
    )
  }