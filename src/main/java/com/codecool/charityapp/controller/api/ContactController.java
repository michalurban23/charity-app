package com.codecool.charityapp.controller.api;

import com.codecool.charityapp.model.fc.Contact;
import com.codecool.charityapp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/contacts")
public class ContactController {


    @Autowired
    private ContactRepository contactRepository;

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public Contact getContact(@PathVariable Long id) {
        Optional<Contact> contactOptional = this.contactRepository.findById(id);
        if(contactOptional.isPresent()) {
            Contact contact = contactOptional.get();
            return contact;
        }
        else {
            throw new ResourceNotFoundException("contact", id);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Contact> getContacts() {

        List<Contact> contacts = (List<Contact>) this.contactRepository.findAll();
        //        if(contacts.isEmpty()) throw new ResourceNotFoundException("contact", -1L);
        return contacts;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Long createContact(@RequestBody Contact contact) {
        String name = contact.getName();
        if(name != null && !name.equals("")) {
            Contact savedContact = contactRepository.save(contact);
            return savedContact.getId();
        } else {
            throw new ResourceIsNotValidException("contact");
        }
    }

}
