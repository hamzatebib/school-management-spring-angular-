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

import com.example.demo.DAO.GroupeR;
import com.example.demo.entities.Groupe;


@CrossOrigin(origins = "http://localhost:4200")

@RestController
class GroupeC {

  private final GroupeR repository;

  GroupeC(GroupeR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheGpr")
  List<Groupe> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addGpr")
	public Groupe ajouter(@RequestBody Groupe e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/Gpr/{id}")
  Groupe one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/Gpr/{id}")
  Groupe replaceGroupe(@RequestBody Groupe newGroupe, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Groupe -> {
    	  //
    	  
    	  Groupe.setNom(newGroupe.getNom());
    	
        return repository.save(Groupe);
      })
      .orElseThrow();
  }

  @DeleteMapping("/Gpr/{id}")
  void deleteGroupe(@PathVariable Long id) {
    repository.deleteById(id);
  }
}