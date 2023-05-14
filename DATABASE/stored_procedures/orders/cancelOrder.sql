CREATE OR ALTER PROCEDURE cancelOrderById(
@id VARCHAR(200)
)
AS
BEGIN
SELECT * FROM orders WHERE id=@id
UPDATE orders SET orderStatus= 'cancelled'
END
 
