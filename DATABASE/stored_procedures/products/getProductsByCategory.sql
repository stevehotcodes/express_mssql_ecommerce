CREATE  OR ALTER PROCEDURE getProductsByCategory(
    @category INT
)
AS
BEGIN
SELECT * FROM products
WHERE isDeleted=0 AND category=@category
END
