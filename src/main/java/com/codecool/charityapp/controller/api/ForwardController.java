package com.codecool.charityapp.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping(value = "/fc/**/{[path:[^\\.]*}")
    public String redirect() {
        return "forward:/fc/index.html";
    }
}
