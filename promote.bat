cd ../client

CALL ng build --env=prod

call ant

cd ../service

CALL mvn -DENV=server clean install flyway:migrate
call ant

cd ../server 


CALL mvn clean package -DskipTests=true

git add .
git commit -m "msg"
git push heroku master