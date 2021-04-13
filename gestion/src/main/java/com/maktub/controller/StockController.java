/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.maktub.controller;

import com.maktub.dao.PrendaDao;
import com.maktub.model.Stock;
import com.maktub.view.StockView;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nico
 */
@RestController
@RequestMapping("/stock")
@CrossOrigin(origins= "https://files.000webhost.com")

public class StockController {
    
    @GetMapping
    public ResponseEntity <List<Stock>> readAll(@RequestParam(value="filtro") String filtro) throws Exception{
        try{    
            List<Stock> stock = new ArrayList();
            stock = PrendaDao.filtro(filtro);
            return new ResponseEntity(stock , HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
               
    @DeleteMapping
    public ResponseEntity delete(@RequestBody Stock stock) throws Exception{
        try{    
            
            PrendaDao.eliminarStock(stock);
            return new ResponseEntity(stock , HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping
    public ResponseEntity create(@RequestBody StockView stockView) throws Exception{
        try{            
            Stock s = new Stock(
                    stockView.getTipo(),
                    stockView.getCosto(),
                    stockView.getTalle(),
                    stockView.getMarca(),
                    stockView.getColor(),
                    stockView.getCantidad());
            PrendaDao.agregarPrenda(s);  
            return new ResponseEntity(s, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity("Error agregando stock" + e, HttpStatus.INTERNAL_SERVER_ERROR);
        
    }
    }

}   
