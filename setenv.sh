#!/bin/bash

export M2_HOME=~/apache-maven-3.3.9
export M2=$M2_HOME/bin
export PATH=$M2:$PATH
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk/Contents/Home

echo $JAVA_HOME
echo $M2_HOME
echo $M2
echo $PATH

cd ../client

ng build --env=prod

cp -r dist/* ../service/src/main/webapp

cd ../service

mvn -DENV=server clean install flyway:migrate jetty:run

cd ../server 

cp ../service/target/HonuService.war .
mvn clean package -DskipTests=true

git add .
git commit -m "msg"
git push heroku master

