CREATE TABLE orders(
id VARCHAR(200) PRIMARY KEY,
orderStatus VARCHAR(200) DEFAULT 'processing' CHECK (orderStatus IN ('processing','shipping','shipped', 'canceled')),
orderDate VARCHAR(200) DEFAULT GETDATE(),
userID  VARCHAR(200) NOT NULL
 FOREIGN KEY REFERENCES users(id)
)
