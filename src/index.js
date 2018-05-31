const fs = require("fs");






function generateProject(project) {
    console.log(project.description);
    let mainDir = project.description.title.toLowerCase()

    mkDir(mainDir);
    mkDir(`${mainDir}/front`);
    mkDir(`${mainDir}/src`);
    mkDir(`${mainDir}/src/main`);
    mkDir(`${mainDir}/src/main/resources`);
    mkDir(`${mainDir}/src/main/resources/static`);
    mkDir(`${mainDir}/src/main/java`);
    let java = `${mainDir}/src/main/java`;
    project.description.softwareHouseDomain.toLowerCase().split('.').reverse().forEach(element => {
        java += `/${element}`;
        mkDir(java);
    });
    java += `/projects`;
    mkDir(java);
    java += `/${project.description.title.toLowerCase()}backend`;
    mkDir(java);
    mkDir(`${java}/api`);
    mkDir(`${java}/bootstrap`);
    mkDir(`${java}/configuration`);
    mkDir(`${java}/controllers`);
    mkDir(`${java}/domain`);
    mkDir(`${java}/repository`);
    mkDir(`${java}/service`);
    geraPomXML(project, mainDir);

    geraApplicationDevProperties(project, mainDir);
    geraApplicationProdProperties(project, mainDir);
    geraApplicationProperties(project, mainDir);
    geraIndexHtml(project, mainDir);

    geraApplication(project, java);

    geraDomain(project, `${java}`);
}

function mkDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function mainPackage(project) {
    let package = "";
    project.description.softwareHouseDomain.toLowerCase().split('.').reverse().forEach(element => {
        package += `.${element}`;

    });
    package = package.substr(1);
    return package;

}

function firstUp(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
}
function geraExemplo(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend;
    `
    fs.writeFileSync(`${path}/exemplo.exx`, src, `utf8`);
}


function geraDomain(project, path) {
    geraEnums(project, path);
    geraEntities(project, path);
}

function geraEnums(project, path) {
    Object.keys(project.enumeratedTypes).forEach(en => {
        geraEnum(project, en, project.enumeratedTypes[en], path)
    });
}

function geraEnum(project, name, data, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain;
    
    public enum ${firstUp(name)} {
        ${data.values.reduce((p, v) => `${p}${v.value}("${v.description}"),`, "")}
        ENUMDESCRIPTION("${data.description}");
    
        private String description;
    
        ${firstUp(name)}(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    `;
    fs.writeFileSync(`${path}/domain/${firstUp(name)}.java`, src, `utf8`);
}



function geraEntities(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraEntitie(project, p, e, project.entities[p][e], path);
        });
    });
}

function geraEntitie(project, p, e, data, path) {
    if (p === 'mainPackage') {
        p = '';
    }
    else {
        mkDir(`${path}/domain/${p}`)
        p = '.' + p;

    }
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain${p};
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import java.time.ZonedDateTime;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "${e.toLowerCase()}")
@Audited
public class ${firstUp(e)} extends BaseEntity {

${Object.keys(data.fields).reduce((a, field) =>
            `${a}    @Column(name = "${field.toLowerCase()}")
    private ${data.fields[field].type} ${field};
`, "")}

    public ${firstUp(e)}(){

    }

    ${Object.keys(data.fields).reduce((a, field) => `${a}public ${data.fields[field].type} get${firstUp(field)}(){
        return ${field};
    }
           
    public void set${firstUp(field)}(${data.fields[field].type} ${field}){
        this.${field}=${field};
    }

    public ${firstUp(e)} ${field}(${data.fields[field].type} ${field}) {
        this.${field} = ${field};
        return this;
    }

    `, ""
        )}
}`;
    fs.writeFileSync(`${path}/domain/${p.substr(1)}/${firstUp(e)}.java`, src, `utf8`);

}



function geraApplication(project, path) {

    let src = `package ${mainPackage(project)
        }.projects.${project.description.title.toLowerCase()}backend;

import br.com.munif.framework.vicente.domain.BaseEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }
} `;
    fs.writeFileSync(`${path}/BackEndApplication.java`, src, `utf8`);
}

function geraPomXML(project, path) {
    let src = `<?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
    
        <groupId>${mainPackage(project)}.projects</groupId>
        <artifactId>${project.description.title.toLowerCase()}backend</artifactId>
        <version>0.0.1-SNAPSHOT</version>
        <packaging>jar</packaging>
    
        <name>${project.description.title.toLowerCase()}backend</name>
        <description>Backend do ${project.description.title}</description>
        <properties>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
            <java.version>1.8</java.version>
            <vicente.version>0.12.0-SNAPSHOT</vicente.version>
            <hibernate.version>5.2.13.Final</hibernate.version>
        </properties>
    
    
        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>1.5.10.RELEASE</version>
            <relativePath/> <!-- lookup parent from repository -->
        </parent>
    
    
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa</artifactId>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
    
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-devtools</artifactId>
                <scope>runtime</scope>
            </dependency>
            <dependency>
                <groupId>com.h2database</groupId>
                <artifactId>h2</artifactId>
                <scope>runtime</scope>
            </dependency>
            <dependency>
                <groupId>com.microsoft.sqlserver</groupId>
                <artifactId>mssql-jdbc</artifactId>
                <scope>runtime</scope>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <scope>runtime</scope>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-test</artifactId>
                <scope>test</scope>
            </dependency>
                    
            <dependency>
                <groupId>br.com.munif.framework.vicente</groupId>
                <artifactId>core</artifactId>
                <version>\${vicente.version}</version>
            </dependency>
            <dependency>
                <groupId>br.com.munif.framework.vicente</groupId>
                <artifactId>domain</artifactId>
                <version>\${vicente.version}</version>
            </dependency>
            <dependency>
                <groupId>br.com.munif.framework.vicente</groupId>
                <artifactId>application</artifactId>
                <version>\${vicente.version}</version>
            </dependency>
            <dependency>
                <groupId>br.com.munif.framework.vicente</groupId>
                <artifactId>api</artifactId>
                <version>\${vicente.version}</version>
            </dependency>
            <dependency>
                <groupId>br.com.munif.framework.vicente</groupId>
                <artifactId>security</artifactId>
                <version>\${vicente.version}</version>
            </dependency>
    
            <dependency>
                <groupId>com.fasterxml.jackson.datatype</groupId>
                <artifactId>jackson-datatype-jsr310</artifactId>
                <version>2.9.4</version>
                <type>jar</type>
            </dependency>
        </dependencies>
    
        <build>
            <defaultGoal>spring-boot:run</defaultGoal>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                    <configuration>>
                        <executable>true</executable>
                    </configuration>
                </plugin>
            </plugins>
        </build>
        <profiles>
            <profile>
                <id>dev</id>
                <activation>
                    <activeByDefault>true</activeByDefault>
                </activation>
                <dependencies>
                    <dependency>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-starter-undertow</artifactId>
                    </dependency>
                    <dependency>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-devtools</artifactId>
                        <optional>true</optional>
                    </dependency>
                </dependencies>
            </profile>
        </profiles>
    
    
    </project>
    `;
    fs.writeFileSync(`${path}/pom.xml`, src, `utf8`);
}


function geraApplicationProperties(project, path) {
    let src = `spring.profiles.active=dev
    #logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/empleadosapitest?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    spring.jpa.hibernate.ddl-auto=create-drop
    #logging.level.org.hibernate.SQL=debug
    `;
    fs.writeFileSync(`${path}/src/main/resources/application.properties`, src, `utf8`);
}
function geraApplicationDevProperties(project, path) {
    let src = `
    #logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/empleadosapidev?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    #spring.jpa.hibernate.ddl-auto=create
    spring.jpa.hibernate.ddl-auto=create
    #logging.level.org.hibernate.SQL=debug
    #logging.level.org.hibernate.type.descriptor.sql=trace
    #spring.jpa.properties.hibernate.format_sql=true
    
    `;
    fs.writeFileSync(`${path}/src/main/resources/application-dev.properties`, src, `utf8`);
}
function geraApplicationProdProperties(project, path) {
    let src = `#logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/empleadosapi?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    spring.jpa.hibernate.ddl-auto=validate
    `;
    fs.writeFileSync(`${path}/src/main/resources/application-prod.properties`, src, `utf8`);
}
function geraIndexHtml(project, path) {
    let src = `<!DOCTYPE html>
    <!--
    To change this license header, choose License Headers in Project Properties.
    To change this template file, choose Tools | Templates
    and open the template in the editor.
    -->
    <html>
        <head>
            <title>TODO supply a title</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <div>TODO write content</div>
        </body>
    </html>
    `;
    fs.writeFileSync(`${path}/src/main/resources/static/index.html`, src, `utf8`);
}















let jsonData = fs.readFileSync("/home/munif/projetos/empleados.project.json", "utf8");
let json = JSON.parse(jsonData);
generateProject(json);
