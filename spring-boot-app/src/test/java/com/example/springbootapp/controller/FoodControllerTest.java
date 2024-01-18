package com.example.springbootapp.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class FoodRepositoryTest {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodRepositoryTest(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Test
    void addFood() {
        
    }

}
