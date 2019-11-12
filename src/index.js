const fs = require("fs");
const util = require("./util");
const bc = require("./backend/comum");
const fc = require("./frontend/comum");


let jsonData = fs.readFileSync(require('os').homedir() + `/projetos/${process.argv[2] || 'estoque'}.json`, "utf8");
let json = JSON.parse(jsonData);
generateProject(json);

function generateProject(project) {
    let mainDir = require('os').homedir() + `/temp/${project.description.title.toLowerCase()}`;
    console.log(project.description, "=>",mainDir);
    util.criaPasta(mainDir);
    util.criaPasta(`${mainDir}/.mvn`);
    util.criaPasta(`${mainDir}/.mvn/wrapper`);
    util.criaPasta(`${mainDir}/front`);
    util.criaPasta(`${mainDir}/front/project`);
    util.criaPasta(`${mainDir}/front/project/src/`);
    util.criaPasta(`${mainDir}/front/project/src/app/`);
    util.criaPasta(`${mainDir}/front/project/src/assets/`);
    util.criaPasta(`${mainDir}/front/project/src/assets/icons/`);
    util.criaPasta(`${mainDir}/front/project/src/environments/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum/naoexiste`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum/principal`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum/naoexiste/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/comum/principal/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/domain/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/vic-many-to-many/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/vic-many-to-one/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/vic-one-to-many/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/vic-system-fields/`);
    util.criaPasta(`${mainDir}/front/project/src/app/vic-components/vic-tabela/`);
    util.criaPasta(`${mainDir}/front/project/src/app/login`);
    util.criaPasta(`${mainDir}/front/project/src/app/user/`);
    util.criaPasta(`${mainDir}/front/project/src/app/user/crud/`);
    util.criaPasta(`${mainDir}/front/project/src/app/user/detalhes/`);
    util.criaPasta(`${mainDir}/front/project/src/app/user/lista/`);
    util.criaPasta(`${mainDir}/front/project/src/app/group/`);
    util.criaPasta(`${mainDir}/front/project/src/app/group/crud/`);
    util.criaPasta(`${mainDir}/front/project/src/app/group/detalhes/`);
    util.criaPasta(`${mainDir}/front/project/src/app/group/lista/`);
    util.criaPasta(`${mainDir}/front/project/src/app/organization/`);
    util.criaPasta(`${mainDir}/front/project/src/app/organization/crud/`);
    util.criaPasta(`${mainDir}/front/project/src/app/organization/detalhes/`);
    util.criaPasta(`${mainDir}/front/project/src/app/organization/lista/`);
    util.criaPasta(`${mainDir}/src`);
    util.criaPasta(`${mainDir}/src/main`);
    util.criaPasta(`${mainDir}/src/main/resources`);
    util.criaPasta(`${mainDir}/src/main/resources/static`);
    util.criaPasta(`${mainDir}/src/main/java`);
    let angular = `${mainDir}/front/project`;
    let java = `${mainDir}/src/main/java`;
    project.description.softwareHouseDomain.toLowerCase().split('.').reverse().forEach(element => {
        java += `/${element}`;
        util.criaPasta(java);
    });
    java += `/projects`;
    util.criaPasta(java);
    java += `/${project.description.title.toLowerCase()}backend`;
    util.criaPasta(java);
    util.criaPasta(`${java}/api`);
    util.criaPasta(`${java}/bootstrap`);
    util.criaPasta(`${java}/configuration`);
    util.criaPasta(`${java}/controllers`);
    util.criaPasta(`${java}/domain`);
    util.criaPasta(`${java}/repository`);
    util.criaPasta(`${java}/service`);
    if (!fs.existsSync(`${mainDir}/mvnw`)){
    
    ['mvnw','mvnw.cmd','.mvn/wrapper/maven-wrapper.jar','.mvn/wrapper/maven-wrapper.properties'].forEach(s => fs.createReadStream(`${__dirname}/../res/static/mvn/${s}`).pipe(fs.createWriteStream(`${mainDir}/${s}`)));
    ['icon-128x128.png', 'icon-144x144.png', 'icon-152x152.png', 'icon-192x192.png', 'icon-384x384.png', 'icon-512x512.png', 'icon-72x72.png', 'icon-96x96.png'].forEach(s => fs.createReadStream(`${__dirname}/../res/static/${s}`).pipe(fs.createWriteStream(`${mainDir}/front/project/src/assets/icons/${s}`)));
    ['favicon.ico'].forEach(s => fs.createReadStream(`${__dirname}/../res/static/${s}`).pipe(fs.createWriteStream(`${mainDir}/front/project/src/${s}`)));
    }



    bc.geraPomXML(project, mainDir);
    bc.geraApplicationDevProperties(project, mainDir);
    bc.geraApplicationProdProperties(project, mainDir);
    bc.geraApplicationProperties(project, mainDir);
    bc.geraIndexHtml(project, mainDir);
    bc.geraApplication(project, java);
    bc.geraDomain(project, java);
    bc.geraDatabaseConfiguration(project, java);
    bc.geraSecurityConfiguration(project, java);
    bc.geraWebConfiguration(project, java);
    bc.geraRepositories(project, java);
    bc.geraServices(project, java);
    bc.geraApis(project, java);
    bc.geraHelloController(project, java);
    bc.geraSeed(project, java);
   
        fc.geraproject__editorconfig(project, angular);
        fc.geraproject__gitignore(project, angular);
        fc.geraproject_README_md(project, angular);
        fc.geraproject_angular_json(project, angular);
        fc.geraproject_ngsw_config_json(project, angular);
        fc.geraproject_package_json(project, angular);

        
        fc.geraproject__app_routing_module_ts(project, angular);



        fc.geraproject__app_component_ts(project, angular);
        fc.geraproject__app_module_ts(project, angular);

        fc.geraproject_src_assets__gitkeep(project, angular);
        
      
        fc.geraproject_src_browserslist(project, angular);
        
        fc.geraproject_src_environments_environment_prod_ts(project, angular);
        fc.geraproject_src_environments_environment_ts(project, angular);
        fc.geraproject_src_index_html(project, angular);
        fc.geraproject_src_karma_conf_js(project, angular);
        fc.geraproject_src_main_ts(project, angular);
        fc.geraproject_src_manifest_json(project, angular);
        fc.geraproject_src_polyfills_ts(project, angular);
        fc.geraproject_src_styles_css(project, angular);
        fc.geraproject_src_test_ts(project, angular);
        fc.geraproject_src_tsconfig_app_json(project, angular);
        fc.geraproject_src_tsconfig_spec_json(project, angular);
        fc.geraproject_src_tslint_json(project, angular);
        fc.geraproject_tsconfig_json(project, angular);
        fc.geraproject_tslint_json(project, angular);
      
      
      
        fc.gera_pietra_guard_guard_ts(project, angular);
        fc.geraalert_message_ts(project, angular);
        fc.geraexcluir_atributos_sistema_pipe_spec_ts(project, angular);
        fc.geraexcluir_atributos_sistema_pipe_ts(project, angular);
        fc.geravic_components_module_ts(project, angular);
      
        fc.geraalert_message_ts(project, angular);


        fc.gerabase_entity_ts(project, angular);

        fc.geranaoexiste_component_css(project, angular);
        fc.geranaoexiste_component_html(project, angular);
        fc.geranaoexiste_component_spec_ts(project, angular);
        fc.geranaoexiste_component_ts(project, angular);
        
        fc.geraprincipal_component_css(project, angular);
        fc.geraprincipal_component_html(project, angular);
        fc.geraprincipal_component_spec_ts(project, angular);
        fc.geraprincipal_component_ts(project, angular);
        fc.gerasuper_detalhes_ts(project, angular);
        fc.gerasuper_lista_ts(project, angular);
        fc.gerasuper_service_ts(project, angular);
        fc.geravic_return_ts(project, angular);
        
        fc.geragroup_ts(project, angular);
        fc.geraorganization_ts(project, angular);
        fc.geratoken_ts(project, angular);
        fc.gerauser_ts(project, angular);
        fc.geraexcluir_atributos_sistema_pipe_spec_ts(project, angular);
        fc.geraexcluir_atributos_sistema_pipe_ts(project, angular);
        fc.geravic_components_module_ts(project, angular);
        
        fc.geravic_many_to_many_component_css(project, angular);
        fc.geravic_many_to_many_component_html(project, angular);
        fc.geravic_many_to_many_component_spec_ts(project, angular);
        fc.geravic_many_to_many_component_ts(project, angular);
        
        fc.geravic_many_to_one_component_css(project, angular);
        fc.geravic_many_to_one_component_html(project, angular);
        fc.geravic_many_to_one_component_spec_ts(project, angular);
        fc.geravic_many_to_one_component_ts(project, angular);
        
        fc.gerasuper_detalhe_om_component_ts(project, angular);
        fc.geravic_one_to_many_component_css(project, angular);
        fc.geravic_one_to_many_component_html(project, angular);
        fc.geravic_one_to_many_component_spec_ts(project, angular);
        fc.geravic_one_to_many_component_ts(project, angular);


        fc.geravic_system_fields_component_css(project, angular);
        fc.geravic_system_fields_component_html(project, angular);
        fc.geravic_system_fields_component_spec_ts(project, angular);
        fc.geravic_system_fields_component_ts(project, angular);
        
        fc.geravic_tabela_component_css(project, angular);
        fc.geravic_tabela_component_html(project, angular);
        fc.geravic_tabela_component_spec_ts(project, angular);
        fc.geravic_tabela_component_ts(project, angular);
      
      
        
        fc.geralogin_component_css(project, angular);
        fc.geralogin_component_html(project, angular);
        fc.geralogin_component_spec_ts(project, angular);
        fc.geralogin_component_ts(project, angular);
        fc.geralogin_service_ts(project, angular);
      
      
        fc.gera_user_crud_crud_component_css(project, angular);
        fc.gera_user_crud_crud_component_html(project, angular);
        fc.gera_user_crud_crud_component_ts(project, angular);
        fc.gera_user_detalhes_detalhes_component_css(project, angular);
        fc.gera_user_detalhes_detalhes_component_html(project, angular);
        fc.gera_user_detalhes_detalhes_component_ts(project, angular);
        fc.gera_user_lista_lista_component_css(project, angular);
        fc.gera_user_lista_lista_component_html(project, angular);
        fc.gera_user_lista_lista_component_ts(project, angular);
        fc.gera_user_user_routing_module_ts(project, angular);
        fc.gera_user_user_module_ts(project, angular);
        fc.gera_user_user_service_ts(project, angular);
        fc.gera_group_crud_crud_component_css(project, angular);
        fc.gera_group_crud_crud_component_html(project, angular);
        fc.gera_group_crud_crud_component_ts(project, angular);

        fc.gera_group_detalhes_detalhes_component_css(project, angular);
        fc.gera_group_detalhes_detalhes_component_html(project, angular);
        fc.gera_group_detalhes_detalhes_component_ts(project, angular);
        fc.gera_group_group_routing_module_ts(project, angular);
        fc.gera_group_group_module_ts(project, angular);
        fc.gera_group_group_service_ts(project, angular);

        fc.gera_group_lista_lista_component_css(project, angular);
        fc.gera_group_lista_lista_component_html(project, angular);
        fc.gera_group_lista_lista_component_ts(project, angular);
        fc.gera_organization_crud_crud_component_css(project, angular);
        fc.gera_organization_crud_crud_component_html(project, angular);
        fc.gera_organization_crud_crud_component_ts(project, angular);
        fc.gera_organization_detalhes_detalhes_component_css(project, angular);
        fc.gera_organization_detalhes_detalhes_component_html(project, angular);
        fc.gera_organization_detalhes_detalhes_component_ts(project, angular);
        
        fc.gera_organization_lista_lista_component_css(project, angular);
        fc.gera_organization_lista_lista_component_html(project, angular);
        fc.gera_organization_lista_lista_component_ts(project, angular);
        fc.gera_organization_organization_routing_module_ts(project, angular);
        fc.gera_organization_organization_module_ts(project, angular);
        fc.gera_organization_organization_service_ts(project, angular);
      
      
        Object.keys(project.entities).forEach(p => {
          console.log(`Paconte ${p}`);
          Object.keys(project.entities[p]).forEach(e => {
            console.log(`Entidade ${e}`);
            util.criaPasta(`${mainDir}/front/project/src/app/${e}`);
            util.criaPasta(`${mainDir}/front/project/src/app/${e}/crud/`);
            fc.gera_entidade_crud_crud_component_css(project, e, project.entities[p][e], angular);
            fc.gera_entidade_crud_crud_component_html(project, e, project.entities[p][e], angular);
            fc.gera_entidade_crud_crud_component_ts(project, e, project.entities[p][e], angular);
            util.criaPasta(`${mainDir}/front/project/src/app/${e}/detalhes/`);
            fc.gera_entidade_detalhes_detalhes_component_css(project, e, project.entities[p][e], angular);
            fc.gera_entidade_detalhes_detalhes_component_html(project, e, project.entities[p][e], angular);
            fc.gera_entidade_detalhes_detalhes_component_ts(project, e, project.entities[p][e], angular);
            util.criaPasta(`${mainDir}/front/project/src/app/${e}/lista/`);
            fc.gera_entidade_lista_lista_component_css(project, e, project.entities[p][e], angular);
            fc.gera_entidade_lista_lista_component_html(project, e, project.entities[p][e], angular);
            fc.gera_entidade_lista_lista_component_ts(project, e, project.entities[p][e], angular);
            fc.gera_entidade_routing_module_ts(project, e, project.entities[p][e], angular);
            fc.gera_entidade_module_ts(project, e, project.entities[p][e], angular);
            fc.gera_entidade_service_ts(project, e, project.entities[p][e], angular);
            util.insereLinhaAntes(`${angular}/src/app//app.module.ts`, 'COLOCAR IMPORTS', `  import { ${util.primeiraMaiuscula(e)}Module } from './${e}/${e}.module';`);
      
            util.insereLinhaAntes(`${angular}/src/app//app.module.ts`, 'MARCADOR MODULE', `  ${util.primeiraMaiuscula(e)}Module,`);
            util.insereLinhaAntes(`${angular}/src/app//app.component.ts`, 'MARCADOR MENU', `  { link: './${e}', iconeTipo: 'fas', icone: 'fa-sitemap', label: '${util.primeiraMaiuscula(e)}', active: false },`);
      
      
          });
        });
      
      
      
        // util.mkDir(`${mainDir}/front/project/src/app/${entidade}`);
        // util.mkDir(`${mainDir}/front/project/src/app/pais/crud/`);
        // gera_pais_crud_crud_component_css(project, angular);
        // gera_pais_crud_crud_component_html(project, angular);
        // gera_pais_crud_crud_component_ts(project, angular);
        // util.mkDir(`${mainDir}/front/project/src/app/pais/detalhes/`);
        // gera_pais_detalhes_detalhes_component_css(project, angular);
        // gera_pais_detalhes_detalhes_component_html(project, angular);
        // gera_pais_detalhes_detalhes_component_ts(project, angular);
        // util.mkDir(`${mainDir}/front/project/src/app/pais/lista/`);
        // gera_pais_lista_lista_component_css(project, angular);
        // gera_pais_lista_lista_component_html(project, angular);
        // gera_pais_lista_lista_component_ts(project, angular);
        // gera_pais_pais_routing_module_ts(project, angular);
        // gera_pais_pais_module_ts(project, angular);
        // gera_pais_pais_service_ts(project, angular);
      
      
      
      
      
      
      
      
      


}
