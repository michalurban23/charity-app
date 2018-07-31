package com.codecool.charityapp.controller;

import com.codecool.charityapp.model.campaign.Campaign;
import com.codecool.charityapp.service.CallService;
import com.codecool.charityapp.service.CampaignService;
import com.codecool.charityapp.service.ContactService;
import com.codecool.charityapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CampaignController {

    private CampaignService campaignService;
    private ContactService contactService;
    private UserService userService;
    private CallService callService;

    @Autowired
    public CampaignController(CampaignService campaignService, ContactService contactService, UserService userService, CallService callService) {

        this.campaignService = campaignService;
        this.contactService = contactService;
        this.userService = userService;
        this.callService = callService;
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

    @GetMapping("/campaigns/{id}/roll")
    public String rollContact(@PathVariable Integer id, Model model, @AuthenticationPrincipal UserDetails userDetails) {
        Integer userId = userService.getUserByEmail(userDetails.getUsername()).getId();
        model.addAttribute("campaign", campaignService.getCampaignById(id));
        model.addAttribute("contact", campaignService.rollContact(id, userId));
        return "campaigns_details";
    }
}