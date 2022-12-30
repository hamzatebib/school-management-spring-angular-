package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.Universite;


@RepositoryRestResource
public interface UniversiteR extends JpaRepository<Universite, Long >{

}
