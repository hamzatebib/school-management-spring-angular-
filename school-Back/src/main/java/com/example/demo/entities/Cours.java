package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;




@Entity

public class Cours {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="CODEC")
		private Long codeC;
	@Column(name="LIBELLE")
		private String libelle;
	@ManyToOne
	@JoinColumn(name="idSC")
	private Seance seance;
	
	public Cours(Long codeC, String libelle, Seance seance) {
		super();
		this.codeC = codeC;
		this.libelle = libelle;
		this.seance = seance;
	}
	
	public Cours() {
		super();
	}

	public Long getCodeC() {
		return codeC;
	}
	public void setCodeC(Long codeC) {
		this.codeC = codeC;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public Seance getSeance() {
		return seance;
	}
	public void setSeance(Seance seance) {
		this.seance = seance;
	}
		

}
