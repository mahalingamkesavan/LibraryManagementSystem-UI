import { Table } from "antd";
import { useEffect, useState } from "react";
import { ReturnIssuedBookAxios } from "../../../service/IssuedBookService/IssuedBookService";
import { ReturnBookColumn } from "../hooks/ReturnBookColumns";


export default function ReturnBook() {

  const [issuedBook, setIssuedBook] = useState([]);
  
  useEffect(() => {
   const UserReturnList= async()=>setIssuedBook(await ReturnIssuedBookAxios())
   UserReturnList();
  }, []);
  return <Table columns={ReturnBookColumn} dataSource={issuedBook} rowKey={(x)=>x.bookIssuedID} />;
}



