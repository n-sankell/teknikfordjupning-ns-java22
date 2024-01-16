package com.example.springbootapp.controller;

import com.example.springbootapp.service.FoodService;
import generatedapi.FoodsApi;
import generatedapi.model.FoodDto;
import generatedapi.model.FoodsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import static com.example.springbootapp.converter.FoodConverter.convert;
import static org.springframework.http.ResponseEntity.ok;

@RestController
public class FoodController implements FoodsApi {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @Override
    public ResponseEntity<FoodDto> addFood(FoodDto foodDto) {
        var food = foodService.addFood(foodDto);
        return ok(convert(food));
    }

    @Override
    public ResponseEntity<FoodsDto> getFoods() {
        return ok(convert(foodService.getAllFoods()));
    }
}
