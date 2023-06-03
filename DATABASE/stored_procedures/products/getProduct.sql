CREATE OR ALTER PROCEDURE getProduct(
    @id VARCHAR(200)
    )
AS
BEGIN

SELECT * FROM products WHERE id=@id
END

