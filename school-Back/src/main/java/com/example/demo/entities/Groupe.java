package com.example.demo.entities;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.OneToMany;



@Entity

public class Groupe {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="CODE")
			private Long code;
		@Column(name="NOM")
			private String nom;
		/*@OneToMany (mappedBy="groupes",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
		private Collection<Etudiant> etudiants;*/
		public Long getCode() {
			return code;
		}
		public void setCode(Long code) {
			this.code = code;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public Groupe() {}
		public Groupe(Long c,String n) {
			this.code=c;
			this.nom=n;
		}
	/*	public Collection<Etudiant> getEtudiants() {
			return etudiants;
		}
		public void setEtudiants(Collection<Etudiant> etudiants) {
			this.etudiants = etudiants;
		}*/
}
