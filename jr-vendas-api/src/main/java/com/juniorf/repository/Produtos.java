package com.juniorf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juniorf.model.Produto;

public interface Produtos extends JpaRepository<Produto, Long> {
	
}
