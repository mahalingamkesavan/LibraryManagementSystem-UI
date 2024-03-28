import { BASE_URL } from "../../environment/Environment";
import { ADD_BOOK_URL, BOOK_LIST_URL, BOOK_TYPE_LIST_URL, UPDATE_BOOK_URL } from "../../environment/LocalPathEnvironment";
import { DeleteAxios, GetAxios,PostAxios, PutAxios } from "../LibraryAxios/LibraryAxios";
import { toast } from "react-toastify";
import { DeleteBookAction, FetchBookFailedAction, FetchBookSuccessAction } from "../../redux/book/BookAction";


export const GetAllBookAxios = (page) => async (dispatch) => {
  let AllBookDetailURL = "";
  if (page !== undefined) {
    AllBookDetailURL = `${BASE_URL}${BOOK_LIST_URL}?PageNumber=${page}`;
  } else {
    AllBookDetailURL = `${BASE_URL}${BOOK_LIST_URL}`;
  }

  return await GetAxios(AllBookDetailURL)
    .then((response) => {
      dispatch(FetchBookSuccessAction(response.data));//{ type: types.GET_ALL_BOOK, payload: response.data }
    })
    .catch((error) =>
      dispatch(FetchBookFailedAction(error.response.data.message))//{ types: types.GET_ALL_BOOK_FAILED,payload: error.response.data.message, }
    );
};
export const CreateBookAxios=async(bookDetail)=>{
    const addBookUrl = `${BASE_URL}${ADD_BOOK_URL}`;
    await PostAxios(addBookUrl, bookDetail)
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error(error.response.data.message));
}
export const UpDateBookAxios =(editBookDetail)=>async(dispatch)=>{
    const updateBookUrl= `${BASE_URL}+${UPDATE_BOOK_URL}`; 
    await PutAxios(updateBookUrl,editBookDetail)
    .then((response) => dispatch(DeleteBookAction(response.data.message+Math.random())))
    .catch((error) => dispatch(FetchBookFailedAction(error.response.data.message)));
}
export const DeleteBookAxios =(DeleteBook)=>async(dispatch)=>{
    await DeleteAxios(DeleteBook)
   .then(() =>  dispatch(DeleteBookAction(DeleteBook)))
   .catch((error) => FetchBookFailedAction(error.response.data.message));
}
// export const BookListDropDown =()=>{
//   const typeOfBook = BASE_URL + BOOK_TYPE_LIST_URL;
//      GetAxios(typeOfBook)
//       .then((res) => {setDropDown(['',...res.data.bookTypes])})
//       .catch((err) => alert(err.response.data.message));
// }
