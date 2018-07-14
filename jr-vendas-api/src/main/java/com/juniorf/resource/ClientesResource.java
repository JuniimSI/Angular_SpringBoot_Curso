package com.juniorf.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juniorf.model.Cliente;
import com.juniorf.repository.Clientes;

@CrossOrigin
@RestController
@RequestMapping("/clientes")
public class ClientesResource {
	@Autowired
	private Clientes clientes;
	
	@GetMapping
	public List<Cliente> listar(){
		return clientes.findAll();
	}
	
	

}
