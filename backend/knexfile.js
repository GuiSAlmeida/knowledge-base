module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user: 'postgres',
    password: 'guidev'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
