import * as constants from "../constants/serviceConstants";
import BookModel from "../Models/BookModel";
import { RetriveAllBooksService } from "./RetriveAllBooksService";
import { useState, useEffect } from "react";

export const RetriveAllBooksServiceImpl =(): {book:BookModel[]} | any => {
  const [book, setBooks] = useState<BookModel[]>([]);
  const [httpError, setHttpError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetAllBooksUrlMixer: string = constants.FETCH_ALL_BOOKS;
      const response = await fetch(fetAllBooksUrlMixer);

      // ----
      console.log(response);

      if (!response.ok) {
        throw new Error("Error while fetching getall books api...");
      }
      const responseJson = await response.json();

      const bookResponseData = responseJson._embedded.body();

      const loadedBooks: BookModel[] = [];

      for (const key in bookResponseData) {
        console.log("-------------", key);
        loadedBooks.push({
          id: 0,
          title: bookResponseData[key].title,
          author: bookResponseData[key].author,
          description: bookResponseData[key].description,
          copies: bookResponseData[key].copies,
          copiesAvailable: bookResponseData[key].copiesAvailable,
          category: bookResponseData[key].category,
          img: bookResponseData[key].img,
        });

        setBooks(loadedBooks);
        setIsLoading(false);
      }
    };
    fetchBooks().catch((error: any) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, [book]);

  if (httpError) {
    return <div className="container m-5">httpError</div>;
  }
  if (isLoading) {
    return <div className="container m-5">Loading..</div>;
  }

  return book;
};
