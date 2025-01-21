
# Check-GC
Check-GC é uma aplicação completa para controle de clientes e vendas, idealizada para otimizar a gestão. 
Com uma interface simples e intuitiva, Check-GC integra três funcionalidades principais:
- Cadastro de Clientes: Permite registrar e gerenciar informações detalhadas dos clientes, como nome, contato, endereço e histórico de dívidas e pagamentos. Facilita o acompanhamento da movimentação de compras dos clientes.
- Gerenciamento de Dívidas: Possibilita a criação e o monitoramento de débitos, possibilitando a visualização fácil das dívidas de cada cliente. Inclui recursos para estipular prazos de pagamento e visualizar os relatórios de débitos pendentes.
- Registro de Pagamentos: Facilita o registro de todos os pagamentos realizados por clientes, seja em dinheiro, cartão de crédito, débito, boleto ou PIX. 

## Menu Inicial
No menu inicial ddo sistema apresenta um painel com os dados estatísticos gerais relacionados as dícvidas pendentes e pagas dos clientes, 
contendo informações como: Valor Total das Dívidas, Quantidade de Dívidas e a Maior Dívida, sendo que esses dados se subdividem em dívidas paga e pendentes.
também é possível ver uma prévia das listas de clientes, produtos, dívidas pendentes e dívidas pagas mais recentes.

![Menu](https://github.com/Henri-BS/check-gc/blob/main/images/menu.jpeg)

## Adição de Conteúdo

Na página de cada listagem é possível adicionar do um novos conteúdo clicando no botão para adicionar no canto superior esquerdo 
Para adicionar um nova contéudo basta preencher os dados exigidos no formulário e salvar, é possível adicionar clientes, produtos, dívidas pendentes e dívidas pagas.
Após ser adicionado é possível ver a nova adição em sua lista específica.

- ### exemplo de adição de um novo cliente
![Adicionar cliente](https://github.com/Henri-BS/check-gc/blob/main/images/add.jpeg)

## Listas
As listas podem ser acessada através do menu de navegação, sendo possível selecionar listagens de clientes, dívidas, pagamentos e produtos. 
As lista possuem um sistema de paginação que permite a visualização através de páginas que podem ser manipuladas através do botões de página, 
Também é possível  fazer a pesquisa e filtragem de de conteúdo de acordo com seus atributos específicos.

- ### lista de clientes 
![Lista de cliente](https://github.com/Henri-BS/check-gc/blob/main/images/client_list.jpeg)

<br/>

- ### lista de dívidas pendentes
![Lista de dívidas pendentes](https://github.com/Henri-BS/check-gc/blob/main/images/debt_list.jpeg)

<br/>

- ### lista dos registros de pagamentos
![Lista de pagamentos](https://github.com/Henri-BS/check-gc/blob/main/images/paid_list.jpeg)

<br/>

- ### lista de produtos
![Lista de produtos](https://github.com/Henri-BS/check-gc/blob/main/images/product_list.jpeg)

<br/>


## Perfis

- ### perfil do cliente
Ao escolher um cliente na lista é possível visualizar o seu perfil completo contendo as informações como:
nome, endereço, contato, quantidade de dívidas pendentes, valor total das dívidas pendentes, quantidade de dívidas pendentes e valor total das dívidas pendentes.
Ainda no perfil do cliente é possível acessar uma tabela com as dívidas pendentes e pagas especificando data, produto, quantidade e valor; 
também há tabelas com as dívidas pendentes e pagas por datas contendo a data, quantidade total de unidades de produtos e o valor total dos produtos.
Além da visualização de dado, pode-se editar as informações dos clientes cadastrados, bem como, também é possível deletar o cliente.

![Perfil do cliente](https://github.com/Henri-BS/check-gc/blob/main/images/client_profile.jpeg)


- ### perfil das dívidas pendentes
Ao escolher uma das dívidas pendentes na lista é possível visualizar o seu perfil completo contendo as informações como:
cliente em dívida, data da compra, quantidade de dias devendo, produto solicitado, quantidade do produto solicitado e o valor total da compra.
Ainda no perfil da dívida é possível acessar uma lista com as demais dívidas pendentes relacionadas a mesma data;
Além da visualização de dado, pode-se editar as informações das dívidas cadastrados, bem como, também é possível deletar a dívida.
Uma dívida pendente também pode ser atualizada para paga e com isso irá transferir alguns dados par ao novo registro.

![Perfil das dívidas pendentes](https://github.com/Henri-BS/check-gc/blob/main/images/debt_profile.jpeg)

- ### perfil do registro de pagamentos
Ao escolher um registro de pagamento na lista é possível visualizar o seu perfil completo contendo as informações como:
cliente pagante, data do pagamento, produto solicitado, quantidade do produto solicitado, valor total e a forma de pagamento da compra.
Ainda no perfil da pagamento é possível acessar uma lista com os demais pagamentos relacionados a mesma data.
Além da visualização de dados, pode-se editar as informações do pagamento registrados, bem como, também é possível deletar o pagamento. 

![Perfil do pagamento](https://github.com/Henri-BS/check-gc/blob/main/images/paid_profile.jpeg)

- ### perfil dos produtos
Ao escolher um produto na lista é possível visualizar o seu perfil completo contendo as informações como:
nome do produto e preço.
Ainda no perfil da pagamento é possível acessar uma lista com os pagamentos que estão relacionados ao produto.
Além da visualização de dados, pode-se editar as informações do produto, bem como, também é possível deletar o produto.

![Perfil do produto](https://github.com/Henri-BS/check-gc/blob/main/images/product_profile.jpeg)
