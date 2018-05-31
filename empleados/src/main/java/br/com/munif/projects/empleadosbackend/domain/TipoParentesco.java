package br.com.munif.projects.empleadosbackend.domain;
    
    public enum TipoParentesco {
        IRMAO("Irmão"),FILHO("Filho"),FILHA("Filha"),PAI("Pai"),MAE("Mãe"),ESPOSA("Esposa"),MARIDO("Marido"),
        ENUMDESCRIPTION("Tipo Parentesco");
    
        private String description;
    
        TipoParentesco(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    