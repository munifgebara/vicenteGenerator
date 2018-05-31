package br.com.munif.projects.empleadosbackend.domain;
    
    public enum MotivoTermino {
        RENUNCIA("Renuncia"),DESPIDO("Despido"),JUBILACIÓN("Jubilación"),ACTUALIZACIÓN("Actualización"),PLAZO("Plazo"),
        ENUMDESCRIPTION("Motivo Término");
    
        private String description;
    
        MotivoTermino(String description) {
            this.description = description;
        }
    
        public String description() {
            return description;
        }
    }
    