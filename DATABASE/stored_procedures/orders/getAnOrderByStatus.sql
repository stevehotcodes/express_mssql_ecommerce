CREATE OR ALTER PROCEDURE getAnOrderByStatus(@id VARCHAR (200), @orderStatus VARCHAR(200))
AS
BEGIN
SELECT * FROM orders WHERE id=@id AND orderStatus=@orderStatus

END
