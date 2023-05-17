CREATE OR ALTER PROCEDURE resetUserPassword(
@id VARCHAR(200),
@password VARCHAR(200)
)
AS
BEGIN 
 
 UPDATE users SET password=@password
 WHERE id=@id AND isDeleted=0

END
