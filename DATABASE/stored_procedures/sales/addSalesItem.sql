CREATE OR ALTER PROCEDURE addSalesItem(
@id VARCHAR(200),
@productID VARCHAR (200),
@quantity INT,
@orderID VARCHAR(200),
@price DECIMAL(10,2) 
)
AS
BEGIN
INSERT INTO sales (id,productID,quantity,orderID,price)
VALUES (@id,@productID,@quantity,@orderID,@price)
END