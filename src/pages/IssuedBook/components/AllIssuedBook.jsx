import { Table } from "antd";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllIssuedBookAxios } from "../../../service/IssuedBookService/IssuedBookService";
import { IssuedBookColumns } from "../hooks/IssuedBookColumns";

export const AllIssuedBook = () => {

  const bookIssued=useSelector((state)=>state?.issuedBook.allIssuedBook)
  const IsDelete=useSelector((state=>state?.issuedBook?.message))
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(FetchAllIssuedBookAxios());
  }, [IsDelete]);

  

  return <Table scroll={{ y: 400}} columns={IssuedBookColumns} dataSource={bookIssued.length>0 && bookIssued} rowKey={x=>x.bookIssuedID} />;
};
