CREATE OR ALTER PROCEDURE getProductImages(
@id INT
)
AS
BEGIN
	SELECT * FROM images
	WHERE id=@id
END