import * as types from "../actionType"

const approveUser={
    allApproveUserList:"",
    message:"",
    loading:true
}
export const ApproveUser = (state=approveUser,action) => {
 switch (action.type) {
    case types.ALL_USER_APPROVE_LIST:
        return{
            ...state,
            allApproveUserList:action.payload
            ,loading:false
        }
    case types.ALL_USER_APPROVE_LIST_FAILED:
        console.log("failed")
        return {
            ...state,
            message:action.payload,
            loading:false
        }
    case types.APPROVE_USER:
        console.log("approve")
        return {
                ...state,
                message:action.payload,
                loading:false
        }
    default:
       return state;
 }
}
