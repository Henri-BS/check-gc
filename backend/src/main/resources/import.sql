

INSERT INTO tb_client(name, phone_number, address) VALUES('Jack', '(99) 98723-3281', 'Bairro Jardim, Rua 22 - 3131');
INSERT INTO tb_client(name, phone_number, address) VALUES('Anny', '(99) 98644-7553', 'Bairro Aurora, Rua 24 - 6414');
INSERT INTO tb_client(name, phone_number, address) VALUES('Lucia', '(99) 99457-9145', 'Bairro Bela Noite, Rua 9 - 3131');
INSERT INTO tb_client(name, phone_number, address) VALUES('Apollo', '(99) 98644-7553', 'Bairro Seraphim, Rua 4 - 1754');
INSERT INTO tb_client(name, phone_number, address) VALUES('Nadia', '(99) 95788-1534', 'Bairro Bela Noite, Rua 8 - 3119');
INSERT INTO tb_client(name, phone_number, address) VALUES('Anton', '(99) 96764-2463', 'Bairro Seraphim, Rua 2 - 1736');
INSERT INTO tb_client(name, phone_number, address) VALUES('Helena', '(99) 99507-8355', 'Bairro Novo Norte, Rua 45 - 7154');
INSERT INTO tb_client(name, phone_number, address) VALUES('Wallace', '(99) 93002-6043', 'Bairro Aurora, Rua 30 - 6894');

INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(1, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(2, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(3, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(4, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(5, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(6, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(7, 0, 0.0, now());
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, last_modified_date) VALUES(8, 0, 0.0, now());

INSERT INTO tb_product (description, price) VALUES ('Chocolate Amargo 200g', 3.80);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Fanta Laranja Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Fanta Uva Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Kuat Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Lingu????a Toscana P/Churrasco Friato Pacote 5kg', 21.90);
INSERT INTO tb_product (description, price) VALUES ('Iorgute Activia L??quido Prc Ameixa Danone 150g', 2.95);
INSERT INTO tb_product (description, price) VALUES ('Iorgute Activia L??quido Prc Morango Danone 150g', 2.95);
INSERT INTO tb_product (description, price) VALUES ('Arroz Carvalho 5kg', 23.50);
INSERT INTO tb_product (description, price) VALUES ('Leite Piracanjuba Desnatado L??quido 1l', 9.90);
INSERT INTO tb_product (description, price) VALUES ('Caf?? Santa Clara 250g', 9.90);
INSERT INTO tb_product (description, price) VALUES ('??leo de Milho Sinh?? 1l', 3.30);
INSERT INTO tb_product (description, price) VALUES ('Feij??o Preto Mayara 1kg', 9.80);
INSERT INTO tb_product (description, price) VALUES ('Sal Cavalinho 1kg', 1.0);


INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(1, '2023-01-12', 4, 0.0, 1, 'Devendo');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(1, '2023-01-12', 2, 0.0, 4, 'Devendo');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(1, '2023-01-05', 1, 0.0, 9, 'Pago');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(6, '2023-01-05', 1, 0.0, 1, 'Pago');

INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(2, '2023-01-10', 8, 0.0, 5, 'Devendo');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(3, '2023-01-05', 5, 0.0, 3, 'Pago');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(2, '2023-01-20', 2, 0.0, 6, 'Pago');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(6, '2023-02-02', 3, 0.0, 11, 'Pago');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(5, '2023-02-05', 2, 0.0, 7, 'Devendo');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(7, '2023-02-13', 9, 0.0, 2, 'Devendo');
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id, status) VALUES(4, '2023-02-16', 14, 0.0, 8, 'Pago');

