package web.controller;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

  @RequestMapping("/data")
  public String loadHomePage() {
    JSONObject object = new JSONObject();
    object.put("value", "hello");
    return object.toJSONString();
  }
}
