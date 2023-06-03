CREATE OR ALTER PROCEDURE getAnOrderById(@id VARCHAR(200))
AS
BEGIN

SELECT o.id as id, o.orderStatus as status, o.orderDate, s.productID, s.quantity, o.userID, p.productName, s.price, img.imageURL as imageURL
FROM orders AS o
LEFT JOIN
sales AS s
ON o.id=s.orderID
LEFT JOIN
products AS p
ON p.id=s.productID
LEFT JOIN
images AS img
ON s.productID=img.productID
where isMain=1 AND o.id=@id

END
