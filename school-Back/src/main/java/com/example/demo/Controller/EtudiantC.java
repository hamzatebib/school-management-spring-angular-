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

import com.example.demo.DAO.EtudiantsR;
import com.example.demo.entities.Etudiant;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
class EtudiantC {

  private final EtudiantsR repository;

  EtudiantC(EtudiantsR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/afficheEtudiants")
  List<Etudiant> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addEtudiants")
	public Etudiant ajouter(@RequestBody Etudiant e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/Etudiants/{id}")
  Etudiant one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }
 
  @PutMapping("/Etudiants/{id}")
  Etudiant replaceEtudiant(@RequestBody Etudiant newEtudiant, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Etudiant -> {
    	 // Etudiant.setMatricule(newEtudiant.getMatricule());
    	
    	  Etudiant.setNom(newEtudiant.getNom());
    	  
    	  Etudiant.setGroupes(newEtudiant.getGroupes());
        return repository.save(Etudiant);
      })
      .orElseThrow();
  }

  @DeleteMapping("/Etudiants/{id}")
  void deleteEtudiant(@PathVariable Long id) {
    repository.deleteById(id);
    
  }
}