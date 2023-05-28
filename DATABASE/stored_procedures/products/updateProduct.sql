CREATE OR ALTER PROCEDURE updateProduct(
@id VARCHAR (200),
@productName VARCHAR(200),
@productDescription VARCHAR(200),
@price DECIMAL (10,2),
@stockQuantity INT,
@brand VARCHAR(200),
@category INT
)
AS 
BEGIN
 UPDATE products
 SET productName=@productName, productDescription=@productDescription,price=@price, stockQuantity=@stockQuantity, brand=@brand, category=@category
 WHERE id=@id AND isDeleted=0
 END 
