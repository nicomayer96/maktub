/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.maktub.dao;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Nico
 */
public class ConnectionManager {
    public static Connection obtenerConexion() throws Exception{
        String driver = "org.mariadb.jdbc.Driver";
        String url = "jdbc:mariadb://localhost:3306/id15211812_maktub?usePipelineAuth=false";
        String user = "id15211812_nicomayer";
        String pwd = "Tienda**4523";
        Class.forName(driver).newInstance();
        return DriverManager.getConnection(url, user, pwd);
    }
}
