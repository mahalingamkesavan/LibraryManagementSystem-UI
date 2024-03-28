import {combineReducers} from "redux";
import { UserReducer } from "./user/UserReducer";
import { BookReducer } from "./book/BookReducer";
import { AllUserReducer } from "./user/UserReducer";
import { AllIssuedBookReducer } from "./issuedBook/AllIssuedBookReducer";
import { ApproveUser } from "./approval/ApprovalReducer";

export const rootReducer = combineReducers({
    user:UserReducer,
    book:BookReducer,
    users:AllUserReducer,
    issuedBook:AllIssuedBookReducer,
    approveUser:ApproveUser
})