package com.example.demo.entities;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;



@Entity

public class Salle {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="NUM")

		private Long num;
	@Column(name="NOM")

	private String nom;
	@Column(name="CAPACITE")

	private Long capacite;
	public Salle(Long n,String nom,Long c) {
		num=n;this.nom=nom;capacite=c;
	}
	public Salle() {}
	
	/*@OneToMany (mappedBy="salle",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
			private Collection<Seance> seances;
*/
	public Long getNum() {
		return num;
	}

	public void setNum(Long num) {
		this.num = num;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Long getCapacite() {
		return capacite;
	}

	public void setCapacite(Long capacite) {
		this.capacite = capacite;
	}

	/*public Collection<Seance> getSeances() {
		return seances;
	}

	public void setSeances(Collection<Seance> seances) {
		this.seances = seances;
	}*/
}
