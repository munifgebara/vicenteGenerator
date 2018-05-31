package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "contato")
@Audited
public class Contato extends BaseEntity {

    @Column(name = "descricao")
    private String descricao;
    @Column(name = "valor")
    private String valor;


    public Contato(){

    }

    public String getDescricao(){
        return descricao;
    }
           
    public void setDescricao(String descricao){
        this.descricao=descricao;
    }

    public Contato descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public String getValor(){
        return valor;
    }
           
    public void setValor(String valor){
        this.valor=valor;
    }

    public Contato valor(String valor) {
        this.valor = valor;
        return this;
    }

    
}