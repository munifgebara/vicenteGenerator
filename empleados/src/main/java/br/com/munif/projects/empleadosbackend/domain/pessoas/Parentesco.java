package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "parentesco")
@Audited
public class Parentesco extends BaseEntity {

    @Column(name = "descricao")
    private String descricao;


    public Parentesco(){

    }

    public String getDescricao(){
        return descricao;
    }
           
    public void setDescricao(String descricao){
        this.descricao=descricao;
    }

    public Parentesco descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    
}