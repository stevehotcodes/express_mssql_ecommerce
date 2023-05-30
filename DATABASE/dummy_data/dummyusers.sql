-- password: Password@123
-- ids are uuids


INSERT INTO users (id, firstname, lastname, email, password)
VALUES ('7111ad71-ba10-457d-8231-757611384342', 'Admin', 'Grabia', 'admin@app.com', '$2b$10$xerAO8Um2tQTgE0F59Xcxu8lmPDkhOvYJh/VXZRwQTn.dSI4RY2Cq');

UPDATE users SET role='admin' WHERE email='admin@app.com';

INSERT INTO users (id, firstname, lastname, email, password)
VALUES ('44864c7f-8c79-4277-98bb-e2449f16aaa2', 'Jane', 'Doe', 'jane@example.com', '$2b$10$xerAO8Um2tQTgE0F59Xcxu8lmPDkhOvYJh/VXZRwQTn.dSI4RY2Cq');

INSERT INTO users (id, firstname, lastname, email, password)
VALUES ('7b0001c7-71d9-4cfb-97ec-50fcf83a6a3a', 'Test', 'User', 'test@example.com', '$2b$10$iBOJa.9PlYDbhKaHDMHtrOLFtqnLLU9L7IXRvSlL40kPSwnkm8t0S');

INSERT INTO users (id, firstname, lastname, email, password)
VALUES ('fdb5a8f9-4d49-49ed-ac24-ff84400e18be', 'John', 'Doe', 'john@example.com', '$2b$10$UiWW8MwhN2OKmf.NKYA2XuGLS89q9G.hCCRBV9M3sXNtzsWY1IPa6');
