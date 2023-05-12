FROM openjdk:17
EXPOSE 8080
ADD target/inventory-docker.jar inventory-docker.jar
ENTRYPOINT ["java", "-jar", "/inventory-docker.jar"]