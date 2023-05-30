CREATE TABLE categories(
id INT IDENTITY(1,1) PRIMARY KEY,
categoryName VARCHAR (200) NOT NULL UNIQUE,
categoryDescription VARCHAR(2000) NULL,
superCategory INT NULL REFERENCES categories(id)
)