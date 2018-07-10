# NATS tests

Start with installing dependencies

```
$ yarn install
```

Create database config by making a database.json file. Use database.json.example.

```json
{
  "host": "url_to_postgres_instance",
  "database": "your_database_name",
  "user": "your_user_name",
  "password": "your_postgres_password"
}
```

To build src files:

```
$ yarn run build
```

Then run broadcaster and receiver:

```
$ node dist/s1.js
$ node dist/s2.js
```