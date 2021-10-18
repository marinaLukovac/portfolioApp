import { Link } from 'react-router-dom';
import { deleteBookById } from '../../../service';
import { v1 as uuidv1 } from 'uuid';
import BookCard from './BookCard';

const Book = ({
  book,
  setShoppingCart,
  loggedUser,
  setEditedBook,
  setUpdatedStore,
}) => {
  return (
    <BookCard>
      <h4>{book.title}</h4>
      <p key={uuidv1}>
        <Link to={`/store/${book.id}`}>Find out more</Link>
      </p>
      <p>${book.price}</p>
      {loggedUser !== 'admin' ? (
        <button
          onClick={(e) => {
            setShoppingCart((prev) => {
              console.log(prev);

              if (prev.length === 0) {
                return [
                  {
                    item: book.title,
                    quantity: 1,
                    price: book.price,
                    id: book.id,
                  },
                ];
              }
              let bookLocation = prev.findIndex((item) => item.id === book.id);
              if (bookLocation !== -1) {
                let temp = [...prev];
                let { quantity } = temp[bookLocation];

                temp.splice(bookLocation, 1, {
                  quantity: ++quantity,
                  item: book.title,
                  price: book.price,
                  id: book.id,
                });
                console.log(temp);
                return [...temp];
              } else {
                return [
                  ...prev,
                  {
                    item: book.title,
                    quantity: 1,
                    price: book.price,
                    id: book.id,
                  },
                ];
              }
            });
          }}
        >
          Add To Cart
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setEditedBook(JSON.parse(JSON.stringify({ ...book })));
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteBookById(book.id);
              setUpdatedStore((prev) => !prev);
            }}
          >
            Delete
          </button>
        </>
      )}
    </BookCard>
  );
};

export default Book;
