

INSERT INTO tb_client(name, phone_number, address) VALUES('Jack', '(99) 98723-3281', 'Bairro Jardim, Rua 22 - 3131'      );
INSERT INTO tb_client(name, phone_number, address) VALUES('Anny', '(99) 98644-7553', 'Bairro Aurora, Rua 24 - 6414'      );
INSERT INTO tb_client(name, phone_number, address) VALUES('Lucia', '(99) 99457-9145', 'Bairro Bela Noite, Rua 9 - 3131'  );
INSERT INTO tb_client(name, phone_number, address) VALUES('Apollo', '(99) 98644-7553', 'Bairro Seraphim, Rua 4 - 1754'   );
INSERT INTO tb_client(name, phone_number, address) VALUES('Nadia', '(99) 95788-1534', 'Bairro Bela Noite, Rua 8 - 3119'  );
INSERT INTO tb_client(name, phone_number, address) VALUES('Anton', '(99) 96764-2463', 'Bairro Seraphim, Rua 2 - 1736'    );
INSERT INTO tb_client(name, phone_number, address) VALUES('Helena', '(99) 99507-8355', 'Bairro Novo Norte, Rua 45 - 7154');
INSERT INTO tb_client(name, phone_number, address) VALUES('Wallace', '(99) 93002-6043', 'Bairro Aurora, Rua 30 - 6894'   );

INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(1, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(2, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(3, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(4, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(5, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(6, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(7, 0, 0.0, 0, 0.0);
INSERT INTO tb_client_account(client_id, debt_quantity, debt_amount, paid_quantity, paid_amount) VALUES(8, 0, 0.0, 0, 0.0);

INSERT INTO tb_product (description, price) VALUES ('Chocolate Amargo 200g', 3.80);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Fanta Laranja Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Fanta Uva Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Refrigerante Kuat Mini Pet 250ml', 1.75);
INSERT INTO tb_product (description, price) VALUES ('Linguíça Toscana P/Churrasco Friato Pacote 5kg', 21.90);
INSERT INTO tb_product (description, price) VALUES ('Iorgute Activia Líquido Prc Ameixa Danone 150g', 2.95);
INSERT INTO tb_product (description, price) VALUES ('Iorgute Activia Líquido Prc Morango Danone 150g', 2.95);
INSERT INTO tb_product (description, price) VALUES ('Arroz Carvalho 5kg', 23.50);
INSERT INTO tb_product (description, price) VALUES ('Leite Piracanjuba Desnatado Líquido 1l', 9.90);
INSERT INTO tb_product (description, price) VALUES ('Café Santa Clara 250g', 9.90);
INSERT INTO tb_product (description, price) VALUES ('Óleo de Milho Sinhá 1l', 3.30);
INSERT INTO tb_product (description, price) VALUES ('Feijâo Preto Mayara 1kg', 9.80);
INSERT INTO tb_product (description, price) VALUES ('Sal Cavalinho 1kg', 1.0);


INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-01-12', 4, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-01-12', 2, 0.0, 4);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-01-05', 1, 0.0, 9);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(6, '2024-01-05', 1, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(2, '2024-01-10', 8, 0.0, 5);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-01-05', 5, 0.0, 3);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(2, '2024-01-20', 2, 0.0, 6);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(6, '2024-02-02', 3, 0.0, 11);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-02-05', 2, 0.0, 7);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-02-13', 9, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(4, '2024-02-16', 14, 0.0, 8);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(2, '2024-01-05', 1, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-01-20', 6, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-02-02', 5, 0.0, 4);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-02-05', 2, 0.0, 6);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(8, '2024-02-13', 4, 0.0, 5);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(6, '2024-02-16', 2, 0.0, 8);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(4, '2024-02-16', 6, 0.0, 3);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(4, '2024-02-16', 2, 0.0, 9);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(4, '2024-03-07', 5, 0.0, 7);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(4, '2024-03-07', 4, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-02-05', 4, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-04-12', 6, 0.0, 7);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-04-12', 9, 0.0, 4);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-05-20', 3, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(5, '2024-05-30', 2, 0.0, 12);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(6, '2024-02-02', 2, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(6, '2024-02-16', 7, 0.0, 5);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-02-13', 3, 0.0, 10);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-01-20', 6, 0.0, 6);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-03-05', 1, 0.0, 8);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(7, '2024-04-30', 9, 0.0, 3);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(8, '2024-02-13', 1, 0.0, 4);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(8, '2024-02-13', 2, 0.0, 10);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(8, '2024-03-08', 4, 0.0, 6);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(8, '2024-04-30', 5, 0.0, 7);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-01-12', 1, 0.0, 11);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-02-22', 6, 0.0, 7);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-04-13', 8, 0.0, 4);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(1, '2024-04-13', 4, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(2, '2024-01-10', 6, 0.0, 1);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(2, '2024-01-20', 3, 0.0, 11);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-01-05', 5, 0.0, 9);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-02-05', 4, 0.0, 2);
INSERT INTO tb_debt(client_id, debt_date, product_quantity, product_amount,  product_id) VALUES(3, '2024-06-25', 3, 0.0, 3);




INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(5, 2, '2024-04-01', 'PIX', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(1, 4, '2024-04-04', 'Cartão de Crédito', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(1, 2, '2024-04-04', 'Cartão de Crédito', 1, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(1, 8, '2024-04-04', 'Cartão de Crédito', 4, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(1, 3, '2024-04-12', 'Cartão de Crédito', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(1, 6, '2024-04-12', 'Cartão de Crédito', 6, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(2, 5, '2024-04-05', 'Dinheiro', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(7, 6, '2024-04-10', 'PIX', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(8, 3, '2024-04-12', 'Cartão de Crédito', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(6, 1, '2024-04-14', 'PIX', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(8, 7, '2024-04-10', 'PIX', 3, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(4, 9, '2024-04-14', 'Dinheiro', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(3, 5, '2024-04-14', 'PIX', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(4, 2, '2024-04-10', 'PIX', 3, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(5, 5, '2024-04-12', 'Cartão de Crédito', 4, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(6, 4, '2024-04-14', 'Dinheiro', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(3, 2, '2024-04-01', 'PIX', 4, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(6, 5, '2024-04-05', 'Dinheiro', 6, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(7, 6, '2024-04-10', 'PIX', 2, 0.0);
INSERT INTO tb_paid(client_id, product_id, payment_date, payment_type, product_quantity, product_amount) VALUES(4, 3, '2024-04-12', 'Cartão de Crédito', 3, 0.0);

