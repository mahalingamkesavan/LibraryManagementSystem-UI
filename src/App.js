import HomeContent from "./pages/Home/components/Home";
import Login from "./pages/Login/Login"
import { Routes, Route } from "react-router-dom";
import UserRegistration from "./pages/Registration/UserRegistration"
import AddBookDetail from "./pages/AddBook/components/AddBookDetail";
import UserProfile from "./pages/Home/components/UserProfile";
import { AllIssuedBook } from "./pages/IssuedBook/components/AllIssuedBook";
import BookIssued from "./pages/IssuedBook/components/BookIssued";
import { IssuedBook } from "./pages/IssuedBook/components/IssuedBook"
import ReturnBook from "./pages/IssuedBook/components/ReturnBook";
import PrivateRout from "./auth/PrivateRout";
import TodayReturnBook from "./pages/IssuedBook/components/TodayReturnBook";
import ReturnDuration from "./pages/IssuedBook/components/ReturnDuration";
import UserApproval from "./pages/Home/components/UserApproval"
import ApprovalMessage from "./pages/Inbox/ApprovelMessage";
import { AdminRegistration } from "./pages/CreateAdminReg/AdminRegistration"; 
import { LibraryCommentPage } from "./shared/Component/LibraryCommentPage";
import AllUserDetail from "./pages/UserDetail/AllUserDetail";



const App = () => {
  
  return (
    <Routes>
      <Route path="" element={<Login/>}></Route>
      <Route path="registration" element={<UserRegistration />}></Route>
      
      <Route element={<PrivateRout />}>
        <Route path="library" element={<LibraryCommentPage issuedBookMenuList={"HOME"}/>}>
          <Route path="home" index element={<HomeContent/>}></Route>
          <Route path="notification" element={<UserApproval />}></Route>
          <Route path="myProfile" element={<UserProfile />}></Route>
        </Route>

        
        <Route path="adminFeature" element={<LibraryCommentPage/>}>
          <Route path="BooKStore" index element={<AddBookDetail />}></Route>
          <Route path="allUser" element={<AllUserDetail />}></Route>
          <Route path="inbox" element={<ApprovalMessage/>}/>
          <Route path="createAdmin" element={<AdminRegistration/>}></Route>
        </Route>
        
        

        <Route path="issuedDetail" element={<BookIssued></BookIssued>}>
          <Route path="BookIssued" index element={<IssuedBook />}></Route>
          <Route path='IssuedBookDetail' element={<AllIssuedBook />} />
          <Route path="userReturnBook" element={<ReturnBook />} />
          <Route path="todayReturn" element={<TodayReturnBook />} />
          <Route path="returnDuration" element={<ReturnDuration />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
