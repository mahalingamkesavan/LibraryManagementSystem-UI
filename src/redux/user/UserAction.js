import * as types from "../../redux/actionType";


export const FetchUserSuccess = (userData) => {
  return (
    {
        type: types.GET_USER,
        payload: userData,
    }
  )
}
export const FetchUserFailed = (userData) => {
    return (
      {
          type: types.GET_USER_FAILED,
          payload: userData,
      }
    )
  }
  export const DeleteUserAction = (userData) => {
    return (
      {
          type: types.DELETE_SUCCESS,
          payload: userData,
      }
    )
  }
  export const FetchAllUserSuccessAction = (userAllData) => {
    
    return (
      {
          type: types.GET_ALL_USER,
          payload: userAllData,
      }
    );
  };
  export const FetchAllUserFailedAction = (userAllData) => {
      return (
        {
            type: types.GET_ALL_USER_FAILED,
            payload: userAllData,
        }
      )
    }
    export const DeleteAllUserAction = (userAllData) => {
      return (
        {
            type: types.DELETE_USER_SUCCESS,
            payload: userAllData,
        }
      )
    }
