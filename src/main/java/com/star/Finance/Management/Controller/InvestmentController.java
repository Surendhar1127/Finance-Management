package com.star.Finance.Management.Controller;

import com.star.Finance.Management.Model.Investment;
import com.star.Finance.Management.Service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/investment")
@CrossOrigin("*")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    @PostMapping("/add/{id}")
    public ResponseEntity<Investment> addInvestment(@RequestBody Investment investment, @PathVariable Long id){
        Investment investment1=investmentService.addInvestment(investment,id);
        return ResponseEntity.ok(investment);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Investment>> getAll(){
        List<Investment> investments=investmentService.getAll();
        return ResponseEntity.ok(investments);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<Investment>> getById(@PathVariable Long id){
        Optional<Investment> investment=investmentService.getById(id);
        return ResponseEntity.ok(investment);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Investment> update(@RequestBody Investment investment,@PathVariable Long id){
        Investment investment1=investmentService.update(investment,id);
        return ResponseEntity.ok(investment);
    }

    @GetMapping("/getByUser/{id}")
    public ResponseEntity<List<Investment>> getByUserId(@PathVariable Long id){
        List<Investment> investment=investmentService.getByUserId(id);
        return ResponseEntity.ok(investment);
    }
}
