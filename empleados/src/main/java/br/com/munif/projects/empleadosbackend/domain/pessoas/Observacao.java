package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "observacao")
@Audited
public class Observacao extends BaseEntity {

    @Column(name = "texto")
    private STRING texto;
    @Column(name = "momento")
    private DATETIME momento;


    public Observacao(){

    }

    public STRING getTexto(){
        return texto;
    }
           
    public void setTexto(STRING texto){
        this.texto=texto;
    }

    public Observacao texto(STRING texto) {
        this.texto = texto;
        return this;
    }

    public DATETIME getMomento(){
        return momento;
    }
           
    public void setMomento(DATETIME momento){
        this.momento=momento;
    }

    public Observacao momento(DATETIME momento) {
        this.momento = momento;
        return this;
    }

    
}