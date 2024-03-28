import { BASE_URL } from '../../environment/Environment';
import { ISSUED_BOOK_LIST_URL, ISSUED_BOOK_URL, RETURN_BOOK_LIST_URL, RETURN_TIME_DURATION_URL, TODAY_RETURN_BOOK_URL } from '../../environment/LocalPathEnvironment';
import { toast } from "react-toastify";
import { DeleteAxios, GetAxios, PostAxios } from '../LibraryAxios/LibraryAxios';
import { DeleteIssuedBookAction, FetchIssuedBookFailedAction, FetchIssuedBookSuccessAction } from "../../redux/issuedBook/IssuedBookAction";

export const CreateIssuedBookAxios = async(issuedBook) => {

    const issuedBookUrl=BASE_URL+ISSUED_BOOK_URL

    await PostAxios(issuedBookUrl,issuedBook)
    .then(res=>toast.success(res.data.message))
    .catch((error) => toast.error(error.response.data.message));
};


export const FetchAllIssuedBookAxios=()=>async(dispatch)=>{
    const issuedBookListUrl = BASE_URL + ISSUED_BOOK_LIST_URL;

   await GetAxios(issuedBookListUrl)
    .then((response) =>{dispatch(FetchIssuedBookSuccessAction(response.data.listOfIssuedBook))})
    .catch((error) =>dispatch(FetchIssuedBookFailedAction(error.response.data.message))
    );
}

export const ReturnIssuedBookAxios = async() => {

    const returnBookListUrl = BASE_URL + RETURN_BOOK_LIST_URL;
    return await GetAxios(returnBookListUrl)
      .then((res) =>(res?.data?.listOfIssuedBook))
      .catch((error) => console.log(error?.response?.data?.message));
     
}
export const TodayReturnBookAxios=async()=>{
    const todayReturnBookUrl=BASE_URL+ISSUED_BOOK_URL+TODAY_RETURN_BOOK_URL
  return await GetAxios(todayReturnBookUrl)
      .then((res) => (res.data.todaysReturns))
      .catch((error) => alert(error.data.response.message));
}

export const ReturnDurationAxios=async()=>{
    const returnTimeDurationURL = BASE_URL + RETURN_TIME_DURATION_URL
    return await GetAxios(returnTimeDurationURL)
      .then((res) =>(res.data.returnDuration))
      .catch((error) => alert(error.data.response.message));
}

export const DeleteReturnBookAxios =(returnBook)=>async(dispatch)=>{
    await DeleteAxios(returnBook)
    .then(()=>dispatch(DeleteIssuedBookAction(returnBook)))//{type:types.DELETE_ISSUED_BOOK,payload:returnBook}
    .catch((error)=>dispatch(FetchIssuedBookFailedAction(error.response.data.message)))//{type:types.GET_ALL_ISSUED_BOOK_FAILED,payload:error.response.data.message}
  }
  