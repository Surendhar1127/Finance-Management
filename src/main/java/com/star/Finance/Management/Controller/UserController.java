package com.star.Finance.Management.Controller;


import com.star.Finance.Management.Model.User;
import com.star.Finance.Management.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserService userService;

    private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);


    @PostMapping("/register")
    public User register(@RequestBody User user){
        user.setPassword(encoder.encode(user.getPassword()));
        return userService.resgister(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        System.out.println("user:"+user);
        return userService.verify(user);

    }

    @GetMapping("/getUserId")
    public Long getUserId(@RequestParam String userName){
        System.out.println("Username:"+userName);
        System.out.println("Id:"+userService.getUserId(userName));
        return userService.getUserId(userName);
    }
}
