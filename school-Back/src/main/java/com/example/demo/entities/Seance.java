package com.example.demo.entities;

import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity

public class Seance {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")

		private Long id;
	@Column(name="DUREE")
		private long duree;
	/*@OneToMany (mappedBy="seance",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
			private Collection<Enseignat> enseignants;
	@OneToMany (mappedBy="seance",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Collection<Cours> cours;*/
	@ManyToOne
	@JoinColumn(name="idSal")
	private Salle salle;
	public Seance() {}
	public Seance(Long id,Long duree,Salle s) {
		this.id=id;
		this.duree=duree;
		this.salle=s;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getDuree() {
		return duree;
	}
	public void setDuree(long duree) {
		this.duree = duree;
	}
	/*public Collection<Enseignat> getEnseignants() {
		return enseignants;
	}
	public void setEnseignants(Collection<Enseignat> enseignants) {
		this.enseignants = enseignants;
	}
	public Collection<Cours> getCours() {
		return cours;
	}
	public void setCours(Collection<Cours> cours) {
		this.cours = cours;
	}*/
	public Salle getSalle() {
		return salle;
	}
	public void setSalle(Salle salle) {
		this.salle = salle;
	}
}
