import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  // console.log(books.books);
//   console.log(books);
  return (
    <div className="my-container">
      <section className="grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2">
        {books.map((book) => <Book book={book} key={book.isbn13}></Book>)}
      </section>
    </div>
  );
};

export default Books;
