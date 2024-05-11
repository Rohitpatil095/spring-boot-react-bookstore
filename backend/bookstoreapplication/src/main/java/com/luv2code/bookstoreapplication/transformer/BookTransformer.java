package com.luv2code.bookstoreapplication.transformer;

import com.luv2code.bookstoreapplication.businesservice.BookValidationService;
import com.luv2code.bookstoreapplication.dto.BookDto;
import com.luv2code.bookstoreapplication.entity.Book;
import com.luv2code.bookstoreapplication.response.BookResponse;
import org.springframework.stereotype.Component;

@Component
public class BookTransformer {

    private BookDto dto;
    private BookValidationService bookValidationService;

    public BookTransformer(BookDto dto, BookValidationService bookValidationService) {
        this.dto = dto;
        this.bookValidationService= bookValidationService;
    }

    public BookDto book2BookResponseTransformer(Book book )
    {
        BookResponse bookResponse=new BookResponse();
        dto.setBookResponse(bookResponse);
        dto.setBook(book);

        // check is id in book obj present or not
        if(bookValidationService.isRequestHadBookIdPresent(dto.getBook()))
        {
            dto.getBookResponse().setId(dto.getBook().getId());
            dto.getBookResponse().setCategory(dto.getBook().getCategory());
            dto.getBookResponse().setAuthor(dto.getBook().getAuthor());
            dto.getBookResponse().setCopies(dto.getBook().getCopies());
            dto.getBookResponse().setTitle(dto.getBook().getTitle());
            dto.getBookResponse().setDescription(dto.getBook().getDescription());
            dto.getBookResponse().setCopiesAvailable(dto.getBook().getCopiesAvailable());
        }

        return dto;
    }

}
