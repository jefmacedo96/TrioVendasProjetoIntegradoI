# TrioVendasProjetoIntegradoI

Equipe: Antonio Jefferson Ferreira de Macedo, Claudia Sousa Barbosa, Maria Jegirlana dos Santos Silva 

Nome da equipe: TrioVendas (Mudança de nome, pois o antigo nome era MakeTeen) 

Nome do projeto: Teixeira Móveis 

Descrição: O projeto Teixeira Móveis consiste em uma plataforma para venda de Móveis. No site, o visitante poderá ver os produtos oferecidos, assim como a descrição dos mesmos e seu valor. Mas para fazer qualquer compra, o usuário cliente precisará efetuar Login. Se o visitante não possuir um usuário cadastrado, ele deverá realizar o cadastro para realizar a compra, caso contrário, deve logar para poder concluir a compra. Ao inserir um item no carrinho, o usuário pode decidir inserir mais itens, ou pode escolher visualizar itens no carrinho e concluir compra, confirmando os dados de endereço e forma de pagamento (cartão de crédito, débito, boleto). O site contará com um usuário do tipo gerente que deve efetuar login também. Ao efetuar login como gerente, o usuário poderá gerenciar dados dos móveis, podendo inserir, alterar, excluir e visualizar os móveis cadastrados, assim como ver todos os clientes cadastrados e, se necessário, alterar dados dos mesmos ou excluir. Na tela principal, o planejado é que sejam apresentados cards com informações básicas dos produtos e o site possua um catálogo como menu lateral de escolhas de móveis para visualização, por exemplo, se o usuário desejar visualizar móveis destinados para a cozinha.

Modelagem dos dados: 

CLIENTE: 
- Id 
- Nome Completo 
- E-mail 
- CPF 
- Senha 
- Telefone 
- Endereço 
- Cidade 
- Estado 

GERENTE: 
- Id 
- Nome Completo
- E-mail
- CPF
- Senha
- Cargo

PRODUTO:
- Nome
- Descrição
- Número de Série
- Tipo de Produto
- Quantidade

Pedidos:
- ID
- Preço
- Produtos
