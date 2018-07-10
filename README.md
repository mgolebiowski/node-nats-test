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

You need to run [NATS server](https://nats.io/documentation/server/gnatsd-intro/)
```
$ ./path/to/gnatsd --addr 127.0.0.1 --port 4222
```

Run application

```
$ node dist/communcator.js my_id second_id
```

If you want to talk to yourself just run two insances and swap ids:
```
$ node dist/communcator.js foo bar
$ node dist/communcator.js bar foo
```

To run logger with database:
```
$ node dist/logger.js
```