package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "documento")
@Audited
public class Documento extends BaseEntity {

    @Column(name = "valor")
    private String valor;


    public Documento(){

    }

    public String getValor(){
        return valor;
    }
           
    public void setValor(String valor){
        this.valor=valor;
    }

    public Documento valor(String valor) {
        this.valor = valor;
        return this;
    }

    
}