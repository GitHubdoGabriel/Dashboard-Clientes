# Dashboard de Clientes

## 4. Desafio
Queremos construir um dashboard de clientes e empreendimentos para termos uma visão estratégica do nosso portfólio. Mas, para alcançarmos nosso objetivo, precisamos resolver alguns BUGs e evoluir um pouco mais nossa Api e App.

### 4.1. Jogo dos 7 erros

Nosso dashboard **não está funcionando.** Para começarmos a melhorá-lo, precisamos primeiro fazê-lo funcionar. Existem _7 erros_ em nosso **App** e cabe a você descobrir o que está acontecendo.

PS: **Corrija, anote os erros e mostre a lista no corpo do email de resposta ao nosso contato**.

1- Acrescentar o ngOnInit em ClientComponent;
2- Navbar estava escrito errado no templateUrl do componente NavBar;
3- EnterpriseModule não estava declarado em pagesModule;
4- Client não possuía rota declarada em app-routing; 
5- O arquivo navbar.module.ts estava escrito de forma incorreta "navebar.module.ts"
6- Aporta da API estava errada(3001) em environment.ts
7- O ClientService não estava declarado nos providers do client.module.ts


### 4.2. Novas Features
- **Na página de Clientes, o usuário deve visualizar os resultados na sua tela**.
#  - Requisitar informações da api;
#  - Retornar e exibir os campos: _id, nome, imagem, quantidade de empreendimentos e quantidade de imóveis/unidades de cada cliente.
#  - Os itens poderão ser exibidos em lista, cards, tabela ou qualquer componente que você deseje.
    
- **Na página de Clientes, o usuário deve poder pesquisar por nome do cliente e ver os resultados de acordo com sua pesquisa.**
#  - O filtro deve ser realizado somente no frontend.
#  - O filtro deve ser aplicado no evento de digitação do usuário.
    
- **Na página de Clientes, o usuário deverá poder visualizar alguns totalizadores:**
#  - Requisitar informações da api;
# - Retornar e exibir somente os totais de: Clientes, Empreendimentos e Imóveis/Unidades;
    
- **Na página de Clientes, o usuário deverá poder selecionar/clicar em um item e ver seus detalhes:**
#  - Requisitar informações da api;
#  - Retornar somente: _\_id, imagem, nome, total de empreendimentos e total de imóveis/unidades_;
#  - Exibir as informações obtidas;

- **Na página de Detalhes do Cliente, o usuário deverá poder ver todos os empreendimentos referentes a ele:**
#  - Requisitar informações da api;
#  - Retornar e exibir somente: _\_id, imagem, nome e total de Imóveis/Unidades_;

### 4.3. Docker
Se você chegou até aqui, parabéns! Estamos quase terminando. Agora precisamos apenas garantir que sua api rodará em qualquer lugar usando Docker, mas existem algumas premissas:
# - Você **deve usar** Docker Compose.
# - Seu docker-compose.yml deve sincronizar/mapear as alterações do host com o volume do container.
