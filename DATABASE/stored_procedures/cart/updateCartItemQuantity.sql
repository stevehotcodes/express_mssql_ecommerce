CREATE OR ALTER PROCEDURE updateCartItemQuantity(
@id VARCHAR(200),
@quantity INT
)
AS
BEGIN
UPDATE cart SET quantity=@quantity
WHERE id=@id
END