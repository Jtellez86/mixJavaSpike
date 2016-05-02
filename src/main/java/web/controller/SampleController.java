package web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SampleController {

  @RequestMapping("hello/{name}")
  public String loadHomePage(Model m, @PathVariable String name) {
    m.addAttribute("name", name);
    return "home";
  }
}
