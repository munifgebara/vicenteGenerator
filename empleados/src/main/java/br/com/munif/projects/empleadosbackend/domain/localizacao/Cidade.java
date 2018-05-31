package br.com.munif.projects.empleadosbackend.domain.localizacao;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "cidade")
@Audited
public class Cidade extends BaseEntity {

    @Column(name = "nome")
    private String nome;
    @Column(name = "populacao")
    private Integer populacao;


    public Cidade(){

    }

    public String getNome(){
        return nome;
    }
           
    public void setNome(String nome){
        this.nome=nome;
    }

    public Cidade nome(String nome) {
        this.nome = nome;
        return this;
    }

    public Integer getPopulacao(){
        return populacao;
    }
           
    public void setPopulacao(Integer populacao){
        this.populacao=populacao;
    }

    public Cidade populacao(Integer populacao) {
        this.populacao = populacao;
        return this;
    }

    
}