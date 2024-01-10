FROM postgres
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD mysecretpassword
ENV POSTGRES_DB postgres
COPY CreateDB.sql /docker-entrypoint-initdb.d/
EXPOSE 5432