CREATE OR ALTER PROCEDURE getCart(
@userID VARCHAR(200)
)
AS
BEGIN
SELECT c.id, c.productID, c.quantity, c.userID, p.productName, p.price, img.imageURL
FROM cart AS c
LEFT JOIN
products AS p
ON c.productID=p.id
LEFT JOIN
images AS img
ON c.productID=img.productID
where isMain=1 AND c.userID=@userID
END
