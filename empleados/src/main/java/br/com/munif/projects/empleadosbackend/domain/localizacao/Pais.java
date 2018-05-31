package br.com.munif.projects.empleadosbackend.domain.localizacao;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "pais")
@Audited
public class Pais extends BaseEntity {

    @Column(name = "nome")
    private String nome;


    public Pais(){

    }

    public String getNome(){
        return nome;
    }
           
    public void setNome(String nome){
        this.nome=nome;
    }

    public Pais nome(String nome) {
        this.nome = nome;
        return this;
    }

    
}