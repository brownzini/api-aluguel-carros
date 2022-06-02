module.exports = {
    "type": "postgres",
    "port": 5432,
    "host": "ec2-54-211-255-161.compute-1.amazonaws.com",
    "username": "lebkkwcevdgwef",
    "password": "1d1de91a795d6cb130d74915d374abd31fc19952bf775db5ead6945adc9e2fea",
    "database": "d7e33mqg5ottr8",
    "entities": ["./dist/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./dist/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./dist/shared/infra/typeorm/migrations"
    }
}