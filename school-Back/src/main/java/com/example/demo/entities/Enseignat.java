package com.example.demo.entities;




import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;




@Entity

public class Enseignat {	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="MATRICULE")
		private Long matricule;
	@Column(name="NOM")
		private String nom;
	@ManyToOne
	@JoinColumn(name="idS")
	private Seance seance;
	
	public Enseignat() {
		super();
	}
	public Enseignat(Long matricule, String nom, Seance seance) {
		super();
		this.matricule = matricule;
		this.nom = nom;
		this.seance = seance;
	}
	/*@OneToMany (mappedBy="codeDep",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Collection<Departement> departements;*/
	public Long getMatricule() {
		return matricule;
	}
	public void setMatricule(Long matricule) {
		this.matricule = matricule;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Seance getSeance() {
		return seance;
	}
	public void setSeance(Seance seance) {
		this.seance = seance;
	}
	/*public Collection<Departement> getDepartements() {
		return departements;
	}
	public void setDepartements(Collection<Departement> departements) {
		this.departements = departements;
	}*/
			

}
