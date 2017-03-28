cd ../client

CALL ng build --env=prod

copy -r dist/* ../service/src/main/webapp

cd ../service

CALL mvn -DENV=server clean install flyway:migrate

cd ../server 

copy ../service/target/HonuService.war .
CALL mvn clean package -DskipTests=true

git add .
git commit -m "msg"
git push heroku master