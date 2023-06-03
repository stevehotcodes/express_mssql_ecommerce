CREATE OR ALTER PROCEDURE deleteCategory(
@id INT
)
AS
BEGIN
DELETE FROM categories WHERE id=@id
END