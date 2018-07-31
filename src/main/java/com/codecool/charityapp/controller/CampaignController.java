package com.codecool.charityapp.controller;

import com.codecool.charityapp.model.campaign.Campaign;
import com.codecool.charityapp.service.CampaignService;
import com.codecool.charityapp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CampaignController {

    private CampaignService campaignService;
    private ContactService contactService;

    @Autowired
    public CampaignController(CampaignService campaignService, ContactService contactService) {

        this.campaignService = campaignService;
        this.contactService = contactService;
    }

    @GetMapping("/campaigns/{id}")
    public String showCampaign(@PathVariable Integer id, Model model) {
        model.addAttribute("campaign", campaignService.getCampaignById(id));
        return "campaigns_details";
    }

    @GetMapping("campaigns")
    public String getCampaigns(Model model) {
        model.addAttribute("campaigns", campaignService.index());
        return "campaigns";
    }

    @GetMapping("/campaigns/new")
    public String createCampaign(Model model) {
        model.addAttribute("campaign", new Campaign());
        return "campaigns_form";
    }

    @PostMapping("/campaigns")
    public String saveCampaign(Campaign campaign) {
        campaignService.saveCampaign(campaign);
        return "redirect:/campaigns/" + campaign.getId();
    }

    @GetMapping("/campaigns/edit/{id}")
    public String editCampaign(@PathVariable Integer id, Model model) {
        model.addAttribute("campaign", campaignService.getCampaignById(id));
        return "campaigns_form";
    }

    @GetMapping("/campaigns/delete/{id}")
    public String deleteCampaign(@PathVariable Integer id) {
        campaignService.deleteCampaign(id);
        return "redirect:/campaigns";
    }

    @GetMapping("/campaigns/{id}/contacts")
    public String editCampaignContacts(@PathVariable Integer id, Model model) {
        model.addAttribute("contacts", contactService.index());
        model.addAttribute("campaign", campaignService.getCampaignById(id));
        return "campaigns_contacts";
    }

    // @PostMapping
    // public String saveCampaignContacts(Campaign campaign) {
    //     TODO
        // return "redirect:/campaigns/" + campaign.getId();
    // }
}