CREATE OR ALTER PROCEDURE addSalesItem(
@id VARCHAR(200),
@itemID VARCHAR (200),
@quantity INT,
@orderID VARCHAR(200),
@price DECIMAL(10,2) 
)
AS
BEGIN
INSERT INTO sales (id,itemID,quantity,orderID,price)
VALUES (@id,@itemID,@quantity,@orderID,@price)
END