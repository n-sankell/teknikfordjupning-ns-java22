package org.example.controller;

import generatedapi.GreetingsApi;
import generatedapi.model.GreetingsDto;
import hello.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import static org.example.converter.GreetingConverter.convert;

@RestController
public class HelloApiController implements GreetingsApi {

    private final HelloService helloService;

    @Autowired
    public HelloApiController(HelloService helloService) {
        this.helloService = helloService;
    }

    @Override
    @CrossOrigin(value = {"http://localhost:3000/", "http://localhost:3001/"})
    public ResponseEntity<GreetingsDto> greetingsAllGet() {
        return ResponseEntity.ok().body(convert(helloService.getGreetings()));
    }

}
