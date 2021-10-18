import { useEffect, useState } from 'react';
import { priceRange, sortFiltered } from '../../../validation';
import FilterCard from './FilterCard';

const Filter = ({ allBooks, setFiltered, filtered }) => {
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('0');
  const [idSearch, setidSearch] = useState(null);
  const [titleSearch, setTitleSearch] = useState('');
  const [resultNu, setResultNu] = useState(allBooks.length);

  useEffect(() => {
    setResultNu(filtered.length);
  }, [filtered]);

  return (
    <FilterCard>
      <select
        defaultValue={price}
        onChange={(e) => {
          let selectedPrice = e.target.value;
          let temp = priceRange(selectedPrice, allBooks, filtered);
          setFiltered([...temp]);
          setPrice(selectedPrice);
          setResultNu(temp.length);
        }}
      >
        <option value="all">ALL</option>
        <option value="$0">FREE</option>
        <option value="$0-$20">$0 - $20</option>
        <option value="$20-$50">$20 - $50</option>
        <option value="$50-$100">$50 - $100</option>
        <option value=">$100">MORE THAN $100</option>
      </select>

      <select
        defaultValue={sort}
        onChange={(e) => {
          let changeValue = e.target.value;
          let temp = sortFiltered(changeValue, filtered);
          setSort(changeValue);
          setFiltered([...temp]);
        }}
      >
        <option value="0">Sort:</option>
        <option value="lowest">Price: lowest</option>
        <option value="highest">Price: highest</option>
      </select>

      <label>Search by id</label>

      <input
        defaultValue={idSearch}
        type="number"
        placeholder="1234567891234"
        onChange={(e) => {
          let id = e.target.value.trim();
          setFiltered((prev) => {
            let temp = JSON.parse(JSON.stringify([...allBooks]));
            if (!id) {
              return temp;
            }
            temp = temp.filter(
              (book) =>
                book.id.includes(id) &&
                book.title.toLowerCase().includes(titleSearch)
            );
            return temp;
          });
          setidSearch(id);
        }}
      />
      <label>Search by title</label>

      <input
        defaultValue={titleSearch}
        type="text"
        id="title-search"
        placeholder="Java or java"
        onChange={(e) => {
          let title = e.target.value;
          setFiltered(() => {
            let temp = JSON.parse(JSON.stringify([...allBooks]));
            temp = temp.filter(
              (book) =>
                book.title.toLowerCase().includes(title) &&
                book.id.includes(idSearch)
            );
            return temp;
          });
          setTitleSearch(title.toLowerCase().trim());
        }}
      />
      {(price !== 'all' || idSearch || titleSearch) && (
        <label>Search results: {resultNu}</label>
      )}
    </FilterCard>
  );
};

export default Filter;
