import { Redirect, useParams } from 'react-router';
import SingleBookStyled from './SingleBookStyled';
import { v1 as uuidv1 } from 'uuid';

const SingleBook = ({ allBooks }) => {
  //singlebook call from API
  let { id } = useParams();
  let book = allBooks.find((book) => book.id === id);
  return book !== -1 ? (
    <SingleBookStyled key={uuidv1}>
      <p>
        <img src={book.image} alt={`${book.id}'s cover`} />
      </p>
      <div>
        <p>{book.title}</p>
        {book.subtitle && <p>{book.subtitle}</p>}
        {book.desc && <p>{book.desc}</p>}

        <p>${book.price}</p>
      </div>
    </SingleBookStyled>
  ) : (
    <Redirect to="/store" />
  );
};

export default SingleBook;
