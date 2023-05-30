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

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('5abcc5af-7657-497d-b0dc-8103b2dIdff43','iPhone 15','Silver iPhone 15',112000,91,'Apple',11);

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('932fa85c-2751-4aaf-abd7-aaa36113115a','24\" Dell Monitor','24inch Dell Monitor',14999,242,'Dell',10);

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand)
VALUES ('a4453f8b-2304-49f4-9018-c4dc573ef1e2', 'Kings Collection Suitcase', 'Small Kings Collection suitcase in black', 5400, 6, 'King''s Collection');

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('c1e2da16-68ca-4625-b275-6445c7a0fd20', 'MacBook Pro M2 16\"', 'Gray MacBook Pro M2 16\" Laptop 512GB 16GB', 267000, 34, 'Apple', 8);

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('d5c00990-0924-4f09-a8e0-def4a5b022ad', 'Tshirt', 'Yellow Tshirt', 2000, 456, 'Grabia Fashion', 3);


INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand)
VALUES ('33a9cb45-2d24-4bc7-9e47-6be4d7b32135', 'Elegant Watch', 'A sleek and stylish watch that complements any outfit.', 8999, 25, 'TimeMaster');

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand)
VALUES ('5b8834f0-7433-4b3e-b430-41c683ee9356', 'Wireless Headphones', 'Enjoy high-quality sound without the hassle of wires.', 14999, 18, 'SoundWave');

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand)
VALUES ('8de70bdc-23a7-45e7-9b1b-62495a271dd2', 'Portable Bluetooth Speaker', 'Take your music anywhere with this compact and powerful speaker.', 7999, 32, 'AudioTech');

INSERT INTO products (id,productName,productDescription,price,stockQuantity,brand,category)
VALUES ('bdd2992e-1ee0-4f1d-9981-d8c44fbc94e2', 'Laptop Backpack', 'Keep your laptop and other essentials safe and organized while on the go.', 1800, 10, 'TechGear', 10);


INSERT INTO products (id, productName, productDescription, price, stockQuantity, brand, category)
VALUES 
('4ae3b477-7a32-4be9-a363-5988bc9daef4', 'Smartphone', 'Stay connected with this powerful and feature-packed smartphone.', 79999, 10, 'TechGadget', 11),
('5984df47-8c7d-4a64-982a-68e1b2d7a1d3', 'Laptop', 'Enhance your productivity with this high-performance laptop.', 127990, 15, 'TechMaster', 8),
('9a91c431-8997-4dbb-9c3d-7c66e50e32a6', 'Wireless Headphones', 'Enjoy wireless audio with these comfortable and immersive headphones.', 14099, 20, 'SoundBliss', NULL),
('a79d1fe5-8851-4c9e-91f4-4a2a2dc273f6', 'Smart TV', 'Transform your living room with this stunning 4K smart TV.', 78345, 8, 'VisionTech', 20),
('c7239474-0a4d-4e8a-80e1-829d0cda2e1c', 'Digital Camera', 'Capture precious moments with this high-resolution digital camera.', 59999, 12, 'SnapShot', 2),
('f7601de0-bbd6-4cc3-8e6f-62bce487a349', 'Tablet', 'Experience portable computing with this sleek and versatile tablet.', 49999, 18, 'TabTech', 12),
('620ca681-6377-49f1-9424-7c4d28bb1b13', 'Smart Speaker', 'Enjoy hands-free convenience with this voice-controlled smart speaker.', 12999, 14, 'AudioTech', 2),
('e85c1539-cbd6-4dbf-8b1f-c1a8434be19f', 'Smartwatch', 'Stay connected and track your fitness with this stylish smartwatch.', 19999, 8, 'TechWear', NULL),
('41e37abf-6ab7-47d6-96d9-d0f1a1378be0', 'Smartwatch', 'Stay connected and track your fitness with this stylish smartwatch.', 19999, 8, 'TechWear', NULL),
('64a2a85e-9e3c-4686-bf3d-9252a1c23806', 'External SDD', 'Expand your storage space with this high-capacity external solid state drive.', 12999, 13, 'DataVault', 10),
('3f244daf-bf6b-456b-8886-5d30500ce7a7', 'Wireless Router', 'Enjoy fast and reliable internet connections with this powerful router.', 9999, 21, 'NetConnect', 2),
('5a44a2db-4d33-4083-92a9-26e2824b6183', 'Power Bank', 'Charge your devices on the go with this portable and high-capacity power bank.', 4999, 24, 'PowerPro', 10),
('62a4181c-4d3c-4e2e-bff6-155dbfdac2e2', 'Bluetooth Earphones', 'Enjoy wireless audio with these comfortable and high-fidelity earphones.', 7999, 17, 'SoundWave', NULL),
('1b36a0a3-486f-4f11-8e23-1f1937b1184e', 'Fitness Tracker', 'Monitor your health and track your workouts with this advanced fitness tracker.', 7999, 23, 'FitTech', NULL),
('1316e9bc-1ed1-4ff7-8c77-167a01de3c94', 'Portable SSD', 'Experience fast and reliable data storage with this compact and durable SSD.', 19999, 11, 'SpeedDrive', 10),
('892d23a9-5ab5-4d81-99d0-3a3c206e5258', 'Wireless Mouse', 'Enhance your productivity with this ergonomic and wireless mouse.', 2999, 30, 'MouseTech', 10),
('b57da7b2-47c2-4371-8e59-f2145e5ac02e', 'SONY PS5 Gaming Console', 'Enter the world of gaming with this powerful and versatile gaming console.', 39999, 6, 'PlayStation', 22),
('4d02f1dd-140b-4de6-b7cd-1db13e12d455', 'Bluetooth Speaker', 'Enjoy your favorite music with this portable and wireless Bluetooth speaker.', 7999, 25, 'SoundWave', NULL),
('19b6fb59-d759-43ed-8c4a-48e5e08c24c3', 'Wireless Keyboard', 'Type with ease and freedom using this compact and wireless keyboard.', 4999, 20, 'KeyTech', 10),
('3e5c5004-3d89-4e6e-8aef-b000ca4b700a', 'Arlo Smart Doorbell', 'Monitor and secure your home with this intelligent and easy-to-install doorbell.', 14999, 9, 'Arlo Technologies', 2),
('0dcfd364-2e4a-4f83-8d18-bae67bc9a839', 'Portable Projector', 'Enjoy big-screen entertainment anywhere with this compact and portable projector.', 29999, 7, 'CineTech', 2),
('bf80a1b2-8992-4c1a-aaf9-bb74bc0f82be', 'Wireless Charger', 'Effortlessly charge your devices wirelessly with this sleek and convenient charger.', 3999, 29, 'Momax', NULL),
('12b6a671-0e43-4327-8f15-78239e89105b6', 'Blender', 'Prepare delicious smoothies and more with this powerful blender.', 6999, 27, 'BlendMaster', 18),
('68ebe440-6fc5-4772-938d-42c05dd3cfc5', 'Wireless Security Camera', 'Monitor your property with this high-resolution and easy-to-install security camera.', 12999, 18, 'SecureCam', 2),
('ddb5af6a-d5d3-4eaf-b42a-65efcc7b3a8e', 'Electric Shaver', 'Achieve a smooth shave with this advanced electric shaver for men.', 7999, 14, 'ShaveTech', 2),
('6fb20b96-1a52-41de-924b-37c58e67e797', 'PS5 Wireless Gaming Controller', 'Enhance your gaming experience with this ergonomic and responsive controller.', 5999, 22, 'PlayStation', 22),
('2ad6b35c-0c5a-4a40-b0e4-55ff69789d1d', 'Action Camera', 'Capture your adventures in stunning detail with this rugged and waterproof action camera.', 14999, 10, 'ActionPro', 2),
('19c89c37-5e18-421e-933f-c0eb7bbdca91', 'Wireless Keyboard and Mouse Combo', 'Stay productive and comfortable with this wireless keyboard and mouse combo.', 4999, 16, 'KeyTech', 10),
('2c5b3d50-4b0c-4176-8d7c-1350f8a5f142', 'Smart Home Hub', 'Control and automate your smart home devices with this central hub.', 9999, 12, 'SmartHome', 2),
('a5ee55b5-128b-41b3-959a-6c24951b1ee1', 'Bluetooth Car Adapter', 'Upgrade your car stereo system with Bluetooth connectivity using this handy adapter.', 3999, 28, 'AutoConnect', NULL),
('51a58794-5c8a-4a1e-8359-d12b10fc9a59', 'Car Phone Mount', 'Keep your phone secure and accessible while driving with this convenient car mount.', 1999, 25, 'AutoMount', 13),
('b8902e36-79ff-4e45-ba14-8b28a8d1a142', 'Cordless Vacuum Cleaner', 'Effortlessly clean your home with this lightweight and powerful cordless vacuum cleaner.', 14999, 16, 'CleanTech', 2),
('d0ef1f76-460f-4b8b-bec3-14299c640b40', 'KT Bluetooth Receiver', 'Upgrade your audio devices with Bluetooth capability using this easy-to-use receiver.', 2999, 23, 'Klark Teknik', 2),
('0345a929-251c-4cfd-bc95-5723f0f45067', 'Car Charger', 'Charge your devices on the go with this fast and compact car charger.', 1999, 28, 'AutoCharge', 2),
('f1e9dd64-4450-44b1-8ae6-33d7e8be45e9', 'Bluetooth Beanie Hat', 'Stay warm and enjoy music wirelessly with this cozy and tech-savvy beanie hat.', 3999, 16, 'BeanieTunes', 2),
('342f181e-79f7-4a7e-b4a2-27d0fd61a3d1', 'Wireless Doorbell', 'Never miss a visitor with this wireless doorbell featuring a range of chimes and easy installation.', 2999, 19, 'DoorChime', 2),
('cce2ed40-c08c-434f-9857-2c7478e00d5f', 'Portable Monitor', 'Extend your display on the go with this lightweight and portable monitor.', 19999, 12, 'ScreenExtend', 10),
('13e1df6d-bae6-4344-9f94-7e01c2346934', 'Fitness Resistance Bands Set', 'Strengthen and tone your muscles with this versatile set of resistance bands.', 2999, 21, 'FlexFit', NULL),
('8268224f-2518-4e0d-b60a-26b20d40a69f', 'Air Fryer', 'Fry your favorite foods with little to no oil using this innovative air fryer.', 8999, 18, 'CrispCook', 18),
('f9b5a7ef-3b39-4e7e-83a4-efc1f5a50b9e', 'Bluetooth Shower Speaker', 'Listen to music and answer calls in the shower with this water-resistant Bluetooth speaker.', 2499, 30, 'AquaTunes', 2),
('72241761-7036-4b89-b56b-6e93ab1f1ae3', 'Electric Toothbrush', 'Achieve a deep and thorough clean with this advanced electric toothbrush.', 6999, 15, 'Oral B', 2),
('9ef1324d-8e71-43ef-96c6-6a38f47300df', 'Portable Bluetooth Speaker', 'Take your music anywhere with this compact and wireless Bluetooth speaker.', 4999, 23, 'Bose', 2),
('c315a17d-84f1-4e37-8d89-4908a9c4d47e', 'Virtual Reality Headset', 'Immerse yourself in virtual worlds with this high-quality virtual reality headset.', 14999, 11, 'VRXperience', 2),
('0e3034e9-2d69-447c-8d6b-8a6992a5df57', 'Smart Thermostat', 'Control your home''s temperature with precision and energy efficiency using this smart thermostat.', 12999, 15, 'SmartTemp', 2);



-- 5. 
--    - ID: d2d6cb36-6e4a-4ed5-9869-8a8814e37e5c
--    - Product Name: Coffee Maker
--    - Product Description: Brew the perfect cup of coffee with this easy-to-use coffee maker.
--    - Price: $39.99
--    - Stock Quantity: 28
--    - Brand: BeanMaster
--    - Image: [Link to Image](https://example.com/coffeemaker1.jpg)

-- 6. 
--    - ID: f26814c2-6634-4193-9f84-4d7ae4a8b5d7
--    - Product Name: Fitness Tracker
--    - Product Description: Stay motivated and track your fitness goals with this advanced tracker.
--    - Price: $79.99
--    - Stock Quantity: 15
--    - Brand: FitPlus
--    - Image: [Link to Image](https://example.com/tracker1.jpg)

-- 7. 
--    - ID: 9e006c80-50f2-4749-8e1f-89a7b18a91e9
--    - Product Name: Smart Thermostat
--    - Product Description: Control your home's temperature from anywhere using your smartphone.
--    - Price: $129.99
--    - Stock Quantity: 22
--    - Brand: HomeControl
--    - Image: [Link to Image](https://example.com/thermostat1.jpg)

-- 8. 
--    - ID: 3633b725-0e9b-4c2a-9aa2-1fc5ad480ca4
  

--  - Product Name: Wireless Earbuds
--    - Product Description: Enjoy a truly wireless listening experience with these comfortable earbuds.
--    - Price: $129.99
--    - Stock Quantity: 20
--    - Brand: AudioSync
--    - Image: [Link to Image](https://example.com/earbuds1.jpg)

-- 9. 
--    - ID: 6f6eae54-bef9-40c2-a8f2-18a56ce7a8f1
--    - Product Name: Digital Camera
--    - Product Description: Capture stunning photos with this high-resolution digital camera.
--    - Price: $299.99
--    - Stock Quantity: 12
--    - Brand: PixelPro
--    - Image: [Link to Image](https://example.com/camera1.jpg)

-- 10. 
--     - ID: 4f65d557-1863-41e6-8936-7e0915fd4ce1
--     - Product Name: Gaming Mouse
--     - Product Description: Gain a competitive edge with this ergonomic gaming mouse.
--     - Price: $49.99
--     - Stock Quantity: 30
--     - Brand: GameMaster
--     - Image: [Link to Image](https://example.com/mouse1.jpg)

-- 11. 
--     - ID: 045bc19b-cb21-4ff9-9822-9252f5a2f17d
--     - Product Name: Bluetooth Keyboard
--     - Product Description: Increase your productivity with this wireless and portable keyboard.
--     - Price: $79.99
--     - Stock Quantity: 17
--     - Brand: KeyTech
--     - Image: [Link to Image](https://example.com/keyboard1.jpg)

-- 12. 
--     - ID: a592e80e-437d-4f1f-bfea-88fbab8e0a23
--     - Product Name: Portable Charger
--     - Product Description: Stay powered up on the go with this compact and high-capacity charger.
--     - Price: $29.99
--     - Stock Quantity: 26
--     - Brand: PowerGen
--     - Image: [Link to Image](https://example.com/charger1.jpg)

-- 13. 
--     - ID: 33a067f5-ae1a-4b8f-9c2e-c31f59d36a2e
--     - Product Name: Air Purifier
--     - Product Description: Breathe clean air with this efficient and quiet air purifier.
--     - Price: $149.99
--     - Stock Quantity: 14
--     - Brand: PureAir
--     - Image: [Link to Image](https://example.com/purifier1.jpg)

-- 14. 
--     - ID: 530f8eab-fd9f-4b73-bff1-d8ce4f884e2e
--     - Product Name: Electric Toothbrush
--     - Product Description: Achieve a brighter smile with this advanced electric toothbrush.
--     - Price: $79.99
--     - Stock Quantity: 19
--     - Brand: SmileTech
--     - Image: [Link to Image](https://example.com/toothbrush1.jpg)

-- 15. 
--     - ID: 7d71119e-01cc-432f-aaf1-794ab44e2ebe
--     - Product Name: Bluetooth Speaker
--     - Product Description: Enjoy your favorite music with rich, high-quality sound.
--     - Price: $69.99
--     - Stock Quantity: 23
--     - Brand: SonicWave
--     - Image: [Link to Image

-- ](https://example.com/speaker2.jpg)

-- 16. 
--     - ID: 41e37abf-6ab7-47d6-96d9-d0f1a1378be0
--     - Product Name: Smartwatch
--     - Product Description: Stay connected and track your fitness with this stylish smartwatch.
--     - Price: $199.99
--     - Stock Quantity: 8
--     - Brand: TechWear
--     - Image: [Link to Image](https://example.com/smartwatch1.jpg)

-- 17. 
--     - ID: 64a2a85e-9e3c-4686-bf3d-9252a1c23806
--     - Product Name: External Hard Drive
--     - Product Description: Expand your storage space with this high-capacity external hard drive.
--     - Price: $129.99
--     - Stock Quantity: 13
--     - Brand: DataVault
--     - Image: [Link to Image](https://example.com/harddrive1.jpg)

-- 18. 
--     - ID: 3f244daf-bf6b-456b-8886-5d30500ce7a7
--     - Product Name: Wireless Router
--     - Product Description: Enjoy fast and reliable internet connections with this powerful router.
--     - Price: $99.99
--     - Stock Quantity: 21
--     - Brand: NetConnect
--     - Image: [Link to Image](https://example.com/router1.jpg)

-- 19. 
--     - ID: 5a44a2db-4d33-4083-92a9-26e2824b6183
--     - Product Name: Power Bank
--     - Product Description: Charge your devices on the go with this portable and high-capacity power bank.
--     - Price: $49.99
--     - Stock Quantity: 24
--     - Brand: PowerPro
--     - Image: [Link to Image](https://example.com/powerbank1.jpg)

-- 20. 
--     - ID: 62a4181c-4d3c-4e2e-bff6-155dbfdac2e2
--     - Product Name: Bluetooth Earphones
--     - Product Description: Enjoy wireless audio with these comfortable and high-fidelity earphones.
--     - Price: $89.99
--     - Stock Quantity: 16
--     - Brand: SoundPod
--     - Image: [Link to Image](https://example.com/earphones1.jpg)

-- 21. 
--     - ID: cba3f9e1-58b3-431a-90e3-63bb0f43da72
--     - Product Name: Smart Home Security System
--     - Product Description: Protect your home with this comprehensive and easy-to-use security system.
--     - Price: $299.99
--     - Stock Quantity: 11
--     - Brand: SecureHome
--     - Image: [Link to Image](https://example.com/securitysystem1.jpg)

-- 22. 
--     - ID: 80ccab54-5410-4ad4-a6d1-0bdf725e7c78
--     - Product Name: Fitness Dumbbells Set
--     - Product Description: Build strength and tone your muscles with this versatile dumbbells set.
--     - Price: $149.99
--     - Stock Quantity: 9
--     - Brand: FitFlex
--     - Image: [Link to Image](https://example.com/dumbbells1.jpg)

-- 23. 
--     - ID: 940b88e3-33cd-4ebe-9d0d-4a1de

-- 89105b6
--     - Product Name: Blender
--     - Product Description: Prepare delicious smoothies and more with this powerful blender.
--     - Price: $69.99
--     - Stock Quantity: 27
--     - Brand: BlendMaster
--     - Image: [Link to Image](https://example.com/blender1.jpg)

-- 24. 
--     - ID: 68ebe440-6fc5-4772-938d-42c05dd3cfc5
--     - Product Name: Wireless Security Camera
--     - Product Description: Monitor your property with this high-resolution and easy-to-install security camera.
--     - Price: $129.99
--     - Stock Quantity: 18
--     - Brand: SecureCam
--     - Image: [Link to Image](https://example.com/securitycamera1.jpg)

-- 25. 
--     - ID: ddb5af6a-d5d3-4eaf-b42a-65efcc7b3a8e
--     - Product Name: Electric Shaver
--     - Product Description: Achieve a smooth shave with this advanced electric shaver for men.
--     - Price: $79.99
--     - Stock Quantity: 14
--     - Brand: ShaveTech
--     - Image: [Link to Image](https://example.com/shaver1.jpg)

-- 26. 
--     - ID: 6fb20b96-1a52-41de-924b-37c58e67e797
--     - Product Name: Wireless Gaming Controller
--     - Product Description: Enhance your gaming experience with this ergonomic and responsive controller.
--     - Price: $59.99
--     - Stock Quantity: 22
--     - Brand: GameControl
--     - Image: [Link to Image](https://example.com/controller1.jpg)

-- 27. 
--     - ID: 2ad6b6bc-2f9a-4561-8b25-d2de47fc9f9a
--     - Product Name: Robot Vacuum Cleaner
--     - Product Description: Keep your floors clean without lifting a finger using this intelligent robot vacuum cleaner.
--     - Price: $199.99
--     - Stock Quantity: 10
--     - Brand: RoboClean
--     - Image: [Link to Image](https://example.com/vacuum1.jpg)

-- 28. 
--     - ID: 4a03ed1b-2761-40c3-9e7b-09773d4f6f7e
--     - Product Name: Portable Bluetooth Keyboard
--     - Product Description: Type with ease on this compact and wireless keyboard compatible with smartphones and tablets.
--     - Price: $49.99
--     - Stock Quantity: 20
--     - Brand: MobileType
--     - Image: [Link to Image](https://example.com/keyboard2.jpg)

-- 29. 
--     - ID: e7da2c63-446a-4ee0-a7fb-8e739fc6c07f
--     - Product Name: Electric Kettle
--     - Product Description: Boil water quickly and efficiently with this stylish electric kettle.
--     - Price: $39.99
--     - Stock Quantity: 25
--     - Brand: BrewMatic
--     - Image: [Link to Image](https://example.com/kettle1.jpg)

-- 30. 
--     - ID: 52c12a66-32a2-4013-83b1-5f8f7b9d13ef
--     - Product Name: Wireless Car Charger
--     - Product Description: Charge your phone wirelessly while on the road with this convenient car charger.
--     - Price: $29.

-- 99
--     - Stock Quantity: 28
--     - Brand: AutoCharge
--     - Image: [Link to Image](https://example.com/carcharger1.jpg)

-- 31. 
--     - ID: f1e9dd64-4450-44b1-8ae6-33d7e8be45e9
--     - Product Name: Bluetooth Beanie Hat
--     - Product Description: Stay warm and enjoy music wirelessly with this cozy and tech-savvy beanie hat.
--     - Price: $39.99
--     - Stock Quantity: 16
--     - Brand: BeanieTunes
--     - Image: [Link to Image](https://example.com/beanie1.jpg)

-- 32. 
--     - ID: 342f181e-79f7-4a7e-b4a2-27d0fd61a3d1
--     - Product Name: Wireless Doorbell
--     - Product Description: Never miss a visitor with this wireless doorbell featuring a range of chimes and easy installation.
--     - Price: $29.99
--     - Stock Quantity: 19
--     - Brand: DoorChime
--     - Image: [Link to Image](https://example.com/doorbell1.jpg)

-- 33. 
--     - ID: cce2ed40-c08c-434f-9857-2c7478e00d5f
--     - Product Name: Portable Monitor
--     - Product Description: Extend your display on the go with this lightweight and portable monitor.
--     - Price: $199.99
--     - Stock Quantity: 12
--     - Brand: ScreenExtend
--     - Image: [Link to Image](https://example.com/monitor1.jpg)

-- 34. 
--     - ID: 13e1df6d-bae6-4344-9f94-7e01c2346934
--     - Product Name: Fitness Resistance Bands Set
--     - Product Description: Strengthen and tone your muscles with this versatile set of resistance bands.
--     - Price: $29.99
--     - Stock Quantity: 21
--     - Brand: FlexFit
--     - Image: [Link to Image](https://example.com/resistancebands1.jpg)

-- 35. 
--     - ID: 8268224f-2518-4e0d-b60a-26b20d40a69f
--     - Product Name: Air Fryer
--     - Product Description: Fry your favorite foods with little to no oil using this innovative air fryer.
--     - Price: $99.99
--     - Stock Quantity: 14
--     - Brand: FryTech
--     - Image: [Link to Image](https://example.com/airfryer1.jpg)

-- 36. 
--     - ID: 6ed738d3-39fb-4e71-9518-0f8bc2931ad4
--     - Product Name: Noise-Canceling Headphones
--     - Product Description: Immerse yourself in your music with these premium noise-canceling headphones.
--     - Price: $199.99
--     - Stock Quantity: 9
--     - Brand: SilentSound
--     - Image: [Link to Image](https://example.com/headphones2.jpg)

-- 37. 
--     - ID: 37d1a3c6-d996-4ea2-98f3-94a05da37b8e
--     - Product Name: Electric Scooter
--     - Product Description: Zip around town with this electric scooter featuring a powerful motor and long battery life.
--     - Price: $299.99
--     - Stock Quantity: 7
--     - Brand

-- : SwiftRide
--     - Image: [Link to Image](https://example.com/scooter1.jpg)

-- 38. 
--     - ID: 9ef1324d-8e71-43ef-96c6-6a38f47300df
--     - Product Name: Portable Bluetooth Speaker
--     - Product Description: Take your music anywhere with this compact and wireless Bluetooth speaker.
--     - Price: $49.99
--     - Stock Quantity: 23
--     - Brand: SoundLink
--     - Image: [Link to Image](https://example.com/speaker3.jpg)

-- 39. 
--     - ID: c315a17d-84f1-4e37-8d89-4908a9c4d47e
--     - Product Name: Virtual Reality Headset
--     - Product Description: Immerse yourself in virtual worlds with this high-quality virtual reality headset.
--     - Price: $149.99
--     - Stock Quantity: 11
--     - Brand: VRXperience
--     - Image: [Link to Image](https://example.com/vrheadset1.jpg)

-- 40. 
--     - ID: 0e3034e9-2d69-447c-8d6b-8a6992a5df57
--     - Product Name: Smart Thermostat
--     - Product Description: Control your home's temperature with precision and energy efficiency using this smart thermostat.
--     - Price: $129.99
--     - Stock Quantity: 15
--     - Brand: SmartTemp
--     - Image: [Link to Image](https://example.com/thermostat1.jpg)
