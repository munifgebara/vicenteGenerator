package br.com.munif.projects.empleadosbackend.domain;
    
    public enum Sexo {
        M("Masculino"),F("Feminino"),
        ENUMDESCRIPTION("Sexo");
    
        private String description;
    
        Sexo(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    