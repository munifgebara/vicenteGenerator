const util = require("../util");

module.exports.geraPomXML = geraPomXML;
module.exports.geraApplicationDevProperties = geraApplicationDevProperties;
module.exports.geraApplicationProdProperties = geraApplicationProdProperties;
module.exports.geraApplicationProperties = geraApplicationProperties;
module.exports.geraIndexHtml = geraIndexHtml;
module.exports.geraApplication = geraApplication;
module.exports.geraDomain = geraDomain;
module.exports.geraDatabaseConfiguration = geraDatabaseConfiguration;
module.exports.geraSecurityConfiguration = geraSecurityConfiguration;
module.exports.geraWebConfiguration = geraWebConfiguration;
module.exports.geraRepositories = geraRepositories;
module.exports.geraServices = geraServices;
module.exports.geraApis = geraApis;
module.exports.geraHelloController = geraHelloController;
module.exports.geraSeed = geraSeed;



function geraExemplo(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend;
    `
    util.escreveArquivo(`${path}/exemplo.exx`, src, `utf8`);
}

function geraSeed(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.bootstrap;

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
    util.escreveArquivo(`${path}/bootstrap/Seed.java`, src, `utf8`);
}


function geraHelloController(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.controllers;

    import br.com.munif.framework.vicente.core.RightsHelper;
    import br.com.munif.framework.vicente.core.UIDHelper;
    import br.com.munif.framework.vicente.core.Utils;
    import br.com.munif.framework.vicente.core.VicReturn;
    import br.com.munif.framework.vicente.core.VicThreadScope;
    import br.com.munif.framework.vicente.domain.util.EntitiesToSVG;
    import java.lang.reflect.Method;
    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;
    import org.springframework.web.bind.annotation.PathVariable;
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
        @RequestMapping("/enum/{enumName}")
        public VicReturn<Map<String, String>> enumValues(@PathVariable String enumName) {
            List<Map<String, String>> toReturn = new ArrayList<>();
            if (!enumName.contains(".")) {
                enumName = this.getClass().getCanonicalName().replace("controllers.HelloController", "domain." + Utils.primeiraMaiuscula(enumName));
            }
            try {
                Class<?> clz = Class.forName(enumName);
                List consts = Arrays.asList(clz.getEnumConstants());
    
                for (Object obj : consts) {
                    Method mth = clz.getDeclaredMethod("description");
                    String descriptrion = mth.invoke(obj).toString();
                    Map<String, String> v = new HashMap<>();
                    v.put("value", obj.toString());
                    v.put("description", descriptrion);
                    toReturn.add(v);
                }
    
            } catch (Exception ex) {
                System.out.println("------------------------____>" + ex.toString());
            }
            return new VicReturn<Map<String, String>>(toReturn, toReturn.size(), 0, Boolean.FALSE);
        }

        @ResponseBody
        @RequestMapping(value = "/svg", produces = "image/svg+xml")
        public String svg() {
            return EntitiesToSVG.gera();
    
        }
    
    }


    `
    util.escreveArquivo(`${path}/controllers/HelloController.java`, src, `utf8`);
}

function geraRepositories(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraRepositorie(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraRepositorie(project, p, e, data, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.repository;
    /* Arquivo gerado utilizando VICGERADOR por munif */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */


import ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${util.primeiraMaiuscula (e)}` : `${p}.${util.primeiraMaiuscula (e)}`};
import br.com.munif.framework.vicente.application.VicRepository;

import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface ${util.primeiraMaiuscula (e)}Repository extends VicRepository<${util.primeiraMaiuscula (e)}>{
    
}
    `

    util.escreveArquivo(`${path}/repository/${util.primeiraMaiuscula (e)}Repository.java`, src, `utf8`);
}


function geraServices(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraService(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraService(project, p, e, data, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.service;
    /* Arquivo gerado utilizando VICGERADOR por munif */
    /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
    
    import br.com.munif.framework.vicente.application.BaseService;
    import br.com.munif.framework.vicente.application.VicRepository;
    import ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${util.primeiraMaiuscula (e)}` : `${p}.${util.primeiraMaiuscula (e)}`};
    import org.springframework.stereotype.Service;
    
    
    @Service
    public class ${util.primeiraMaiuscula (e)}Service extends BaseService<${util.primeiraMaiuscula (e)}>{
        
        public ${util.primeiraMaiuscula (e)}Service(VicRepository<${util.primeiraMaiuscula (e)}> repository) {
            super(repository);
        }
        
    }
    `

    util.escreveArquivo(`${path}/service/${util.primeiraMaiuscula (e)}Service.java`, src, `utf8`);
}

function geraApis(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraApi(project, p, e, project.entities[p][e], path);
        });
    });

}


function geraApi(project, p, e, data, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.api;
    /* Arquivo gerado utilizando VICGERADOR por munif */
    /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
    
    import br.com.munif.framework.vicente.api.BaseAPI;
    import br.com.munif.framework.vicente.application.BaseService;
    import ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `${util.primeiraMaiuscula (e)}` : `${p}.${util.primeiraMaiuscula (e)}`};
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;
    import org.apache.log4j.Logger;
    
    @RestController
    @RequestMapping("/api/${e.toLowerCase()}")
    public class ${util.primeiraMaiuscula (e)}Api extends BaseAPI<${util.primeiraMaiuscula (e)}> {
    
        private final Logger log = Logger.getLogger(${util.primeiraMaiuscula (e)}Api.class);
    
        private static final String ENTITY_NAME = "${e}";
    
        public ${util.primeiraMaiuscula (e)}Api(BaseService<${util.primeiraMaiuscula (e)}> service) {
            super(service);
        }
        
    
    }
    `

    util.escreveArquivo(`${path}/api/${util.primeiraMaiuscula (e)}Api.java`, src, `utf8`);
}



function geraDatabaseConfiguration(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;

    import ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.*;
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
        "${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend", 
        "br.com.munif.framework.vicente.application.victenancyfields", 
        "br.com.munif.framework.vicente.api.errors",
        "br.com.munif.framework.vicente.security"
    })
    @EnableAutoConfiguration()
    @EntityScan(basePackages = {
        "br.com.munif.framework.vicente.domain", 
        "${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain",
        "br.com.munif.framework.vicente.security"
    })
    @EnableJpaRepositories(basePackages = {
        "${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.repository", 
        "br.com.munif.framework.vicente.application.victenancyfields",
        "br.com.munif.framework.vicente.security.repository"
    }, repositoryBaseClass = VicRepositoryImpl.class)
    @EnableTransactionManagement
    public class DatabaseConfiguration {
    
    }
    `
    util.escreveArquivo(`${path}/configuration/DatabaseConfiguration.java`, src, `utf8`);
}


function geraSecurityConfiguration(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;
    
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
    util.escreveArquivo(`${path}/configuration/SecurityConfiguration.java`, src, `utf8`);
}

function geraWebConfiguration(project, path) {
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.configuration;

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
    util.escreveArquivo(`${path}/configuration/WebConfiguration.java`, src, `utf8`);
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
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain;
    
    public enum ${util.primeiraMaiuscula (name)} {
        ${data.values.reduce((p, v) => `${p}${v.value}("${v.description}"),`, "").slice(0, -1)};
        //ENUMDESCRIPTION("${data.description}");
    
        private String description;
    
        ${util.primeiraMaiuscula (name)}(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    `;
    util.escreveArquivo(`${path}/domain/${util.primeiraMaiuscula (name)}.java`, src, `utf8`);
}



function geraEntities(project, path) {
    Object.keys(project.entities).forEach(p => {
        Object.keys(project.entities[p]).forEach(e => {
            geraEntitie(project, p, e, project.entities[p][e], path);
        });
    });
}


function geraAssociationGetSet(e, field, data) {
    if (data.associations[field].multiplicity === 'OneToMany') {
        return `
        public Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> get${util.primeiraMaiuscula (field)}(){
            return ${field};
        }
               
        public void set${util.primeiraMaiuscula (field)}(Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field}){
            this.${field}=${field};
        }
    
        public ${util.primeiraMaiuscula (e)} ${field}(Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field}) {
            this.${field} = ${field};
            return this;
        }`
    }
    if (data.associations[field].multiplicity === 'ManyToMany') {
        return `
        public Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> get${util.primeiraMaiuscula (field)}(){
            return ${field};
        }
               
        public void set${util.primeiraMaiuscula (field)}(Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field}){
            this.${field}=${field};
        }
    
        public ${util.primeiraMaiuscula (e)} ${field}(Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field}) {
            this.${field} = ${field};
            return this;
        }`
    }

    if (data.associations[field].multiplicity === 'ManyToOne') {
        return `
        public ${util.primeiraMaiuscula (data.associations[field].targetEntity)} get${util.primeiraMaiuscula (field)}(){
            return ${field};
        }
               
        public void set${util.primeiraMaiuscula (field)}(${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field}){
            this.${field}=${field};
        }
    
        public ${util.primeiraMaiuscula (e)} ${field}(${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field}) {
            this.${field} = ${field};
            return this;
        }`
    }
    if (data.associations[field].multiplicity === 'OneToOne') {
        return `
        public ${util.primeiraMaiuscula (data.associations[field].targetEntity)} get${util.primeiraMaiuscula (field)}(){
            return ${field};
        }
               
        public void set${util.primeiraMaiuscula (field)}(${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field}){
            this.${field}=${field};
        }
    
        public ${util.primeiraMaiuscula (e)} ${field}(${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field}) {
            this.${field} = ${field};
            return this;
        }`
    }

}

function geraAssociation(e, field, data) {
    if (data.associations[field].multiplicity === 'OneToMany') {
        return `
    @${data.associations[field].multiplicity}(mappedBy = "${e}", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"${e}"})
    private Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field} ;
`
    }
    if (data.associations[field].multiplicity === 'ManyToMany') {
        return `
    @${data.associations[field].multiplicity}
    private Set<${util.primeiraMaiuscula (data.associations[field].targetEntity)}> ${field} ;
`
    }

    if (data.associations[field].multiplicity === 'ManyToOne') {
        return `
    @${data.associations[field].multiplicity}
    private ${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field} ;
`
    }
    if (data.associations[field].multiplicity === 'OneToOne') {
        return `
    @${data.associations[field].multiplicity}
    private ${util.primeiraMaiuscula (data.associations[field].targetEntity)} ${field} ;
`
    }

}

function geraEntitie(project, p, e, data, path) {
    if (p === 'mainPackage') {
        p = '';
    } else {
        util.criaPasta(`${path}/domain/${p}`)
        p = '.' + p;

    }
    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain${p};
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.tenancyfields.VicTenancyFieldsBaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.ZonedDateTime;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;
${    Object.keys(project.entities).reduce((a, p) => `${a}import ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend.domain.${p === 'mainPackage' ? `*` : `${p}.*`};
`  , "")}


@Entity
@Table(name = "${e.toLowerCase()}")
@Audited
public class ${util.primeiraMaiuscula (e)} extends VicTenancyFieldsBaseEntity {

${Object.keys(data.fields).reduce((a, field) =>
            `${a}    @Column(name = "${field.toLowerCase()}")
    private ${data.fields[field].type} ${field};
`, "")}


${Object.keys(data.enums).reduce((a, field) =>
            `${a}    @Enumerated(EnumType.STRING)
private ${util.primeiraMaiuscula (data.enums[field].enum)} ${field};
`, "")}


${Object.keys(data.associations).reduce((a, field) =>
            `${a}${geraAssociation(e, field, data)}
`, "")}

public ${util.primeiraMaiuscula (e)}(){

    }

    ${Object.keys(data.fields).reduce((a, field) => `${a}public ${data.fields[field].type} get${util.primeiraMaiuscula (field)}(){
        return ${field};
    }
           
    public void set${util.primeiraMaiuscula (field)}(${data.fields[field].type} ${field}){
        this.${field}=${field};
    }

    public ${util.primeiraMaiuscula (e)} ${field}(${data.fields[field].type} ${field}) {
        this.${field} = ${field};
        return this;
    }

    `, ""
        )}

        ${Object.keys(data.enums).reduce((a, field) => `${a}public ${util.primeiraMaiuscula (data.enums[field].enum)} get${util.primeiraMaiuscula (field)}(){
            return ${field};
        }
               
        public void set${util.primeiraMaiuscula (field)}(${util.primeiraMaiuscula (data.enums[field].enum)} ${field}){
            this.${field}=${field};
        }
    
        public ${util.primeiraMaiuscula (e)} ${field}(${util.primeiraMaiuscula (data.enums[field].enum)} ${field}) {
            this.${field} = ${field};
            return this;
        }
    
        `, ""
        )}
        ${Object.keys(data.associations).reduce((a, field) =>
            `${a}${geraAssociationGetSet(e, field, data)}
`, "")}


}`;
    util.escreveArquivo(`${path}/domain/${p.substr(1)}/${util.primeiraMaiuscula (e)}.java`, src, `utf8`);

}



function geraApplication(project, path) {

    let src = `package ${util.pacotePrincipal(project)}.projects.${project.description.title.toLowerCase()}backend;

import br.com.munif.framework.vicente.domain.BaseEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }
} `;
    util.escreveArquivo(`${path}/BackEndApplication.java`, src, `utf8`);
}

function geraPomXML(project, path) {
    let src = `<?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
    
        <groupId>${util.pacotePrincipal(project)}.projects</groupId>
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
    util.escreveArquivo(`${path}/pom.xml`, src, `utf8`);
}


function geraApplicationProperties(project, path) {
    let src = `spring.profiles.active=dev
    #logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/${project.description.title.toLowerCase()}?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    spring.jpa.hibernate.ddl-auto=create-drop
    #logging.level.org.hibernate.SQL=debug
    `;
    util.escreveArquivo(`${path}/src/main/resources/application.properties`, src, `utf8`);
}

function geraApplicationDevProperties(project, path) {
    let src = `
    #logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/${project.description.title.toLowerCase()}dev?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    #spring.jpa.hibernate.ddl-auto=create
    spring.jpa.hibernate.ddl-auto=create
    #logging.level.org.hibernate.SQL=debug
    #logging.level.org.hibernate.type.descriptor.sql=trace
    #spring.jpa.properties.hibernate.format_sql=true
    
    `;
    util.escreveArquivo(`${path}/src/main/resources/application-dev.properties`, src, `utf8`);
}

function geraApplicationProdProperties(project, path) {
    let src = `#logging.level.org.h2.server: DEBUG
    # Database
    spring.datasource.url= jdbc:mysql://localhost:3306/${project.description.title.toLowerCase()}api?useUnicode=true&characterEncoding=utf8&useSSL=false&createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=senha
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL57Dialect
    spring.jpa.hibernate.ddl-auto=validate
    `;
    util.escreveArquivo(`${path}/src/main/resources/application-prod.properties`, src, `utf8`);
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
            <title>${project.description.title.toLowerCase()}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
        <h1>${project.description.title.toLowerCase()}</h1>
            <div>TODO write content</div>
        </body>
    </html>
    `;
    util.escreveArquivo(`${path}/src/main/resources/static/index.html`, src, `utf8`);
}