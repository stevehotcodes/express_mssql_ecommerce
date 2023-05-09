CREATE OR ALTER PROCEDURE updateProduct(
@id VARCHAR (200),
@productName VARCHAR(200),
@productDescription VARCHAR(200),
@price DECIMAL (10,2)
)
AS 
BEGIN
 UPDATE products
 SET productName=@productName, productDescription=@productDescription,price=@price
 WHERE id=@id
 END 
