package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.lti.entity.Customer;
import com.lti.entity.TravelInsurance;
import com.lti.entity.TravelInsurancePlan;

@Component
public class TravlePlanDaoImpl implements TravelPlanDao {

	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public TravelInsurancePlan addOrUpdate(TravelInsurancePlan tp) {
		TravelInsurancePlan travelPlanPersisted = null;
		try {
			travelPlanPersisted = em.merge(tp);
		} 
		catch (Exception e) {
			// TODO: handle exception
		}
		return travelPlanPersisted;
	}

	public TravelInsurancePlan searchTravelPlanById(int travelPlanId) {
		// TODO Auto-generated method stub
		return em.find(TravelInsurancePlan.class, travelPlanId);
	}

	public List<TravelInsurancePlan> viewAllTravelPlans() {
		// TODO Auto-generated method stub
		return em.createQuery("select ti from TravelInsurancePlan ti", TravelInsurancePlan.class).getResultList();
	}

}
