CREATE OR ALTER PROCEDURE addUser(
@id VARCHAR(200),
@firstname VARCHAR(100),
@lastname VARCHAR(100),
@email VARCHAR(200),
@password VARCHAR(200)
)
AS
BEGIN

INSERT INTO users (id, firstname, lastname, email, password)
VALUES (@id, @firstname, @lastname, @email, @password)

END
