export const passwordIsValid = (password) => {
  let regEx = /\w{5,14}$/;
  return regEx.test(password);
};
export const emailIsValid = (email) => {
  let regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
};

export const priceRange = (price, allBooks, filtered) => {
  let temp = JSON.parse(JSON.stringify([...filtered]));

  if (price === 'all' || allBooks.length !== filtered.length) {
    temp = JSON.parse(JSON.stringify([...allBooks]));
  }

  if (price === '$0') {
    if (temp) {
      temp = temp.filter((book) => Number(book.price) === 0);
    }
  } else if (price === '$0-$20') {
    temp = temp.filter(
      (book) => Number(book.price) < 20 && Number(book.price) > 0
    );
  } else if (price === '$20-$50') {
    temp = temp.filter(
      (book) => Number(book.price) > 20 && Number(book.price) <= 50
    );
  } else if (price === '$50-$100') {
    temp = temp.filter(
      (book) => Number(book.price) > 50 && Number(book.price) <= 100
    );
  } else if (price === '>$100') {
    temp = temp.filter((book) => Number(book.price) > 100);
  }

  return temp;
};

export const sortFiltered = (sort, filtered) => {
  let temp = JSON.parse(JSON.stringify([...filtered]));
  if (sort === 'lowest') {
    temp.sort(function (book1, book2) {
      return book1.price - book2.price;
    });
  } else if (sort === 'highest') {
    temp.sort(function (book1, book2) {
      return book2.price - book1.price;
    });
  }
  return temp;
};
//krece od 1
export const reviewPerPage = (page, arr) => {
  let temp = JSON.parse(JSON.stringify([...arr]));
  let start = page - 1;
  return temp.splice(start * 6, 6);
};
export const totalBill = (cart) => {};
