package br.com.munif.projects.empleadosbackend.domain.localizacao;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "estado")
@Audited
public class Estado extends BaseEntity {

    @Column(name = "nome")
    private String nome;


    public Estado(){

    }

    public String getNome(){
        return nome;
    }
           
    public void setNome(String nome){
        this.nome=nome;
    }

    public Estado nome(String nome) {
        this.nome = nome;
        return this;
    }

    
}