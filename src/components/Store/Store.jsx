import { useEffect, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { reviewPerPage } from '../../validation';
import Book from './Book/Book';
import BookForm from './BookForm/BookForm';
import Filter from './Filter/Filter';
import { StoreCard, PageNavigation } from './StoreCard';

const Store = ({
  setShoppingCart,
  loggedUser,
  allBooks,
  filtered,
  setFiltered,
  setUpdatedStore,
}) => {
  const [pages, setPages] = useState([]);
  const [storeCard, setStoreCard] = useState([]);
  const [editedBook, setEditedBook] = useState({
    title: '',
    subtitle: '',
    id: '',
    price: '',
    image: '',
    url: '',
  });
  useEffect(() => {
    let pageCount = Math.ceil(filtered.length / 6);
    let temp = [];
    for (let i = 1; i <= pageCount; i++) {
      temp.push(i);
    }
    setPages(temp);
    setStoreCard(reviewPerPage(1, filtered));
  }, [filtered]);

  return (
    <>
      {loggedUser === 'admin' && (
        <BookForm
          setEditedBook={setEditedBook}
          editedBook={editedBook}
          allBooks={allBooks}
          setUpdatedStore={setUpdatedStore}
        />
      )}
      <Filter
        setFiltered={setFiltered}
        allBooks={allBooks}
        filtered={filtered}
      ></Filter>

      <PageNavigation>
        {pages.map((page) => (
          <li key={uuidv1()}>
            <button
              onClick={() => {
                setStoreCard(reviewPerPage(page, filtered));
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </PageNavigation>
      <StoreCard>
        {storeCard.map((book) => (
          <Book
            key={book.id}
            book={book}
            allBooks={allBooks}
            setShoppingCart={setShoppingCart}
            loggedUser={loggedUser}
            setEditedBook={setEditedBook}
            setUpdatedStore={setUpdatedStore}
          />
        ))}
      </StoreCard>
    </>
  );
};

export default Store;
