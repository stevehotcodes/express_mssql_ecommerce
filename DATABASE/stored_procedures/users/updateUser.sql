CREATE OR ALTER PROCEDURE updateUser(
@id VARCHAR(200),
@firstname VARCHAR(100),
@lastname VARCHAR(100),
@email VARCHAR(200),
@password VARCHAR(200)
)
AS
BEGIN 
 
 UPDATE users SET firstname=@firstname, lastname=@lastname, email=@email, password=@password
 WHERE id=@id AND isDeleted=0

END
