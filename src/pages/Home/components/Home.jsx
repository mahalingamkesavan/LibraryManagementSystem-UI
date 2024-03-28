import { useState, useEffect } from "react";
import SearchBook from "../../../shared/Component/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { AdminActionValidation } from "../../../shared/hooks/UserValidation";
import { AdminAction } from "../hooks/AdminAction";
import { BookMenu } from "../hooks/BookMenu";
import { Table } from "antd";
import { GetAllBookAxios } from "../../../service/BookService/BookService";



const HomeContent = () => {

  const dispatch = useDispatch();
  
  const message = useSelector((state) => state?.book?.message);
  const BookDetail = useSelector((state) => state?.book?.allBook);
  const BookList=BookDetail?.items
  const userInformation = useSelector((state) => state?.user?.data.role);


  const [searchField, setSearchField] = useState("");
  const [filterBook, setFilterBook] = useState(BookList);
  
  useEffect(() => {
    dispatch(GetAllBookAxios());
  }, [message]);


  const SearchOnChange = (event) => {
    console.log("search")
    const SearchString = event.target.value.toLocaleLowerCase();
    setSearchField(SearchString);
  };


  useEffect(() => {
    const newFilterBook = BookList?.filter((book) => {
      return book.bookName.toLocaleLowerCase().includes(searchField);
    });
    setFilterBook(newFilterBook);
  }, [BookList, searchField]);

  const columns=AdminActionValidation(userInformation, AdminAction, BookMenu)

  return (
    <div className="background">
      <SearchBook onChange={SearchOnChange} placeholder={"Search Book"} />
      <Table
    scroll={{
      y: 400,
    }}
      
      pagination={{
        total: BookDetail?.totalNoOfRecords,
        pageSize: BookDetail?.pageSize,
        onChange: (page) => {
          dispatch(GetAllBookAxios(page));
        },
      }}
      columns={columns}
      dataSource={filterBook}
      rowKey={(data) => data.bookId}
    ></Table>
    </div>
  );
};

export default HomeContent;
