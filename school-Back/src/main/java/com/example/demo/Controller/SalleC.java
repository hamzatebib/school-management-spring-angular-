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

import com.example.demo.DAO.SalleR;
import com.example.demo.entities.Salle;




@CrossOrigin(origins = "http://localhost:4200")

@RestController
class SalleC {

  private final SalleR repository;

  SalleC(SalleR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheSalles")
  List<Salle> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addSalles")
	public Salle ajouter(@RequestBody Salle e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/Salles/{id}")
  Salle one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/Salles/{id}")
  Salle replaceSalle(@RequestBody Salle newSalle, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Salle -> {
    	    	  Salle.setCapacite(newSalle.getCapacite());
    	  Salle.setNom(newSalle.getNom());
        return repository.save(Salle);
      })
      .orElseThrow();
  }

  @DeleteMapping("/Salles/{id}")
  void deleteSalle(@PathVariable Long id) {
    repository.deleteById(id);
  }
}