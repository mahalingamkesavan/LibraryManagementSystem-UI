import * as types from "../actionType"
const UserInformation={
    data:{},
    message:'',
    loading:true,
};
export const UserReducer =(state=UserInformation,action)=>{
    switch(action.type){
        case types.GET_USER:
            return{
                ...state,
                data:action.payload,
                loading:false,
                }
        case types.GET_USER_FAILED:
            return {
                ...state,
                message:action.payload,
                loading:false
            } 
        case types.DELETE_SUCCESS:
        return {
            ...state,
            message:types.DELETE_SUCCESS,
        }
        default:
            return state;
    }
};
const AllUserDetail = {
    allUser: [],
    message: "",
    loading: true,
};
  
  export const AllUserReducer = (state = AllUserDetail, action) => {
    switch (action.type) {
      case types.GET_ALL_USER:
        return {
          ...state,
          allUser: action.payload,
          loading: false,
        };
      case types.GET_ALL_USER_FAILED:
        return {
          ...state,
          message: action.payload,
          loading: false,
        };
      case types.DELETE_USER_SUCCESS:
        return {
          ...state,
          message:action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  