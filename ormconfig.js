module.exports = {
    "type": "postgres",
    "entities": ["./dist/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./dist/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./dist/shared/infra/typeorm/migrations"
    }
}