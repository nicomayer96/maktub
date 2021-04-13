/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.maktub.model;

/**
 *
 * @author Nico
 */
public class Envio {
    Venta venta;
    private int IdEnvio;
    private String provincia;
    private String ciudad;
    private String calle;
    private int nro;
    private int tel;
    private int cp;
    private String mail;

    public Envio() {
    }

    public Envio(Venta venta, int IdEnvio, String provincia, String ciudad, String calle, int nro, int tel, int cp, String mail) {
        this.venta = venta;
        this.IdEnvio = IdEnvio;
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.calle = calle;
        this.nro = nro;
        this.tel = tel;
        this.cp = cp;
        this.mail = mail;
    }

    public Venta getVenta() {
        return venta;
    }

    public void setVenta(Venta venta) {
        this.venta = venta;
    }

    public int getIdEnvio() {
        return IdEnvio;
    }

    public void setIdEnvio(int IdEnvio) {
        this.IdEnvio = IdEnvio;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public int getNro() {
        return nro;
    }

    public void setNro(int nro) {
        this.nro = nro;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public int getCp() {
        return cp;
    }

    public void setCp(int cp) {
        this.cp = cp;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    @Override
    public String toString() {
        return "Envio{" + "\nventa=" + venta +
                ", \nIdEnvio=" + IdEnvio +
                ", \nprovincia=" + provincia +
                ", \nciudad=" + ciudad +
                ", \ncalle=" + calle +
                ", \nnro=" + nro +
                ", \ntel=" + tel +
                ", \ncp=" + cp +
                ", \nmail=" + mail + '}';
    }
    
    
}
