-- id INT IDENTITY(1,1) PRIMARY KEY,
-- imageURL VARCHAR (200) NOT NULL UNIQUE,
-- isMain BIT DEFAULT 0,
-- productID VARCHAR (200) FOREIGN KEY REFERENCES products(id)
-- ON DELETE CASCADE

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://img.ebdcdn.com/product/front/white/pl6605.jpg?im=Resize,width=700,height=350,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0', '10d5ad36-6936-4666-ad04-040bb45316f0', 1); -- Eye Glasses main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/ffc16f9e-0fde-4ebc-9e40-66c402a4f572', '5abcc5af-7657-497d-b0dc-8103b2dIdff43', 1); -- iPhone 15 main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/c-series/c2423h/media-gallery/monitor-c2423h-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=4072&hei=3336&qlt=100,1&resMode=sharp2&size=4072,3336&chrss=full&imwidth=5000', '932fa85c-2751-4aaf-abd7-aaa36113115a', 1); -- 24" Dell monitor main image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://kensoko.com/desc_images/4069_kings-collection-hard-shell-4-wheels-suitcase.jpg', 'a4453f8b-2304-49f4-9018-c4dc573ef1e2', 1); -- suitcase main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673202', 'c1e2da16-68ca-4625-b275-6445c7a0fd20', 1); -- 16" MacBook Pro main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://img.freepik.com/premium-photo/man-yellow-t-shirt-space-your-logo-design-mockup-print_93200-4095.jpg', 'd5c00990-0924-4f09-a8e0-def4a5b022ad', 1); -- yellow tshirt main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://cdn.shopify.com/s/files/1/2421/3791/products/TimeMasterWebsite-4_600x.jpg?v=1660711723', '33a9cb45-2d24-4bc7-9e47-6be4d7b32135', 1); -- elegant watch main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://soundwave.ph/wp-content/uploads/2020/08/Listen-Wireless-300x300.jpg', '5b8834f0-7433-4b3e-b430-41c683ee9356', 1); -- SoundWave wireless headphones main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://www.audio-technica.com/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at-lp60xspbt_06_1_1.png', '8de70bdc-23a7-45e7-9b1b-62495a271dd2', 1); -- AudioTech Portable Bluetooth Speaker main Image

INSERT INTO images (imageURL, productID, isMain)
VALUES ('https://backend.central.co.th/media/catalog/product/4/8/48ab54de8ed9a57037f91c3c2b11a8e16a2222e9_mkp1488067.jpegdummy.jpg', 'bdd2992e-1ee0-4f1d-9981-d8c44fbc94e2', 1); -- TechGear laptop backpack



INSERT INTO images (imageURL, productID, isMain)
VALUES 
('https://static.vecteezy.com/system/resources/previews/004/210/755/original/smartphone-tech-gadget-free-vector.jpg', '4ae3b477-7a32-4be9-a363-5988bc9daef4', 1),
('https://www.nauta.com/media/catalog/product/cache/e5d0dc491cad592eb514ea846d742a9e/1/8/1805000693_1805000694.jpg', '5984df47-8c7d-4a64-982a-68e1b2d7a1d3', 1),
('https://cdn.shopify.com/s/files/1/0740/6265/9880/products/image_85248963-ccd8-4a24-b308-696a284b98c2.jpg?v=1681352287&width=1445', '9a91c431-8997-4dbb-9c3d-7c66e50e32a6', 1),
('https://target.scene7.com/is/image/Target/GUEST_0b14f030-3f7f-457e-8d5a-0f67c9b99861', 'a79d1fe5-8851-4c9e-91f4-4a2a2dc273f6', 1),
('https://cdn.shopify.com/s/files/1/0668/4747/3939/products/PhotoRoom_20221024_184120.jpg?v=1666736356&width=1946', 'c7239474-0a4d-4e8a-80e1-829d0cda2e1c', 1),
('https://i.ytimg.com/vi/Pb5vet4ec7o/maxresdefault.jpg', 'f7601de0-bbd6-4cc3-8e6f-62bce487a349', 1),
('https://lda-audiotech.com/wp-content/uploads/2017/01/speaker-CH-42TNs02.png', '620ca681-6377-49f1-9424-7c4d28bb1b13', 1),
('https://cdn.shopify.com/s/files/1/0526/6623/7082/products/product-image-1976673464-removebg-preview.png?v=1664988389', 'e85c1539-cbd6-4dbf-8b1f-c1a8434be19f', 1),
('https://cdn.shopify.com/s/files/1/0526/6623/7082/products/product-image-1976673464-removebg-preview.png?v=1664988389', '41e37abf-6ab7-47d6-96d9-d0f1a1378be0', 1),
('https://m.media-amazon.com/images/I/61kzbZSmR0L._SY450_.jpg', '64a2a85e-9e3c-4686-bf3d-9252a1c23806', 1),
('https://netlinkict.com/wp-content/uploads/2018/12/HG323RGW-.jpg', '3f244daf-bf6b-456b-8886-5d30500ce7a7', 1),
('https://cdn.shopify.com/s/files/1/1603/9553/products/PowerPro10Kwhite_1200x1200.jpg?v=1653716498', '5a44a2db-4d33-4083-92a9-26e2824b6183', 1),
('https://n2.sdlcdn.com/imgs/h/4/e/SOUND-WAVE-Bluetooth-Headset-Black-SDL862931885-1-8feca.jpg', '62a4181c-4d3c-4e2e-bff6-155dbfdac2e2', 1),
('https://healthtecki.com/wp-content/uploads/2023/03/Group-149.png', '1b36a0a3-486f-4f11-8e23-1f1937b1184e', 1),
('https://cdn.sounddevices.com/wp-content/uploads/2019/03/acc_speedrive.jpg', '1316e9bc-1ed1-4ff7-8c77-167a01de3c94', 1),
('https://cdn.shopify.com/s/files/1/0343/9404/6603/products/4---CNS-CMSW16B_800x.png?v=1582713217', '892d23a9-5ab5-4d81-99d0-3a3c206e5258', 1),
('https://gamezone.ge/images/detailed/9/1122.png', 'b57da7b2-47c2-4371-8e59-f2145e5ac02e', 1),
('https://www.pascogifts.com/files/cache/medium/files/10818600-57bbfb11bf199.jpg.webp', '4d02f1dd-140b-4de6-b7cd-1db13e12d455', 1),
('https://i.ytimg.com/vi/Cb39VF-Nl78/maxresdefault.jpg', '19b6fb59-d759-43ed-8c4a-48e5e08c24c3', 1),
('https://www.cnet.com/a/img/resize/918aaa4f351a18b23eb8458c36da7d31d12045b9/hub/2019/12/11/88aefeb3-19e9-4ca5-b4c4-40f5990bb3a8/arlo-video-doorbell-product-photos-1.jpg?auto=webp', '3e5c5004-3d89-4e6e-8aef-b000ca4b700a', 1),
('https://www.cinetech.com.au/images/digproj.jpg', '0dcfd364-2e4a-4f83-8d18-bae67bc9a839', 1),
('https://ae01.alicdn.com/kf/U0b22a367883a4a239dda82aeffbc0415O/External-Battery-with-wireless-charging-Momax-Q-Power-Pro-8000-mAh-Black.jpg', 'bf80a1b2-8992-4c1a-aaf9-bb74bc0f82be', 1),
('https://m.media-amazon.com/images/I/31EMHG79KCL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg', '12b6a671-0e43-4327-8f15-78239e89105b6', 1),
('https://m.media-amazon.com/images/I/61g+WG+SHeL._SL1500_.jpg', '68ebe440-6fc5-4772-938d-42c05dd3cfc5', 1),
('https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ZchUs5n1L._SL1500_.jpg', 'ddb5af6a-d5d3-4eaf-b42a-65efcc7b3a8e', 1),
('https://i5.walmartimages.com/asr/c341aa1f-70eb-4498-bca0-5e6e07872b0a.4edbeed44b22a23647317a2d92c52ca0.jpeg', '6fb20b96-1a52-41de-924b-37c58e67e797', 1),
('https://i.ibb.co/JsKLzmC/IMAGE-1671683180.webp', '2ad6b35c-0c5a-4a40-b0e4-55ff69789d1d', 1),
('https://jcpchub.com/wp-content/uploads/2020/08/keytecg-k-516-led-rgb-gaming-keyboard-mouse-combo-plain-1-1.jpg', '19c89c37-5e18-421e-933f-c0eb7bbdca91', 1),
('https://www.zdnet.com/a/img/resize/3d3b60ed78e598e2c3deea37c4baf76bf93ac475/2022/07/15/84f276ba-20b0-4882-b007-8bcebe04f381/smartthings1.jpg?auto=webp&fit=crop&height=900&width=1200', '2c5b3d50-4b0c-4176-8d7c-1350f8a5f142', 1),
('https://i5.walmartimages.com/asr/668a740e-b819-49b3-af05-51e29c45f317.b317e2b7f869e291cb0a77d89c657427.jpeg', 'a5ee55b5-128b-41b3-959a-6c24951b1ee1', 1),
('https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M6w2t4XfL._AC_SL1496_.jpg', '51a58794-5c8a-4a1e-8359-d12b10fc9a59', 1),
('https://cdnprod.mafretailproxy.com/sys-master-root/h7e/hf4/29515071946782/174560_main.jpg_480Wx480H', 'b8902e36-79ff-4e45-ba14-8b28a8d1a142', 1),
('https://cdn.audiotechnology.com.au/wp-content/uploads/2019/03/DW-20BR_P0C9S_Rear_L_web.jpg', 'd0ef1f76-460f-4b8b-bec3-14299c640b40', 1),
('https://xiaomi-store.co.ke/wp-content/uploads/2021/09/car-charger.jpg', '0345a929-251c-4cfd-bc95-5723f0f45067', 1),
('https://boomspeaker.com/wp-content/uploads/2020/04/Music-Hat-Bluetooth-Beanie-Instructions.jpg', 'f1e9dd64-4450-44b1-8ae6-33d7e8be45e9', 1),
('https://m.media-amazon.com/images/I/71lWIwumYkL._AC_UF894,1000_QL80_.jpg', '342f181e-79f7-4a7e-b4a2-27d0fd61a3d1', 1),
('https://cdn.shopify.com/s/files/1/0288/0353/0804/products/xebec-tri-screen-2-141986.png?v=1667842625', 'cce2ed40-c08c-434f-9857-2c7478e00d5f', 1),
('https://m.media-amazon.com/images/I/612V81VXC-L._AC_SY450_.jpg', '13e1df6d-bae6-4344-9f94-7e01c2346934', 1),
('https://cdn.shopify.com/s/files/1/0173/8181/8422/products/DCAF755AQ_A__1.jpg?v=1668544101&width=1946', '8268224f-2518-4e0d-b60a-26b20d40a69f', 1),
('https://m.media-amazon.com/images/I/71pBL26CdPL._AC_UF894,1000_QL80_.jpg', 'f9b5a7ef-3b39-4e7e-83a4-efc1f5a50b9e', 1),
('https://m.media-amazon.com/images/I/51Omsg6f1AL.jpg', '72241761-7036-4b89-b56b-6e93ab1f1ae3', 1),
('https://images.prod.hbh-woolacotts.co.uk/unsafe/SOUNDLINK-3.jpg', '9ef1324d-8e71-43ef-96c6-6a38f47300df', 1),
('https://pbs.twimg.com/media/DLO274rVwAAZdaq?format=jpg&name=large', 'c315a17d-84f1-4e37-8d89-4908a9c4d47e', 1),
('https://jacksonsystems.com/wp-content/uploads/2021/06/9662.jpg', '0e3034e9-2d69-447c-8d6b-8a6992a5df57', 1);