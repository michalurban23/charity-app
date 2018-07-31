package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.campaign.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Integer> {

}
