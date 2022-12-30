package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.web.bind.annotation.CrossOrigin;



@Entity


public class Etudiant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="MATRICULE")
		private Long matricule;
	@Column(name="NOM")
		private String nom;
	@ManyToOne
	@JoinColumn(name="idG")
	private Groupe groupes;
	public Etudiant(Long matricule,String nom, Groupe g) {
		this.matricule=matricule;
		this.nom=nom;
		this.groupes=g;
	}
	public Etudiant() {}
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
	public Groupe getGroupes() {
		return groupes;
	}
	public void setGroupes(Groupe groupes) {
		this.groupes = groupes;
	}
			
}
