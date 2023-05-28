CREATE OR ALTER PROCEDURE getProductImages(
@productID VARCHAR(200)
)
AS
BEGIN
	SELECT * FROM images
	WHERE productID=@productID
END