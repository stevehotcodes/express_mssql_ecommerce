CREATE OR ALTER PROC addProduct(
@id VARCHAR(200) ,
@productName VARCHAR (200),
@productDescription VARCHAR(200),
@price DECIMAL (10,2),
@stockQuantity INT = 0,
@brand VARCHAR(200) = NULL,
@category INT = NULL
)
AS
BEGIN
INSERT INTO products (id,productName,productDescription,price, stockQuantity, brand, category)
VALUES (@id,@productName,@productDescription,@price, @stockQuantity, @brand, @category)
END
