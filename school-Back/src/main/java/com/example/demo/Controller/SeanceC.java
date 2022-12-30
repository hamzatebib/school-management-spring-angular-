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


import com.example.demo.DAO.SeanceR;
import com.example.demo.entities.Seance;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
class SeanceC {

  private final SeanceR repository;

  SeanceC(SeanceR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheseance")
  List<Seance> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addseance")
	public Seance ajouter(@RequestBody Seance e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/seances/{id}")
  Seance one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/seances/{id}")
  Seance replaceSeance(@RequestBody Seance newSeance, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Seance -> {
    	 
    	  Seance.setDuree(newSeance.getDuree());
    	  Seance.setSalle(newSeance.getSalle());
        return repository.save(Seance);
      })
      .orElseThrow();
  }

  @DeleteMapping("/seances/{id}")
  void deleteSeance(@PathVariable Long id) {
    repository.deleteById(id);
  }
}