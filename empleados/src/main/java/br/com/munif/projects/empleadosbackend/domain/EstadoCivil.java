package br.com.munif.projects.empleadosbackend.domain;
    
    public enum EstadoCivil {
        CASADO("Casado"),SOLTEIRO("Solteiro"),VIUVO("Viuvo"),
        ENUMDESCRIPTION("Estado Cívil");
    
        private String description;
    
        EstadoCivil(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    