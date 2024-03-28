import * as type from "../actionType"



const GetAllBook ={
    allBook:null,
    message:"",
    loading:true
};
export const BookReducer =(state=GetAllBook,action)=>{
  
    switch (action.type) {
        case type.GET_ALL_BOOK:
            return{
                ...state,
                allBook:action.payload,
                loading:false,
            }
            case type.GET_ALL_BOOK_FAILED:
            return{
                ...state,
                message:action.payload,
                loading:false
            }
            case type.DELETE_SUCCESS:
            return {
                ...state,
                message:type.DELETE_SUCCESS+action.payload,
            }
        default:
            return state;
    }
}