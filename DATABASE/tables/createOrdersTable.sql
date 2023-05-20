CREATE TABLE orders(
id VARCHAR(200) PRIMARY KEY,
orderStatus VARCHAR(200) DEFAULT 'processing' CHECK (orderStatus IN ('processing','shipping','shipped', 'canceled')),
orderDate DATETIME DEFAULT GETDATE(),
userID  VARCHAR(200) 
 FOREIGN KEY REFERENCES users(id)
)
