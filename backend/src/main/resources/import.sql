INSERT INTO tb_client(name, phone_number, address) VALUES('Jack', '(99) 98723-3281', 'Bairro Jardim Morto, Rua 9 - 3131');
INSERT INTO tb_client_account(client_id, last_modified_date) VALUES(1, now());
INSERT INTO tb_product(description, price) VALUES('Chocolate Amargo 200g', 3.80);
INSERT INTO tb_status(status_id) VALUES('Devendo');
INSERT INTO tb_debt(debt_date, product_quantity, product_id, status_id) VALUES('2023-01-12', 4, 1, 'Devendo');