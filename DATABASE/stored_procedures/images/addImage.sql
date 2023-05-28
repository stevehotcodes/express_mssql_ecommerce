CREATE OR ALTER PROCEDURE addImage(
@imageURL VARCHAR (200),
@productID VARCHAR (200)
)
AS
BEGIN

INSERT INTO images (imageURL, productID)
VALUES (@imageURL, @productID)

END
