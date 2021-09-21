# GET /users
Response:
```json
[
  {
    "name": "Daniel Paladino", "email": "daniel@gmail.com", "social": { "instagram": "@paladinodaniel" }
  },
  {
    "name": "Ness", "email": "ness@outlook.com", "social": { "instagram": "@nesskraven" }
  },
  {
    "name": "Johnny", "email": "johnny@hotmail.com", "social": { "instagram": "@johnny.solado" }
  },
  {
    "name": "Sono", "email": "sousono@gmail.com", "social": { "instagram": "@sonoinu2" }
  }
]
```

```json
[
  { "name": "Daniel Paladino" },
  { "name": "Ness" },
  { "name": "Johnny" },
  { "name": "Sono" }
]
```

AWS -> Pay per use: paga por uso.
Tráfego: quantidade de dados (bytes) trafegados na rede.

Overfetching: Trafega mais dados do que o cliente precisa.

O que o GraphQL resolve? Em uma requisição que o frontend realiza de uma API Rest, todos os dados acima serão retornados,
porém se for um caso que precisamos somente do dado "name", o GraphQL atua para que somente esses dados sejam retornados e
evitar um overfetching dos nossos dados, pois se o serviço estiver hospedado em um lugar como a AWS que pagamos por uso, 
pagaremos a mais pelo tráfego de dados a mais que não estamos usando.

yarn init -y
yarn add apollo-server graphql