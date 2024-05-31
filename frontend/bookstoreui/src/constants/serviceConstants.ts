export const BACKEND_BASE_SERVICE_URL: string = "http://localhost:8080";
export const BACKEND_BOOKS_SERVICE_URL:string =BACKEND_BASE_SERVICE_URL+"/api/books";
export const PAGE_SIZE: Number=9;
export const PAGE_NUMBER: Number=0;
export const FETCH_ALL_BOOKS: string = BACKEND_BOOKS_SERVICE_URL + "? page="+PAGE_NUMBER+"&size="+PAGE_SIZE;
export const GET_BOOK_WITH_ID: string= BACKEND_BOOKS_SERVICE_URL;

// export const FETCH_ALL_BOOKS: string = "http://localhost:8080/api/books?page=0&size=9";


