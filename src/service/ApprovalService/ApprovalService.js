
import { BASE_URL } from "../../environment/Environment";
import {
  USER_APPROVAL_URL,
  USER_APPROVE_LIST_URL,
  USER_DETAIL,
  USER_REJECTED_URL,
} from "../../environment/LocalPathEnvironment";
import { DeleteAxios, GetAxios } from "../LibraryAxios/LibraryAxios";
import {
  ApprovalAction,
  FetchUserApprovalFailedAction,
  FetchUserApprovalSuccessAction,
} from "../../redux/approval/ApprovalAction";

export const FetchApprovalAxios = () => async (dispatch) => {

  const ApproveUserListUrl = `${BASE_URL}${USER_APPROVE_LIST_URL}`;

  await GetAxios(ApproveUserListUrl)
    .then((response) => dispatch(FetchUserApprovalSuccessAction(response.data)))
    .catch((error) => dispatch(FetchUserApprovalFailedAction(error)));
};


export const ApprovedUserAxios = (record) => async (dispatch) => {

  const approval = `${BASE_URL}${USER_APPROVAL_URL}${record.userId}&ApprovedBy=${record.userName}`;

  await GetAxios(approval)
    .then((e) => dispatch(ApprovalAction(approval)))
    .catch((error) => console.log(error));
};


export const RejectUserAxios = (record) => async (dispatch) => {

  const reject = `${BASE_URL}${USER_REJECTED_URL}${record.userId}&ApprovedBy=${record.userName}`;

  await DeleteAxios(reject)
    .then(() => dispatch(ApprovalAction(reject)))
    .catch((error) => console.log(error));
};
export const ApprovalMessageAxios=async()=>{
  const approvalMessage = `${BASE_URL}${USER_DETAIL}/message`;
  return await GetAxios(approvalMessage)
      .then((response) => (response.data))
      .catch((error) => console.log(error));
}
export const RemoveMessageAxios=async()=>{
  const removeUrl=BASE_URL+USER_DETAIL+"/removeMessage";
 await GetAxios(removeUrl)
        .then(()=>{window.location.reload()})
        .catch((error)=>console.log(error))
}