const fs = require("fs");






function generateProject(project) {
    console.log(project.description);
    let mainDir = `../${project.description.title.toLowerCase()}`;

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

    geraDomain(project, java);
    geraDatabaseConfiguration(project, java);
    geraSecurityConfiguration(project, java);
    geraWebConfiguration(project, java);

    geraRepositories(project, java);
    geraServices(project, java);
    geraApis(project, java);

    geraHelloController(project, java);

    geraSeed(project, java);
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

function geraSeed(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.bootstrap;

    import java.math.BigDecimal;
    import java.time.ZoneId;
    import java.time.ZoneOffset;
    import java.time.ZonedDateTime;
    import java.time.temporal.ChronoUnit;
    import java.time.temporal.TemporalAdjusters;
    import java.time.temporal.TemporalAmount;
    import java.time.temporal.TemporalUnit;
    import java.util.List;
    import org.apache.log4j.Logger;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.context.ApplicationListener;
    import org.springframework.context.event.ContextRefreshedEvent;
    import org.springframework.stereotype.Component;

    import br.com.munif.framework.vicente.core.RightsHelper;
    import br.com.munif.framework.vicente.core.VicThreadScope;
    import br.com.munif.framework.vicente.domain.BaseEntityHelper;
    import br.com.munif.framework.vicente.security.seed.SeedSecurity;
    
    @Component
    public class Seed implements ApplicationListener<ContextRefreshedEvent> {

        private Logger log = Logger.getLogger(Seed.class);

        @Autowired
        private SeedSecurity seedSecurity;

        @Override
        public void onApplicationEvent(ContextRefreshedEvent event) {
            VicThreadScope.gi.set("SEED");
            VicThreadScope.ui.set("SEED");
            VicThreadScope.oi.set("SEED.");
            VicThreadScope.ip.set("127.0.0.1");
            VicThreadScope.defaultRights.set(RightsHelper.OWNER_ALL + RightsHelper.GROUP_READ_UPDATE + RightsHelper.OTHER_READ);
            log.info("Start");
            seedSecurity.seedSecurity();
        }
    


    }



    `
    fs.writeFileSync(`${path}/bootstrap/Seed.java`, src, `utf8`);
}


function geraHelloController(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.controllers;

    import br.com.munif.framework.vicente.core.RightsHelper;
    import br.com.munif.framework.vicente.core.UIDHelper;
    import br.com.munif.framework.vicente.core.VicThreadScope;
    import br.com.munif.framework.vicente.domain.util.EntitiesToSVG;
    import java.util.HashMap;
    import java.util.Map;
    import org.springframework.http.MediaType;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.ResponseBody;
    import org.springframework.web.bind.annotation.RestController;
    
    @RestController
    public class HelloController {
    
        @RequestMapping("/hello")
        public Map hello() {
            Map<String, Object> info = new HashMap<>();
            info.put("id", UIDHelper.getUID());
            info.put("gi", RightsHelper.getMainGi());
            info.put("ui", VicThreadScope.ui.get());
            info.put("oi", VicThreadScope.oi.get());
    
            return info;
        }
    
        @ResponseBody
        @RequestMapping(value = "/svg", produces = "image/svg+xml")
        public String svg() {
            return EntitiesToSVG.gera();
    
        }
    
    }


    `
    fs.writeFileSync(`${path}/controllers/HelloController.java`, src, `utf8`);
}

function geraRepositories(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraRepositorie(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraRepositorie(project, p, e, data, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.repository;
    /* Arquivo gerado utilizando VICGERADOR por munif as ${Date()} */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */


import ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${firstUp(e)}` : `${p}.${firstUp(e)}`};
import br.com.munif.framework.vicente.application.VicRepository;

import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface ${firstUp(e)}Repository extends VicRepository<${firstUp(e)}>{
    
}
    `

    fs.writeFileSync(`${path}/repository/${firstUp(e)}Repository.java`, src, `utf8`);
}


function geraServices(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraService(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraService(project, p, e, data, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.service;
    /* Arquivo gerado utilizando VICGERADOR por munif as ${Date()} */
    /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
    
    import br.com.munif.framework.vicente.application.BaseService;
    import br.com.munif.framework.vicente.application.VicRepository;
    import ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${firstUp(e)}` : `${p}.${firstUp(e)}`};
    import org.springframework.stereotype.Service;
    
    
    @Service
    public class ${firstUp(e)}Service extends BaseService<${firstUp(e)}>{
        
        public ${firstUp(e)}Service(VicRepository<${firstUp(e)}> repository) {
            super(repository);
        }
        
    }
    `

    fs.writeFileSync(`${path}/service/${firstUp(e)}Service.java`, src, `utf8`);
}

function geraApis(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraApi(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraApi(project, p, e, data, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.api;
    /* Arquivo gerado utilizando VICGERADOR por munif as ${Date()} */
    /* Arquivo gerado utilizando VICGERADOR por munif as 13/03/2018 08:23:28 */
    /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
    
    import br.com.munif.framework.vicente.api.BaseAPI;
    import br.com.munif.framework.vicente.application.BaseService;
    import ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${firstUp(e)}` : `${p}.${firstUp(e)}`};
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;
    import org.apache.log4j.Logger;
    
    @RestController
    @RequestMapping("/api/${e.toLowerCase()}")
    public class ${firstUp(e)}Api extends BaseAPI<${firstUp(e)}> {
    
        private final Logger log = Logger.getLogger(${firstUp(e)}Api.class);
    
        private static final String ENTITY_NAME = "${e}";
    
        public ${firstUp(e)}Api(BaseService<${firstUp(e)}> service) {
            super(service);
        }
        
    
    }
    `

    fs.writeFileSync(`${path}/api/${firstUp(e)}Api.java`, src, `utf8`);
}



function geraDatabaseConfiguration(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;

    import ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.*;
    import br.com.munif.framework.vicente.application.VicRepositoryImpl;
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
    import org.springframework.boot.autoconfigure.domain.EntityScan;
    import org.springframework.context.annotation.ComponentScan;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
    import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
    import org.springframework.transaction.annotation.EnableTransactionManagement;
    
    @Configuration
    @ComponentScan(basePackages = {
        "${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend", 
        "br.com.munif.framework.vicente.application.victenancyfields", 
        "br.com.munif.framework.vicente.api.errors",
        "br.com.munif.framework.vicente.security"
    })
    @EnableAutoConfiguration()
    @EntityScan(basePackages = {
        "br.com.munif.framework.vicente.domain", 
        "${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.domain",
        "br.com.munif.framework.vicente.security"
    })
    @EnableJpaRepositories(basePackages = {
        "${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.repository", 
        "br.com.munif.framework.vicente.application.victenancyfields",
        "br.com.munif.framework.vicente.security.repository"
    }, repositoryBaseClass = VicRepositoryImpl.class)
    @EnableTransactionManagement
    public class DatabaseConfiguration {
    
    }
    `
    fs.writeFileSync(`${path}/configuration/DatabaseConfiguration.java`, src, `utf8`);
}


function geraSecurityConfiguration(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;
    
    //@Configuration
    public class SecurityConfiguration {//extends WebSecurityConfigurerAdapter {
    
    //    @Override
    //    protected void configure(HttpSecurity httpSecurity) throws Exception {
    //        httpSecurity.authorizeRequests().antMatchers("/**").permitAll();
    //        httpSecurity.csrf().disable();
    //        httpSecurity.headers().frameOptions().disable();
    //    }
    
    }

    `
    fs.writeFileSync(`${path}/configuration/SecurityConfiguration.java`, src, `utf8`);
}
function geraWebConfiguration(project, path) {
    let src = `package ${mainPackage(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;

import br.com.munif.framework.vicente.security.api.VicRequestFilter;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.ISO8601DateFormat;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 * @author munif
 */
@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter implements WebApplicationInitializer {

    @Bean
    public VicRequestFilter vicRequestFilter() {
        return new VicRequestFilter("br.com.munif.projects.empleadosapi");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(vicRequestFilter());
    }

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {

    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(jacksonConverter());
        super.configureMessageConverters(converters);
    }

    private MappingJackson2HttpMessageConverter jacksonConverter() {
        ObjectMapper mapper = new ObjectMapper();
        Hibernate5Module hm = new Hibernate5Module();
        hm.disable(Hibernate5Module.Feature.USE_TRANSIENT_ANNOTATION);
        mapper.registerModule(hm);
        mapper.registerModule(new JavaTimeModule());
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        mapper.setDateFormat(new ISO8601DateFormat());
//        mapper.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);
        mapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.NONE);
        mapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        MappingJackson2HttpMessageConverter jacksonConverter = new MappingJackson2HttpMessageConverter();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        jacksonConverter.setObjectMapper(mapper);
        return jacksonConverter;
    }

}
    `
    fs.writeFileSync(`${path}/configuration/WebConfiguration.java`, src, `utf8`);
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
