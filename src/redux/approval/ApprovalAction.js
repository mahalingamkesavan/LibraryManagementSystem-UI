import * as types from "../../redux/actionType";


export const FetchUserApprovalSuccessAction = (approvalList) => {
  return (
    {
        type: types.ALL_USER_APPROVE_LIST, 
        payload: approvalList 
    }
  )
}
export const FetchUserApprovalFailedAction = (errorMessage) => {
    return (
      {
        type: types.ALL_USER_APPROVE_LIST_FAILED,
        payload: errorMessage
      }
    )
  }
  export const ApprovalAction = (IsApproval) => {
    return (
      {
        type: types.APPROVE_USER,
        payload: IsApproval
      }
    )
  }
