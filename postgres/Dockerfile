FROM postgres
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD mysecretpassword
ENV POSTGRES_DB greeting_db
COPY CreateDB.sql /docker-entrypoint-initdb.d/
EXPOSE 5432