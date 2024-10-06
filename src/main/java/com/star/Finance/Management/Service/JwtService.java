package com.star.Finance.Management.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private String secretKey="";

    public  JwtService(){
        try {
            KeyGenerator keyGenerator=KeyGenerator.getInstance("HmacSHA256");
            SecretKey sk=keyGenerator.generateKey();
            secretKey= Base64.getEncoder().encodeToString(sk.getEncoded());
            System.out.println("secretKey:"+secretKey);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public String generateToken(String username) {
        //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InN0YXIiLCJpYXQiOjE1MTYyMzkwMjJ9.coi_IeAaO6irRaY8sIV36iChIzzU3MkMOUpE78f92UA";


        Map<String,Object> claims=new HashMap<>();
        //builder() is method to create a new token
//claims() is a claimBuilder() method in JWT class used to create new claims
        return Jwts.builder()
                .claims()//claims contains user details
                .add(claims)//add new cliams to token
                .subject(username)//adding username to the claim
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 60*60*30))
                .and()
                .signWith(getKey())// while creating a token there signature will be created
                .compact();
    }
    private Key getKey() {

        byte[] keyBytes= Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String exxtractUsername(String token) {
        Claims claims = Jwts.parser()//Jwts.parser() creates a JwtParser instance.
                .setSigningKey(getKey())//Sets the key used to verify the JWT's signature.
                .build()
                .parseClaimsJws(token)//Parses the JWT token and retrieves the claims (payload) from it.
                .getBody();//Retrieves the body of the JWT, which contains the claims.

        String username = claims.getSubject();//Extracts the subject (username) from the claims.

        return username;

    }

    public boolean validToken(String token, UserDetails userDetails) {

        Jwts.parser()//Initiates a JWT parser.
                .setSigningKey(getKey())//Sets the key used to verify the JWT's signature.
                .build()
                .parse(token);//Parses and validates the token.
        return true;
    }



}
