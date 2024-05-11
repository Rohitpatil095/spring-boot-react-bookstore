package com.luv2code.bookstoreapplication.services;

import com.luv2code.bookstoreapplication.response.BookResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.lang.annotation.Native;
import java.util.List;

public interface BookService{

    @Query(value = "select * from book where id= :bookId",nativeQuery = true)
    public BookResponse getBookById(@Param("bookId") Long id);

    @Query(value = "select com.luv2code.bookstoreapplication.response.BookResponse from book")
    public List<BookResponse> getAllBooks();
}
