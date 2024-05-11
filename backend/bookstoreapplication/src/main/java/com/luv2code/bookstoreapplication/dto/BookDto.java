package com.luv2code.bookstoreapplication.dto;

import com.luv2code.bookstoreapplication.entity.Book;
import com.luv2code.bookstoreapplication.repository.BookRepository;
import com.luv2code.bookstoreapplication.request.BookRequest;
import com.luv2code.bookstoreapplication.response.BookResponse;
import com.luv2code.bookstoreapplication.services.BookService;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
public class BookDto{
    private BookResponse bookResponse;
    private BookRequest bookRequest;
    private Book book;
    private BookService bookService;
    private List<Book> allBooks;
}
