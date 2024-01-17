package com.example.springbootapp.repository;

import com.example.springbootapp.model.Food;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@Repository
public class FoodRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public FoodRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Food> getFoods() {
        var sql =
            """
            SELECT food_id, food_name, food_rating FROM food
            """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> toFood(rs));
    }

    public Food addFood(Food food) {
        var parameters = new MapSqlParameterSource()
            .addValue("id", food.id())
            .addValue("name", food.name())
            .addValue("rating", food.rating());
        var sql =
            """
            INSERT INTO food (food_id, food_name, food_rating)
            VALUES (:id, :name, :rating);
            """;

        int rows = jdbcTemplate.update(sql, parameters);

        if (rows > 0) {
            return getFoodById(food.id());
        }
        throw new RuntimeException("Error, could not add food");
    }

    public Food editFood(Food food) {
        var parameters = new MapSqlParameterSource()
            .addValue("id", food.id())
            .addValue("name", food.name())
            .addValue("rating", food.rating());
        var sql =
            """
            UPDATE food SET food_name = :name, food_rating = :rating 
            WHERE food_id = :id
            """;
        var rows = jdbcTemplate.update(sql, parameters);

        if (rows > 0) {
            return getFoodById(food.id());
        }
        throw new RuntimeException("Error, could not update food");
    }

    public void deleteFood(UUID id) {
        var parameters = new MapSqlParameterSource()
            .addValue("id", id);
        var sql =
            """
            DELETE FROM food
            WHERE food_id = :id
            """;
        var rows = jdbcTemplate.update(sql, parameters);

        if (rows < 1) {
            throw new RuntimeException("Error, could not delete.");
        }
    }

    public Food getFoodById(UUID id) {
        var parameters = new MapSqlParameterSource()
            .addValue("id", id);
        var sql =
            """
            SELECT food_id, food_name, food_rating FROM food
            WHERE food_id = :id
            """;
        return jdbcTemplate.query(sql, parameters, this::toFood);
    }

    private Food toFood(ResultSet rs) throws SQLException {
        var idFromDb = UUID.fromString(rs.getString("food_id"));
        var name = rs.getString("food_name");
        var rating = rs.getBigDecimal("food_rating");
        return new Food(idFromDb, name, rating);
    }

}
