package com.star.Finance.Management.Service;

import com.star.Finance.Management.Model.User;
import com.star.Finance.Management.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JwtService jwtService;


    public User resgister(User user){
        User savedUser=userRepo.save(user);
        return  savedUser;
    }

//    public String verify(User user) {
//        System.out.println("verify");
//        Authentication authentication=authenticationManager.
//                authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
//        System.out.println("verify11");
//     if(authentication.isAuthenticated()) {
//         return jwtService.generateToken();
//     }else {
//         return "fail";
//     }
//     }

    public String verify(User user) {
        System.out.println("Verifying user: " + user.getUsername());
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            System.out.println("Authentication successful for user: " + user.getUsername());
            return jwtService.generateToken(user.getUsername());
        } catch (AuthenticationException e) {
            System.out.println("Authentication failed for user: " + user.getUsername() + " - " + e.getMessage());
            return "fail";
        }
    }


    public Long getUserId(String username) {
        return userRepo.findIdByUsernameOrEmail(username);
    }
}
