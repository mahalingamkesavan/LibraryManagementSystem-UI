import * as types from "../../redux/actionType";


export const FetchBookSuccessAction = (bookData) => {
  return (
    {
        type: types.GET_ALL_BOOK,
        payload: bookData,
    }
  )
}
export const FetchBookFailedAction = (bookData) => {
    return (
      {
          type: types.GET_ALL_BOOK_FAILED,
          payload: bookData,
      }
    )
  }
  export const DeleteBookAction = (bookData) => {
    return (
      {
          type: types.DELETE_SUCCESS,
          payload: bookData,
      }
    )
  }
