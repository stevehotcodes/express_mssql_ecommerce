CREATE OR ALTER PROCEDURE getOrdersByUser(@userID VARCHAR(200))
AS
BEGIN
SELECT * FROM orders WHERE userID=@userID 

END
