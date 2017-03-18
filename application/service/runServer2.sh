#!/bin/bash

export M2_HOME=~/apache-maven-3.3.9
export M2=$M2_HOME/bin
export PATH=$M2:$PATH
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk/Contents/Home

echo $JAVA_HOME
echo $M2_HOME
echo $M2
echo $PATH

mvn -DENV=server clean install flyway:migrate jetty:run