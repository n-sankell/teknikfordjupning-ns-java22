package org.example.converter;

import generatedapi.model.GreetingDto;
import generatedapi.model.GreetingsDto;
import hello.model.Greeting;

import java.util.List;

public class GreetingConverter {

    public static GreetingDto convert(Greeting greeting) {
        return new GreetingDto()
            .message(greeting.getGreeting_vale());
    }

    public static GreetingsDto convert(List<Greeting> greetings) {
        return new GreetingsDto()
            .greetings(greetings.stream().map(GreetingConverter::convert).toList());
    }

}
