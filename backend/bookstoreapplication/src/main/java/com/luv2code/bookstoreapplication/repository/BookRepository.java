package com.luv2code.bookstoreapplication.repository;

import com.luv2code.bookstoreapplication.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
