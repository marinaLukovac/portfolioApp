import { useEffect, useState } from 'react';
import { addNewBook, editBookById } from '../../../service';
import StyledBookForm from './StyledBookForm';

const BookForm = ({ editedBook, setEditedBook, setUpdatedStore }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [id, setid] = useState('');
  const [price, setPrice] = useState(''); //moze da se javi problem
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  useEffect(() => {
    setTitle(editedBook.title);
    setSubtitle(editedBook.subtitle);
    setid(editedBook.id);
    setPrice(editedBook.price);
    setImage(editedBook.image);
    setUrl(editedBook.url);
  }, [editedBook]);

  const handlerEdit = (e) => {
    let newBook = {
      title: title,
      subtitle: subtitle,
      id: id,
      price: price,
      image: image,
      url: url,
    };

    setEditedBook({
      title: '',
      subtitle: '',
      id: '',
      price: '',
      image: '',
      url: '',
    });
    console.log(newBook);
    if (e.target.value === 'POST') {
      addNewBook(newBook);
    } else {
      editBookById(newBook.id, newBook);
    }
    setUpdatedStore((prev) => !prev);
  };
  return (
    <StyledBookForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={subtitle}
        type="text"
        placeholder="Subtitle"
        onChange={(e) => {
          setSubtitle(e.target.value);
        }}
      />
      <input
        value={price}
        type="text"
        placeholder="Price in $"
        onChange={(e) => {
          setPrice(e.target.value.trim());
        }}
      />
      <input
        value={id}
        type="text"
        placeholder="ISBN"
        onChange={(e) => {
          setid(e.target.value.trim());
        }}
      />
      <input
        value={image}
        type="text"
        placeholder="image url"
        onChange={(e) => {
          setImage(e.target.value.trim());
        }}
      />
      <input
        value={url}
        type="text"
        placeholder="URL to single book"
        onChange={(e) => {
          setUrl(e.target.value.trim());
        }}
      />
      <input
        value={editedBook.id ? 'CHANGE' : 'POST'}
        type="submit"
        onClick={handlerEdit}
      />
    </StyledBookForm>
  );
};

export default BookForm;
