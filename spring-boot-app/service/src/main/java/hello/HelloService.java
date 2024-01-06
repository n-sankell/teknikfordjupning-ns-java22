package hello;

import hello.model.Greeting;
import hello.repository.GreetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HelloService {

    private final GreetingRepository greetingRepository;

    @Autowired
    public HelloService(
        GreetingRepository greetingRepository
    ) {
        this.greetingRepository = greetingRepository;
    }

    public List<Greeting> getGreetings() {
        return greetingRepository.getAll();
    }

}
