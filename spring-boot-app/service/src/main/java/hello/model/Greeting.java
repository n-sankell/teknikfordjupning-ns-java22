package hello.model;

import java.util.UUID;

public class Greeting {

    private UUID greeting_id;
    private String greeting_value;

    public Greeting(UUID greeting_id, String greeting_value) {
        this.greeting_id = greeting_id;
        this.greeting_value = greeting_value;
        System.out.println(greeting_value);
    }

    public Greeting() {
        System.out.println("empty constructor");
    }

    public String getGreeting_vale() {
        return greeting_value;
    }

    public void setGreeting_vale(String greeting_value) {
        System.out.println(greeting_value);
        this.greeting_value = greeting_value;
    }

    public UUID getGreeting_id() {
        return greeting_id;
    }

    public void setGreeting_id(UUID greeting_id) {
        this.greeting_id = greeting_id;
    }

    @Override
    public String toString() {
        return "Greeting: " +
            "\n id: " + greeting_id +
            "\n value: " + greeting_value;
    }

}
