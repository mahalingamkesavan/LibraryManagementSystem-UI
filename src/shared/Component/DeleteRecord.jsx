import { Button, Modal } from 'antd';
import { BASE_URL } from "../../environment/Environment";
import { useDispatch } from "react-redux";
import { DeleteUser } from '../../service/UserService/UserAxios';
import { DeleteBookAxios } from '../../service/BookService/BookService';
import { DeleteReturnBookAxios } from '../../service/IssuedBookService/IssuedBookService';
import { DELETE_BOOK_URL, DELETE_ISSUED_BOOK_URL, DELETE_USER_URL, USER_APPROVAL_URL, USER_REJECTED_URL } from '../../environment/LocalPathEnvironment';
import { ApprovedUserAxios, RejectUserAxios } from '../../service/ApprovalService/ApprovalService';


export const DeleteRecord = ({ Url, record ,value,types}) => {

  const dispatch = useDispatch();
  const OnDeleteIssuedBook = () => {
    Modal.confirm(
      {
        title: `If you click Yes then the Record Should be ${value}`,
        okText: 'Yes',
        onOk: async() => {
          switch (Url) {
            case DELETE_BOOK_URL:
              let deleteBook = BASE_URL + Url + record.bookId
              dispatch(DeleteBookAxios(deleteBook));
            break;
            case DELETE_USER_URL:
              let deleteUser = BASE_URL + Url + record.userId
              dispatch(DeleteUser(deleteUser));
              break;
            case DELETE_ISSUED_BOOK_URL:
              let returnBook=BASE_URL+Url+record.bookIssuedID
              dispatch(DeleteReturnBookAxios(returnBook))  
              break;
            case USER_REJECTED_URL:
              dispatch(RejectUserAxios(record));
              break;
            case USER_APPROVAL_URL:
              dispatch(ApprovedUserAxios(record))
            default:
              break;
          }
        }
      })

  };
  return (<>
  {types===undefined?
  <Button danger onClick={OnDeleteIssuedBook} >{value}</Button>
  :<Button type="primary" ghost onClick={OnDeleteIssuedBook}>{value}</Button>}
  </>)
}