package com.juniorf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juniorf.model.Cliente;

public interface Clientes extends JpaRepository<Cliente, Long>{

}
