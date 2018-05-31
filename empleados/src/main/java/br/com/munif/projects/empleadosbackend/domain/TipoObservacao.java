package br.com.munif.projects.empleadosbackend.domain;
    
    public enum TipoObservacao {
        FALTADOCUMENTOS("Falta Documentos"),DOENCA("Doença"),OUTROS("Outros"),
        ENUMDESCRIPTION("Tipo de Observação");
    
        private String description;
    
        TipoObservacao(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    