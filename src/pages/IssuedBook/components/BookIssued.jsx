import { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { AdminMenuList } from "../hooks/AdminMenuList";
import { UserMenuList } from "../hooks/UserMenuList";
import "../style/BookIssued.css";
import { UserValidation } from "../../../shared/hooks/UserValidation";
import { LibraryCommentPage } from "../../../shared/Component/LibraryCommentPage";

const BookIssued = () => {
  const [issuedBookMenuList, setIssuedBookMenuList] = useState([]);
  const userInformation = useSelector((state) => state?.user?.data?.role);

  useEffect(() => {
    setIssuedBookMenuList(
      UserValidation(userInformation, AdminMenuList, UserMenuList)
    );
  }, [userInformation]);
  return (
    <LibraryCommentPage issuedBookMenuList={issuedBookMenuList}></LibraryCommentPage>
  );
};
export default BookIssued;
