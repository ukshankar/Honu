cd ../client

CALL ng build --env=prod

call ant

cd ../service

CALL mvn -DENV=server clean install flyway:migrate
call ant

cd ../server 

git add .
CALL mvn clean package -DskipTests=true


git commit -m "msg"
git push heroku master