package br.com.munif.projects.empleadosbackend.domain;
    
    public enum TipoContato {
        TELEFONE("Telefone Residencial"),CELULAR("Telefone Celular"),EMAIL("Email"),EMERGENCIA("Emergência"),
        ENUMDESCRIPTION("Tipo de Contato");
    
        private String description;
    
        TipoContato(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    