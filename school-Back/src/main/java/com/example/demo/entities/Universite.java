package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;




@Entity

public class Universite {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="CODEUNV")
		private long codeUnv;
	@Column(name="NOMUNV")
		private String nomUnv;
	@Column(name="ADRESSEUNV")
	private String adresse;
	@ManyToOne
	@JoinColumn(name="idDEP")
	private Departement departement;
	public Universite() {}
	public Universite(Long c,String n,String a,Departement d) {
		this.codeUnv=c;
		this.nomUnv=n;
		this.adresse=a;
		this.departement=d;
	}
	public long getCodeUnv() {
		return codeUnv;
	}
	public void setCodeUnv(long codeUnv) {
		this.codeUnv = codeUnv;
	}
	public String getNomUnv() {
		return nomUnv;
	}
	public void setNomUnv(String nomUnv) {
		this.nomUnv = nomUnv;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Departement getDepartement() {
		return departement;
	}
	public void setDepartement(Departement departement) {
		this.departement = departement;
	}
	
}
