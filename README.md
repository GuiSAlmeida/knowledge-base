# Knowledge Base

doc mongo: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

### knex - query builder
```
npm install -g knex

# cria configuração
knex init

#cria uma migration
knex migrate:make <nome_query>

# executa os metodos UP de todas migrations 
knex migrate:latest

# executa os metodos DOWN de todas migrations 
knex migrate:rollback
```

### Postgres
```
# acessa postgres
psql -U postgres

# lista databases
\l

```

### consign
Gerenciamento das dependencias

### migrations
schema - ddl(sql)
Comandos sql (queries) separadas em arquivos com a lógica em volta, serve também para controlar as evoluções do banco de dados.  
O conceito de `up` e `down` serve para evoluir o banco e poder ter evoluções e rollbacks se preciso.

```js
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('password').notNull()
    table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knew.schema.dropTable('users')
};
```


















```
.
└── knowledge-base
    ├── config
    │   ├── knexfile.js
    │   └── migrations
    │       ├── 20200212111031_create_table.js
    │       └── 20200212113040_blarg.js
    ├── package-lock.json
    └── package.json
```