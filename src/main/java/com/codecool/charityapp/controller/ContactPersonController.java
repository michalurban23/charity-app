package com.codecool.charityapp.controller;

import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactPersonController {

    private ContactService contactService;

    @Autowired
    public ContactPersonController(ContactService contactService) {

        this.contactService = contactService;
    }

    @GetMapping("/contactPersons/{id}")
    public String showContact(@PathVariable Integer id, Model model) {
        model.addAttribute("contact", contactService.getContactById(id));
        return "contacts_details";
    }

    @GetMapping("/contactPersons")
    public String index(Model model) {
        model.addAttribute("contacts", contactService.index());
        return "contacts";
    }

    @GetMapping("/contactPersons/new")
    public String createContact(Model model) {
        model.addAttribute("contact", new Contact());
        return "contacts_form";
    }

    @PostMapping("/contactPersons")
    public String saveContact(Contact contact) {
        contactService.saveContact(contact);
        return "redirect:/contactPersons/" + contact.getId();
    }

    @GetMapping("/contactPersons/edit/{id}")
    public String editContact(@PathVariable Integer id, Model model) {
        model.addAttribute("contact", contactService.getContactById(id));
        return "contacts_form";
    }

    @GetMapping("/contactPersons/delete/{id}")
    public String deleteContact(@PathVariable Integer id) {
        contactService.deleteContact(id);
        return "redirect:/contactPersons";
    }
}