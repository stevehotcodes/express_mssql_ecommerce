CREATE OR ALTER PROCEDURE addCartItem(
@id VARCHAR(200),
@productID VARCHAR(200),
@quantity INT = 1,
@userID VARCHAR(200)
)
AS
BEGIN
INSERT INTO cart (id, productID, quantity, userID)
VALUES (@id, @productID, @quantity, @userID)
END

