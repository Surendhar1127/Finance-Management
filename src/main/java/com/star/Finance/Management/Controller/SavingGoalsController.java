package com.star.Finance.Management.Controller;


import com.star.Finance.Management.Model.SavingsGoal;
import com.star.Finance.Management.Service.SavingsGoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/savingGoals")
@CrossOrigin("*")
public class SavingGoalsController {

    @Autowired
    private SavingsGoalService savingsGoalService;

    @PostMapping("/add/{id}")
    public ResponseEntity<SavingsGoal> addGoals(@RequestBody SavingsGoal savingsGoal,
                                                @PathVariable Long id){
        SavingsGoal savingsGoal1=savingsGoalService.addGoals(savingsGoal,id);
        return ResponseEntity.ok(savingsGoal1);
    }

    @GetMapping("/get")
    public ResponseEntity<List<SavingsGoal>> getAll() {
        List<SavingsGoal> savingsGoals = savingsGoalService.getAll();
        return ResponseEntity.ok(savingsGoals);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<SavingsGoal>> getById(@PathVariable Long id) {
        Optional<SavingsGoal> savingsGoal = savingsGoalService.getById(id);
        return ResponseEntity.ok(savingsGoal);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SavingsGoal> update(@RequestBody SavingsGoal savingsGoal, @PathVariable Long id) {
        SavingsGoal updatedSavingsGoal = savingsGoalService.update(savingsGoal, id);
        return ResponseEntity.ok(updatedSavingsGoal);
    }

    @GetMapping("/getByUser/{id}")
    public ResponseEntity<List<SavingsGoal>> getByUserId(@PathVariable Long id) {
        List<SavingsGoal> savingsGoal = savingsGoalService.getByUserId(id);
        return ResponseEntity.ok(savingsGoal);
    }
}
