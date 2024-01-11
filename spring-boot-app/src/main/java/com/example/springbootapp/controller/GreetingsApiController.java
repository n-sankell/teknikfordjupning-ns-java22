package com.example.springbootapp.controller;

import com.example.springbootapp.service.GreetingsService;
import generatedapi.GreetingsApi;
import generatedapi.model.GreetingsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import static com.example.springbootapp.converter.GreetingConverter.convert;

@RestController
public class GreetingsApiController implements GreetingsApi {

    private final GreetingsService greetingsService;

    @Autowired
    public GreetingsApiController(GreetingsService greetingsService) {
        this.greetingsService = greetingsService;
    }

    @Override
    @CrossOrigin(value = {"http://localhost:3000/", "http://localhost:3001/"})
    public ResponseEntity<GreetingsDto> getGreetings() {
        System.out.println("GEEETTTT");
        return ResponseEntity.ok(convert(greetingsService.getGreetings()));
    }

}