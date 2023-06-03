CREATE OR ALTER PROCEDURE deleteProduct(
@id VARCHAR (200)
)
AS
BEGIN
UPDATE products SET isDeleted=1 WHERE id=@id AND isDeleted=0

END
 
 