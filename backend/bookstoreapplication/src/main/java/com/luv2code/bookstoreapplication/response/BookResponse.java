package com.luv2code.bookstoreapplication.response;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data()
public class BookResponse {
    private Long id;
    private String  title;
    private String author;
    private  String description;
    private int copies;
    private int copiesAvailable;
    private String category;
}
