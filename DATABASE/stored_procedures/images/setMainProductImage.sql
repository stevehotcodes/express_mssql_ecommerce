CREATE OR ALTER PROCEDURE setMainProductImage(
    @id INT,
    @productID VARCHAR(200)
    )
AS
BEGIN

UPDATE images SET isMain=0 WHERE productID=@productID;
UPDATE images SET isMain=1 WHERE id=@id;

END
