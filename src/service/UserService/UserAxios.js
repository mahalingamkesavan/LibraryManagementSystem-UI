import { GetAxios, PostAxios, DeleteAxios } from "../LibraryAxios/LibraryAxios";
import { BASE_URL } from "../../environment/Environment";
import {
  USER_DETAIL,
  REGISTRATION_URL,
  USER_LIST_URL,
} from "../../environment/LocalPathEnvironment";
import { toast } from "react-toastify";
import GetLogin from "../../shared/hooks/GetLogin";
import * as action from "../../redux/user/UserAction";



export const UserGetAxios = () => async (dispatch) => {

  const UserDetailUrl = `${BASE_URL}${USER_DETAIL}`;
  try {
    const response = await GetAxios(UserDetailUrl);
    dispatch(action.FetchUserSuccess(response.data))
  } catch (error) {
    dispatch(action.FetchUserFailed(error.response?.data?.message))
  }
};


export const UserGetAllAxios=()=>async(dispatch)=>{
  const userListUrl=`${BASE_URL}${USER_LIST_URL}`;
  return await GetAxios(userListUrl)
    .then((response) =>
     { dispatch(action.FetchAllUserSuccessAction(response.data.allUser))}
    )
    .catch((error) =>
      {dispatch(action.FetchAllUserFailedAction(error.response.data.message))}
    );
};


export const UserPostAxios = async (userData, userRole) => {
  const UserLoginData = {
    email: userData?.email,
    password: userData?.password,
  };
  const userRegistrationUrl = `${BASE_URL}${USER_DETAIL}${REGISTRATION_URL}`;

  return await PostAxios(userRegistrationUrl, userData)
    .then(async (res) => {
      if (userRole) toast(res.data.message);
      else await GetLogin(UserLoginData);
    })
    .catch((error) => console.log(error));
};


export const DeleteUser = (deleteUser) => async (dispatch) => (
  await DeleteAxios(deleteUser)
    .then(() => dispatch(action.DeleteAllUserAction(deleteUser)))
    .catch((error) => console.log(error))
)

