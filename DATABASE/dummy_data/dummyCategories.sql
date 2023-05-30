-- ids are autoNumber

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Furniture','Furniture Products'); -- 1

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Electronics','Electronic Products'); -- 2

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Fashion','Fashion Products'); -- 3

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Phones & Tablets','Phones & Tablets Products' ); -- 4

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Computing','Desktops and Laptops Products'); -- 5



INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Mens clothing','Clothing for Men',3); -- 6

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Womens clothing','Clothing for Women',3); -- 7


INSERT INTO categories (categoryName, categoryDescription, superCategory)
VALUES ('Laptops','Laptops Products',5); -- 8

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Desktops','Desktop Products',5); -- 9

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Computing Accessories','Computing Accessories',5); -- 10


INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Phones','Mobile & Smartphones',4); -- 11

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Tablets','Tablets Products',4); -- 12

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Accessories - Phones & Tablets','Accessories for Phones and Tablets',4); -- 13


INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Beds','Beds Products',1); -- 14

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Tables','Table Products',1); -- 15

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Chairs & Sofas','Chairs and Sofas products',1); -- 16

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Tablets','Tablets Products',4); -- 17


INSERT INTO categories (categoryName, categoryDescription)
VALUES ('Kitchenware','Kitchenware products'); -- 18

INSERT INTO categories (categoryName, categoryDescription)
VALUES ('TVs & Sounds','Televisions and Sounds products'); -- 19

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('TVs','Televisions',19); -- 20

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Sounds','Sounds',19); -- 21

INSERT INTO categories (categoryName, categoryDescription, superCategories)
VALUES ('Tablets','Tablets Products',4); -- 22
