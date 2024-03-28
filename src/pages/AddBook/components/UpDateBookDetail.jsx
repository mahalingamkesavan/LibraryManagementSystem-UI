import React from "react";
import { Button, Modal, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpDateBookAxios } from "../../../service/BookService/BookService";

export default function UpDateBookDetail({record}) {
  const [EditBookDetail, setEditBookDetail] = useState(null);
  const [IsEditBook, setIsEditBook] = useState(false);
  const dispatch=useDispatch();
 
  const OnEditBookDetail = () => {
    setIsEditBook(true);
    setEditBookDetail({ ...record }); //copy of the record
  };

  const resetEditing=()=>{
    setIsEditBook(false);
    setEditBookDetail(null);
  }
  
  return (
    <div>
      <Button type="primary" ghost onClick={OnEditBookDetail}>Edit</Button>
      <Modal
        title="Edit Book"
        open={IsEditBook}
        okText="save"
        onCancel={() => {
          resetEditing(); 
        }}
        onOk={() => {
          dispatch(UpDateBookAxios(EditBookDetail))
          resetEditing();
        }}
      >
      <label>Book Name</label>  <Input
          value={EditBookDetail?.bookName}
          onChange={(event) =>
            setEditBookDetail((pre) => {
              return { ...pre, bookName: event.target.value };
            })
          }
        />
       <label>Type Of Book</label> <Input
          value={EditBookDetail?.typeOfBook}
          onChange={(event) =>
            setEditBookDetail((pre) => {
              return { ...pre, typeOfBook: event.target.value };
            })
          }
        />
       <label>Author Name</label> <Input
          value={EditBookDetail?.authorName}
          onChange={(event) =>
            setEditBookDetail((pre) => {
              return { ...pre, authorName: event.target.value };
            })
          }
        />
       <label>Book Volume</label> <Input
          value={EditBookDetail?.bookVolume}
          onChange={(event) =>
            setEditBookDetail((pre) => {
              return { ...pre, bookVolume: event.target.value };
            })
          }
        />
      </Modal>
    </div>
  );
}
