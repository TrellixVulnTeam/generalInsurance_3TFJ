package com.lti.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tbl_customer")
public class Customer {
	
	@Id
	@SequenceGenerator(name="customer_seq",initialValue = 100,allocationSize = 1)
	@GeneratedValue(generator = "customer_seq",strategy = GenerationType.SEQUENCE)
	
	int userId;
	String userName;
	String password;
	String mailId;
	String mobile;
	String location;
	
	@OneToMany(mappedBy = "customer",fetch = FetchType.EAGER)
	List<Vehicle> vehicles;
	
	@OneToMany(mappedBy = "customer")
	List<TravelInsurance> travelInsurances;
	
	@OneToMany(mappedBy = "customer")
	List<Insurance> insurance;

	@OneToMany(mappedBy = "customer")
	List<InsuranceDocument> insuranceDocuments;
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	@JsonIgnore
	public List<Vehicle> getVehicles() {
		return vehicles;
	}

	public void setVehicles(List<Vehicle> vehicles) {
		this.vehicles = vehicles;
	}
	
	@JsonIgnore
	public List<TravelInsurance> getTravelInsurances() {
		return travelInsurances;
	}

	public void setTravelInsurances(List<TravelInsurance> travelInsurances) {
		this.travelInsurances = travelInsurances;
	}
	
	@JsonIgnore
	public List<InsuranceDocument> getInsuranceDocuments() {
		return insuranceDocuments;
	}

	public void setInsuranceDocuments(List<InsuranceDocument> insuranceDocuments) {
		this.insuranceDocuments = insuranceDocuments;
	}
	@JsonIgnore
	public List<Insurance> getInsurance() {
		return insurance;
	}

	public void setInsurance(List<Insurance> insurance) {
		this.insurance = insurance;
	}
	
	

}
