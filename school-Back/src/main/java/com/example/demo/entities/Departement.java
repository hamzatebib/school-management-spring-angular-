package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity

public class Departement {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="CODEDEP")
		private long codeDep;
	@Column(name="NOMDEP")
		private String nomDep;
	@ManyToOne
	@JoinColumn(name="idE")
	private Enseignat enseignant;
	
	public Departement() {
		super();
	}
	public Departement(long codeDep, String nomDep, Enseignat enseignant) {
		super();
		this.codeDep = codeDep;
		this.nomDep = nomDep;
		this.enseignant = enseignant;
	}
	/*@OneToMany (mappedBy="departement",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Collection<Universite> universites;*/
	public long getCodeDep() {
		return codeDep;
	}
	public void setCodeDep(long codeDep) {
		this.codeDep = codeDep;
	}
	public String getNomDep() {
		return nomDep;
	}
	public void setNomDep(String nomDep) {
		this.nomDep = nomDep;
	}
	public Enseignat getEnseignant() {
		return enseignant;
	}
	public void setEnseignant(Enseignat enseignant) {
		this.enseignant = enseignant;
	}
	/*public Collection<Universite> getUniversites() {
		return universites;
	}
	public void setUniversites(Collection<Universite> universites) {
		this.universites = universites;
	}*/
	
}

