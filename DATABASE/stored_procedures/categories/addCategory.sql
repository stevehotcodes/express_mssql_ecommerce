CREATE OR ALTER PROCEDURE addCategory(
@categoryName VARCHAR (200),
@categoryDescription VARCHAR(200) = NULL,
@superCategory INT = NULL
)
AS
BEGIN

INSERT INTO categories (categoryName, categoryDescription, superCategory)
VALUES (@categoryName, @categoryDescription, @superCategory)

END
