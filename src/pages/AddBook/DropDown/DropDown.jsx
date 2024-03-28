import { useEffect, useState } from "react";
import { BASE_URL } from "../../../environment/Environment";
import { BOOK_TYPE_LIST_URL } from "../../../environment/LocalPathEnvironment";
import { GetAxios } from "../../../service/LibraryAxios/LibraryAxios";

const DropDown = ({ onInput }) => {
  const [dropdown, setDropDown] = useState([]);

  useEffect( () => {
    const typeOfBook = BASE_URL + BOOK_TYPE_LIST_URL;
     GetAxios(typeOfBook)
      .then((res) => {setDropDown(['',...res.data.bookTypes])})
      .catch((err) => alert(err.response.data.message));
  }, []);
  return (
    <>
    <select onClick={(event) => onInput(event)} id="typeOfBook">
        {dropdown.map(({ bookTypeId, bookTypeName }) => (
          <option value={bookTypeName ?? ''} key={bookTypeId ?? -1} id="bookType">
            {bookTypeName ?? '-Select Book-'}
          </option>
        ))}
    </select>
    </>
  );
};
export default DropDown;
