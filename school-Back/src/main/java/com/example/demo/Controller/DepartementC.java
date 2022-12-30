package com.example.demo.Controller;

//import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.DepartementsR;
import com.example.demo.entities.Departement;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
class DepartementC {

  private final DepartementsR repository;

  DepartementC(DepartementsR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheepartement")
  List<Departement> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addepartement")
	public Departement ajouter(@RequestBody Departement e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/epartement/{id}")
  Departement one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/epartement/{id}")
  Departement replaceEnseignat(@RequestBody Departement newDepartement, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Departement -> {
    	 
    	
    	  Departement.setNomDep(newDepartement.getNomDep());
    	  Departement.setEnseignant(newDepartement.getEnseignant());
        return repository.save(Departement);
      })
      .orElseThrow();
  }

  @DeleteMapping("/epartement/{id}")
  void deleteDepartement(@PathVariable Long id) {
    repository.deleteById(id);
  }
}