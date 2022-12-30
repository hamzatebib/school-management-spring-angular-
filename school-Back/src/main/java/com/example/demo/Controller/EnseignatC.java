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

import com.example.demo.DAO.EnseignatsR;
import com.example.demo.entities.Enseignat;






@CrossOrigin(origins = "http://localhost:4200")
@RestController
class EnseignatC {

  private final EnseignatsR repository;

  EnseignatC(EnseignatsR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheEnseignats")
  List<Enseignat> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addEnseignats")
	public Enseignat ajouter(@RequestBody Enseignat e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/Enseignats/{id}")
  Enseignat one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/Enseignats/{id}")
  Enseignat replaceEnseignat(@RequestBody Enseignat newEnseignat, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Enseignat -> {
    	
    	
    	  Enseignat.setNom(newEnseignat.getNom());
    	  Enseignat.setSeance(newEnseignat.getSeance());
        return repository.save(Enseignat);
      })
      .orElseThrow();
  }

  @DeleteMapping("/Enseignats/{id}")
  void deleteEnseignat(@PathVariable Long id) {
    repository.deleteById(id);
  }
}