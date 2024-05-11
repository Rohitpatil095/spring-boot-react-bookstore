import { useEffect, useState } from "react";
import BookModel from "../../Models/BookModel";
import { RetriveAllBooksServiceImpl } from "../../services/RetriveAllBooksServiceImpl";
import { ReturnBook } from "./ReturnBook";
import * as constants from "../../constants/serviceConstants";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const Carousel = () => {
  // const{book} =RetriveAllBooksServiceImpl();

  const [book, setBooks] = useState<BookModel[]>([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetAllBooksUrlMixer: string = constants.FETCH_ALL_BOOKS;
      const response = await fetch(fetAllBooksUrlMixer);

      if (!response.ok) {
        throw new Error("Error while fetching getall books api...");
      }

      const responseJson = await response.json();
      const bookResponseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];

      for (const key in bookResponseData) {
        loadedBooks.push({
          id: bookResponseData[key].id,
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
  }, []);

  if (httpError) {
    return (
        <SpinnerLoading />
    );
  }
  if (isLoading) {
    return <div className="container m-5">Loading..</div>;
  }

  return (
    <div className="container-mt-5" style={{ height: 500 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next "I Stayed Up To Late Reading" Book</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center aligh-item-center">
              {book.slice(0, 3).map((book: BookModel) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center aligh-item-center">
              {book.slice(3, 6).map((book: BookModel) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center aligh-item-center">
              {book.slice(6, 9).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <ReturnBook book={book[7]} key={book[7].id} />
      </div>

      <div className="homepage-carousel-title mt-5">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
