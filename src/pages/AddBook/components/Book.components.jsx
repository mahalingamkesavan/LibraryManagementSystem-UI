import DropDown from "../DropDown/DropDown";


const Book = ({ onSubmit, onChange }) =>{ 
 
    return(
  <div className="login-form">
    <h2> Add Book </h2>
    <form onSubmit={onSubmit}>
      <label> Book Title</label>{" "}
      <input
        className="form-group input"
        type="text"
        id="bookName"
        onInput={onChange}
      />
      <label> Book Type </label>
      <DropDown onInput={onChange}></DropDown>
      <label> Author</label>
      <input
        className="form-group input"
        type="text"
        id="authorName"
        onInput={onChange}
      />
      <label>Book Volume</label>
      <input
        className="form-group input"
        type="text"
        id="bookVolume"
        onInput={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default Book;
