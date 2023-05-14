CREATE OR ALTER PROCEDURE cancelOrderById(
@id VARCHAR(200)
)
AS
BEGIN
 
UPDATE orders SET orderStatus= 'canceled' WHERE id=@id
END
 
