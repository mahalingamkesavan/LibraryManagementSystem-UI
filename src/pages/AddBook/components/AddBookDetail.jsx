import { useState } from "react";
import Book from "./Book.components";
import { Flip, ToastContainer } from "react-toastify";
import { CreateBookAxios } from "../../../service/BookService/BookService";
import "react-toastify/dist/ReactToastify.css";



const AddBookDetail = () => {
  const [BookDetail, setBookDetail] = useState({
    bookName: "",
    typeOfBook: "",
    authorName: "",
    bookVolume: "",
  });

  const onTextBox = (event) => {
    const Book = { ...BookDetail };
    Book[event.target.id] = event.target.value;
    setBookDetail(Book);
  };
  const OnSubmitHandling = async (event) => {
    event.preventDefault();
    await CreateBookAxios(BookDetail)
  };
  return (
    <>
     <ToastContainer autoClose={2000}  transition={Flip} draggable="false" />
      <Book onSubmit={OnSubmitHandling} onChange={onTextBox} />
    </>
  );
};
export default AddBookDetail;
