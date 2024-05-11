package com.luv2code.bookstoreapplication.services;

import com.luv2code.bookstoreapplication.dto.BookDto;
import com.luv2code.bookstoreapplication.entity.Book;
import com.luv2code.bookstoreapplication.repository.BookRepository;
import com.luv2code.bookstoreapplication.response.BookResponse;
import com.luv2code.bookstoreapplication.transformer.BookTransformer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements  BookService{

    private BookRepository bookRepository;
    private BookDto dto;
    private BookTransformer bookTransformer;

    public BookServiceImpl(BookRepository bookRepository,BookDto dto, BookTransformer bookTransformer) {
        this.bookRepository = bookRepository;
        this.dto=dto;
        this.bookTransformer =bookTransformer;
    }

    @Override
    public BookResponse getBookById(Long id) {
        Book book=new Book();
        dto.setBook(book);
        Optional bookIsPresent= bookRepository.findById(id);
        if(bookIsPresent.isPresent())
        {
            dto.setBook((Book)bookIsPresent.get());
        }
        bookTransformer.book2BookResponseTransformer(dto.getBook());
        return dto.getBookResponse();
    }

    @Override
    public List<BookResponse> getAllBooks() {
//        List<Book> allBooks= new ArrayList<>(
        List<Book> books= new ArrayList<>();

//        dto.setAllBooks();

        return null;
//        return bookRepository.findAll().stream().map(BookTransformer::book2BookResponseTransformer).collect();
//        return List.of(bookRepository.findAll());
    }
}
