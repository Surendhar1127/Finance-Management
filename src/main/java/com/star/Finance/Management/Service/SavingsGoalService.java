package com.star.Finance.Management.Service;

import com.star.Finance.Management.Model.SavingsGoal;
import com.star.Finance.Management.Model.User;
import com.star.Finance.Management.Repository.SavingGoalsRepo;
import com.star.Finance.Management.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SavingsGoalService {

    @Autowired
    private SavingGoalsRepo savingGoalsRepo;
    @Autowired
    private UserRepo userRepo;

    public SavingsGoal addGoals(SavingsGoal savingsGoal, Long id) {
        User user=userRepo.findById(id).orElseThrow(()-> new RuntimeException("User not Found"));
        SavingsGoal savingsGoal1=new SavingsGoal();
        try{
           savingsGoal1.setGoalName(savingsGoal.getGoalName());
           savingsGoal1.setCurrentAmount(savingsGoal.getCurrentAmount());
           savingsGoal1.setTargetAmount(savingsGoal.getTargetAmount());
           savingsGoal1.setTargetDate(LocalDate.now());
           savingsGoal1.setUser(user);

           return savingGoalsRepo.save(savingsGoal1);
        }catch (Exception e){
            System.out.println("Not properly Added");
        }
        return null;
    }


    public List<SavingsGoal> getAll() {
        return savingGoalsRepo.findAll();
    }


    public Optional<SavingsGoal> getById(Long id) {
        return savingGoalsRepo.findById(id);
    }


    public SavingsGoal update(SavingsGoal savingsGoal, Long id) {
        SavingsGoal savingsGoal1 = savingGoalsRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Savings goal not found"));
        try {
            savingsGoal1.setGoalName(savingsGoal.getGoalName());
            savingsGoal1.setCurrentAmount(savingsGoal.getCurrentAmount());
            savingsGoal1.setTargetAmount(savingsGoal.getTargetAmount());
            savingsGoal1.setTargetDate(savingsGoal.getTargetDate());
            return savingGoalsRepo.save(savingsGoal1);
        } catch (Exception e) {
            throw new RuntimeException("Failed to update savings goal", e);
        }
    }

    public List<SavingsGoal> getByUserId(Long id) {
        return savingGoalsRepo.findByUserId(id);
    }
}
