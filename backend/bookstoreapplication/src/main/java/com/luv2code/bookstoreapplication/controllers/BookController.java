package com.luv2code.bookstoreapplication.controllers;

import com.luv2code.bookstoreapplication.response.BookResponse;
import com.luv2code.bookstoreapplication.services.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/${app.version}/book")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping(value = "/getbookbyid/{id}")
    public BookResponse getBookDetails(@PathVariable("id") Long id)
    {
        return bookService.getBookById(id);
    }

    @GetMapping(value = "/getAllBooks")
    public List<BookResponse> getAllBooks()
    {
        return bookService.getAllBooks();
    }

}
