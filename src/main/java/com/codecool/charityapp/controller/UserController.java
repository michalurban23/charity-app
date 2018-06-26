package com.codecool.charityapp.controller;

import com.codecool.charityapp.model.PasswordDTO;
import com.codecool.charityapp.model.message.Message;
import com.codecool.charityapp.model.user.User;
import com.codecool.charityapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/profile")
    public String editProfile(Model model, @AuthenticationPrincipal UserDetails userDetails) {

        System.out.println("hey");
        User user = userService.getUserByEmail(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        model.addAttribute("user", user);
        return "profile";
    }

    @PostMapping("/profile")
    public String saveData(User newData, @AuthenticationPrincipal UserDetails userDetails) {
        User oldData = userService.getUserByEmail(userDetails.getUsername());
        userService.updateUser(oldData, newData);
        return "redirect:/profile";
    }

    @PostMapping("/password")
    public String savePassword(PasswordDTO newPass, @AuthenticationPrincipal UserDetails userDetails, RedirectAttributes redirectAttributes) {
        User user = userService.getUserByEmail(userDetails.getUsername());
        newPass.setUser(user);
        Message message = userService.updatePassword(newPass);
        redirectAttributes.addFlashAttribute("message", message);
        return "redirect:/password";
    }

    @GetMapping("/password")
    public String changePassword(Model model, @AuthenticationPrincipal UserDetails userDetails) {

        User user = userService.getUserByEmail(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        model.addAttribute("passwordDTO", new PasswordDTO());
        return "password";
    }

    @GetMapping("/users/{id}")
    public String showUser(@PathVariable Integer id, Model model) {
        model.addAttribute("user", userService.getUserById(id));
        return "users_details";
    }

    @GetMapping("/users")
    public String index(Model model) {
        model.addAttribute("users", userService.index());
        return "users";
    }

    @GetMapping("/users/new")
    public String createUser(Model model) {
        model.addAttribute("user", new User());
        return "users_form";
    }

    @PostMapping("/users")
    public String saveUser(User user) {
        userService.saveUser(user);
        return "redirect:/users/" + user.getId();
    }

    @GetMapping("/users/edit/{id}")
    public String editUser(@PathVariable Integer id, Model model) {
        model.addAttribute("user", userService.getUserById(id));
        return "users_form";
    }

    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }
}