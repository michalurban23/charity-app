package com.codecool.charityapp.service;

import com.codecool.charityapp.model.campaign.Campaign;
import com.codecool.charityapp.model.person.contact.Contact;

public interface CampaignService {

    Campaign getCampaignById(Integer id);
    Iterable<Campaign> index();
    Campaign saveCampaign(Campaign campaign);
    void deleteCampaign(Integer id);
    Contact rollContact(Integer campaignId, Integer consultantId);
}