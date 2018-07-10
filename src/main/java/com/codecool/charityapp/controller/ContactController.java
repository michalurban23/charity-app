package com.codecool.charityapp.controller;

import com.codecool.charityapp.model.contact.Contact;
import com.codecool.charityapp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactController {

    private ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {

        this.contactService = contactService;
    }

    @GetMapping("/contacts/{id}")
    public String showContact(@PathVariable Integer id, Model model) {
        model.addAttribute("contact", contactService.getContactById(id));
        return "contacts_details";
    }

    @GetMapping("/contacts")
    public String index(Model model) {
        model.addAttribute("contacts", contactService.index());
        return "contacts";
    }

    @GetMapping("/contacts/new")
    public String createContact(Model model) {
        model.addAttribute("contact", new Contact());
        return "contacts_form";
    }

    @PostMapping("/contacts")
    public String saveContact(Contact contact) {
        contactService.saveContact(contact);
        return "redirect:/contacts/" + contact.getId();
    }

    @GetMapping("/contacts/edit/{id}")
    public String editContact(@PathVariable Integer id, Model model) {
        model.addAttribute("contact", contactService.getContactById(id));
        return "contacts_form";
    }

    @GetMapping("/contacts/delete/{id}")
    public String deleteContact(@PathVariable Integer id) {
        contactService.deleteContact(id);
        return "redirect:/contacts";
    }
}