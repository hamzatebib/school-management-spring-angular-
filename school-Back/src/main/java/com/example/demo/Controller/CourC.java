package com.example.demo.Controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.CoursR;
import com.example.demo.entities.Cours;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class CourC {

  private final CoursR repository;

  CourC(CoursR repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/affichecour")
 public List<Cours> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]


  
  @PostMapping("/addcour")
	public Cours ajouter(@RequestBody Cours e) {
		return repository.save(e);}

  // Single item
  
  @GetMapping("/cour/{id}")
 public  Cours one(@PathVariable Long id) {
    
    return repository.findById(id).orElseThrow();
  }

  @PutMapping("/cour/{id}")
 public Cours replaceCours(@RequestBody Cours newCours, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Cours -> {
      
        Cours.setLibelle(newCours.getLibelle());
        Cours.setSeance(newCours.getSeance());
        return repository.save(Cours);
      })
      .orElseThrow();
  }

  @DeleteMapping("/cour/{id}")
  public void deleteCours(@PathVariable Long id) {
    repository.deleteById(id);
  }
}