CREATE TRIGGER cascadeDeleteCategories
ON categories
AFTER DELETE
AS
BEGIN
    DELETE FROM categories WHERE superCategory IN (SELECT id FROM deleted);
END;