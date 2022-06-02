module.exports = {
    "type": "postgres",
    "url": "postgres://lebkkwcevdgwef:1d1de91a795d6cb130d74915d374abd31fc19952bf775db5ead6945adc9e2fea@ec2-54-211-255-161.compute-1.amazonaws.com:5432/d7e33mqg5ottr8",
    "entities": ["./dist/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./dist/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./dist/shared/infra/typeorm/migrations"
    }
}