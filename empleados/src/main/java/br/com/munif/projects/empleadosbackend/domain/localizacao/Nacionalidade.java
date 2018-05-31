package br.com.munif.projects.empleadosbackend.domain.localizacao;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "nacionalidade")
@Audited
public class Nacionalidade extends BaseEntity {

    @Column(name = "descricao")
    private String descricao;


    public Nacionalidade(){

    }

    public String getDescricao(){
        return descricao;
    }
           
    public void setDescricao(String descricao){
        this.descricao=descricao;
    }

    public Nacionalidade descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    
}