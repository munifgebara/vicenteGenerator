package br.com.munif.projects.empleadosbackend.domain.pessoas;
import org.hibernate.envers.Audited;
import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "pessoa")
@Audited
public class Pessoa extends BaseEntity {

    @Column(name = "nome")
    private String nome;
    @Column(name = "sobrenome")
    private String sobreNome;
    @Column(name = "apelido")
    private String apelido;
    @Column(name = "datanascimento")
    private DateTime dataNascimento;
    @Column(name = "lugarnascimento")
    private String lugarNascimento;
    @Column(name = "foto")
    private Bytes foto;
    @Column(name = "fotocontenttype")
    private String fotoContentType;


    public Pessoa(){

    }

    public String getNome(){
        return nome;
    }
           
    public void setNome(String nome){
        this.nome=nome;
    }

    public Pessoa nome(String nome) {
        this.nome = nome;
        return this;
    }

    public String getSobreNome(){
        return sobreNome;
    }
           
    public void setSobreNome(String sobreNome){
        this.sobreNome=sobreNome;
    }

    public Pessoa sobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
        return this;
    }

    public String getApelido(){
        return apelido;
    }
           
    public void setApelido(String apelido){
        this.apelido=apelido;
    }

    public Pessoa apelido(String apelido) {
        this.apelido = apelido;
        return this;
    }

    public DateTime getDataNascimento(){
        return dataNascimento;
    }
           
    public void setDataNascimento(DateTime dataNascimento){
        this.dataNascimento=dataNascimento;
    }

    public Pessoa dataNascimento(DateTime dataNascimento) {
        this.dataNascimento = dataNascimento;
        return this;
    }

    public String getLugarNascimento(){
        return lugarNascimento;
    }
           
    public void setLugarNascimento(String lugarNascimento){
        this.lugarNascimento=lugarNascimento;
    }

    public Pessoa lugarNascimento(String lugarNascimento) {
        this.lugarNascimento = lugarNascimento;
        return this;
    }

    public Bytes getFoto(){
        return foto;
    }
           
    public void setFoto(Bytes foto){
        this.foto=foto;
    }

    public Pessoa foto(Bytes foto) {
        this.foto = foto;
        return this;
    }

    public String getFotoContentType(){
        return fotoContentType;
    }
           
    public void setFotoContentType(String fotoContentType){
        this.fotoContentType=fotoContentType;
    }

    public Pessoa fotoContentType(String fotoContentType) {
        this.fotoContentType = fotoContentType;
        return this;
    }

    
}