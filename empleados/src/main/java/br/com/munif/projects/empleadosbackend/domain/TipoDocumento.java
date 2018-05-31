package br.com.munif.projects.empleadosbackend.domain;
    
    public enum TipoDocumento {
        CPF("CPF"),RG("RG"),CNH("CNH"),
        ENUMDESCRIPTION("Tipo de Documento");
    
        private String description;
    
        TipoDocumento(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    