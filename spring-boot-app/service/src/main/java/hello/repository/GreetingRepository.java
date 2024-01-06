package hello.repository;

import hello.model.Greeting;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.List;
import java.util.UUID;

@org.springframework.stereotype.Repository
public class GreetingRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public GreetingRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Greeting> getAll() {
        var sql =
            """
            SELECT greeting_id, greeting_value FROM greeting
            """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Greeting entity = new Greeting();
            entity.setGreeting_id(UUID.fromString(rs.getString("greeting_id")));
            entity.setGreeting_vale(rs.getString("greeting_value"));
            return entity;
        });
    }

}
