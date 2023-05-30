-- id VARCHAR(200) PRIMARY KEY,
-- productName VARCHAR (200) NOT NULL,
-- productDescription VARCHAR(200) NOT NULL,
-- price DECIMAL (10,2) NOT NULL,
-- stockQuantity INT DEFAULT 0 CHECK(stockQuantity >= 0),
-- isDeleted INT DEFAULT 0,
-- brand VARCHAR(200) DEFAULT NULL,
-- category INT NULL FOREIGN KEY REFERENCES categories(id)
-- ON DELETE SET NULL



INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand)
VALUES('10d5ad36-6936-4666-ad04-040bb45316f0','Eye Glasses','Baus Eye Glasses',7000,14,'Baus');

  -- {
  --   id: "",
  --   productName: ",
  --   productDescription: ",
  --   price: 7000,
  --   image: "https://img.ebdcdn.com/product/front/white/pl6605.jpg?im=Resize,width=700,height=350,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0"
  -- },

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('5abcc5af-7657-497d-b0dc-8103b2dIdff43','iPhone 15','Silver iPhone 15',112000,91,'Apple',11);
  -- {
  --   id: "5abcc5af-7657-497d-b0dc-8103b2dIdff43",
  --   productName: "iPhone 15",
  --   productDescription: "Silver iPhone 15",
  --   price: 112000,
  --   image: "https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/ffc16f9e-0fde-4ebc-9e40-66c402a4f572"
  -- },

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('932fa85c-2751-4aaf-abd7-aaa36113115a','24\" Dell Monitor','24inch Dell Monitor',14999,242,'Dell',10);

  -- {
  --   id: "932fa85c-2751-4aaf-abd7-aaa36113115a",
  --   productName: "Dell Monitor",
  --   productDescription: "24\" Dell Monitor",
  --   price: 14999,
  --   image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/c-series/c2423h/media-gallery/monitor-c2423h-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=4072&hei=3336&qlt=100,1&resMode=sharp2&size=4072,3336&chrss=full&imwidth=5000"
  -- },


--   {
--     id: "a4453f8b-2304-49f4-9018-c4dc573ef1e2",
--     productName: "Kings Collection Suitcase",
--     productDescription: "Small Kings Collection suitcase in black",
--     price: 5400,
--     image: "https://kensoko.com/desc_images/4069_kings-collection-hard-shell-4-wheels-suitcase.jpg"
--   },


--   {
--     id: "c1e2da16-68ca-4625-b275-6445c7a0fd20",
--     productName: "MacBook Pro M2 16\"",
--     productDescription: "Gray MacBook Pro M2 16\" Laptop 512GB 16GB",
--     price: 267000,
--     image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673202"
--   },


--   {
--     id: "d5c00990-0924-4f09-a8e0-def4a5b022ad",
--     productName: "Tshirt",
--     productDescription: "Yellow Tshirt",
--     price: 2000,
--     image: "https://img.freepik.com/premium-photo/man-yellow-t-shirt-space-your-logo-design-mockup-print_93200-4095.jpg"
--   },


--   {
--     id: "932fa85c-2751-4aaf-abd7-aaa36113115a",
--     productName: "Dell Monitor",
--     productDescription: "24\" Dell Monitor",
--     price: 14999,
--     image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/c-series/c2423h/media-gallery/monitor-c2423h-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=4072&hei=3336&qlt=100,1&resMode=sharp2&size=4072,3336&chrss=full&imwidth=5000"
--   },

  
--   {
--     id: "5abcc5af-7657-497d-b0dc-8103b2ddff43",
--     productName: "iPhone 15",
--     productDescription: "Silver iPhone 15",
--     price: 112000,
--     image: "https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/ffc16f9e-0fde-4ebc-9e40-66c402a4f572"
--   }

-- ]