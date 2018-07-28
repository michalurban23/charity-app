#!/bin/bash
cd src/main/angular
ng build
cd ../../../
mvn clean
mvn compile
mvn spring-boot:run