CREATE OR ALTER PROC addProduct(
@id VARCHAR(200) ,
@productName VARCHAR (200),
@productDescription VARCHAR(200),
@price DECIMAL (10,2)

)
AS
BEGIN
INSERT INTO products (id,productName,productDescription,price)
VALUES (@id,@productName,@productDescription,@price)
END
