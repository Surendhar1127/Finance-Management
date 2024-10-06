package com.star.Finance.Management.Service;

import com.star.Finance.Management.Model.Investment;
import com.star.Finance.Management.Model.User;
import com.star.Finance.Management.Repository.InvestmentRepo;
import com.star.Finance.Management.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvestmentService {

    @Autowired
    private InvestmentRepo investmentRepo;
    @Autowired
    private UserRepo userRepo;

    public Investment addInvestment(Investment investment,Long id) {

        User user=userRepo.findById(id).orElseThrow(()->new RuntimeException("User not Found"));
        Investment investment1=new Investment();
        try{
            investment1.setName(investment.getName());
            investment1.setAmountInvested(investment.getAmountInvested());
            investment1.setCurrentValue(investment.getCurrentValue());
            investment1.setUser(user);
            return investmentRepo.save(investment1);

        }catch (Exception e){
            System.out.println("Adding is Failed");
        }
return  null;
    }

    public List<Investment> getAll() {
        return investmentRepo.findAll();
    }

    public Optional<Investment> getById(Long id) {
        return investmentRepo.findById(id);
    }

    public Investment update(Investment investment,Long id) {
        Investment investment1=investmentRepo.findById(id).orElseThrow(()->new RuntimeException("Investment is not found"));
        try{
            investment1.setName(investment.getName());
            investment1.setAmountInvested(investment.getAmountInvested());
            investment1.setCurrentValue(investment.getCurrentValue());
            return investmentRepo.save(investment1);
        }catch (Exception e){
            System.out.println("updation is Failed");
        }
        return null;
    }

    public List<Investment> getByUserId(Long id) {
        return investmentRepo.findByUserId(id);
    }
}
