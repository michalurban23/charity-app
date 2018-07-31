package com.codecool.charityapp.service;

import com.codecool.charityapp.model.campaign.Campaign;
import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class CampaignServiceImpl implements CampaignService {

    private CampaignRepository repo;

    @Autowired
    public CampaignServiceImpl(CampaignRepository repo) {

        this.repo = repo;
    }

    @Override
    public Campaign getCampaignById(Integer id) {

        return repo.findById(id).get();
    }

    @Override
    public Iterable<Campaign> index() {

        return repo.findAll();
    }

    @Override
    public Campaign saveCampaign(Campaign campaign) {

        return repo.save(campaign);
    }

    @Override
    public void deleteCampaign(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public Contact rollContact(Integer campaignId, Integer consultantId) {

        List<Contact> contacts = repo.findById(campaignId).get().getContacts();
        return contacts.get((int) (Math.random() * contacts.size()));
    }
}