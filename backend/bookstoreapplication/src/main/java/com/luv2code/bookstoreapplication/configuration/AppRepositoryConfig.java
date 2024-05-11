package com.luv2code.bookstoreapplication.configuration;

import com.luv2code.bookstoreapplication.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.mapping.HttpMethods;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class AppRepositoryConfig implements RepositoryRestConfigurer {

    private String allowedOrigin ="http://localhost:3000";
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] blockedMethods={
                HttpMethod.POST,
                HttpMethod.PUT,
                HttpMethod.PATCH,
                HttpMethod.DELETE
        };
        config.exposeIdsFor(Book.class);
        blockMethodesController(Book.class,config, blockedMethods);

        cors.addMapping(config.getBasePath()+"/**")
                .allowedOrigins(allowedOrigin);
    }

    private void blockMethodesController(Class entityClass, RepositoryRestConfiguration config,HttpMethod[] blockedMethods)
    {
        config.getExposureConfiguration()
                .forDomainType(entityClass)
                .withItemExposure((metadata, httpmethods)-> httpmethods.disable(blockedMethods))
                .withCollectionExposure((metadata,httpMethods) -> httpMethods.disable(blockedMethods));

    }

}