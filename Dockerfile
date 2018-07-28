FROM openjdk:8
EXPOSE 8888
ADD /target/charity-app-0.0.1-SNAPSHOT.jar charity-app-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","charity-app-0.0.1-SNAPSHOT.jar"]
