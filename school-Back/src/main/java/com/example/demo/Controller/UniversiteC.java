package com.example.demo.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.UniversiteR;
import com.example.demo.entities.Universite;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
class UniversiteC {

  private final UniversiteR repository;

  UniversiteC(UniversiteR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheUniversity")
  List<Universite> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addUniversity")
	public Universite ajouter(@RequestBody Universite e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/University/{id}")
 Universite one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/University/{id}")
  Universite replaceUniversite(@RequestBody Universite newUniversite, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Universite -> {
    	 
    	  Universite.setDepartement(newUniversite.getDepartement());
    	  Universite.setNomUnv(newUniversite.getNomUnv());
    	  Universite.setAdresse(newUniversite.getAdresse());
        return repository.save(Universite);
      })
      .orElseThrow();
  }

  @DeleteMapping("/University/{id}")
  void deleteUniversite(@PathVariable Long id) {
    repository.deleteById(id);
  }
}