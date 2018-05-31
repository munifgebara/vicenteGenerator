package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "endereco")
@Audited
public class Endereco extends BaseEntity {

    @Column(name = "descricao")
    private String descricao;
    @Column(name = "domicilio")
    private String domicilio;
    @Column(name = "direccion")
    private String direccion;


    public Endereco(){

    }

    public String getDescricao(){
        return descricao;
    }
           
    public void setDescricao(String descricao){
        this.descricao=descricao;
    }

    public Endereco descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public String getDomicilio(){
        return domicilio;
    }
           
    public void setDomicilio(String domicilio){
        this.domicilio=domicilio;
    }

    public Endereco domicilio(String domicilio) {
        this.domicilio = domicilio;
        return this;
    }

    public String getDireccion(){
        return direccion;
    }
           
    public void setDireccion(String direccion){
        this.direccion=direccion;
    }

    public Endereco direccion(String direccion) {
        this.direccion = direccion;
        return this;
    }

    
}