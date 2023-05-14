
CREATE OR ALTER PROCEDURE createOrder(
@id VARCHAR(200), @userID VARCHAR(200),@orderDate DATE)

AS 
BEGIN 
INSERT INTO orders (id,userID)
VALUES (@id, @userID)
UPDATE orders SET  orderStatus='processing'
END
 
