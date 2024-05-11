package com.luv2code.bookstoreapplication.businesservice;

import com.luv2code.bookstoreapplication.entity.Book;
import org.springframework.stereotype.Component;

@Component
public class BookValidationService {

    public boolean isRequestHadBookIdPresent(Book book)
    {
        if(book.getId()==null)
        {
            // write custome exception
//            throw new Exception("Book id not present in incoming request");
            return false;
        }
        return true;
    }


}
