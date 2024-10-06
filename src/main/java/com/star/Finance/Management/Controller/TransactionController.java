package com.star.Finance.Management.Controller;

import com.star.Finance.Management.Model.Transaction;
import com.star.Finance.Management.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transaction")
@CrossOrigin("*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/add/{id}")
    public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction,@PathVariable Long id){
//        Transaction transaction1=transactionService.addTransaction(transaction,id);
        return ResponseEntity.ok(transactionService.addTransaction(transaction,id));
    }

    @GetMapping("/get")
    public ResponseEntity<List<Transaction>> getAll() {
        List<Transaction> transactions = transactionService.getAll();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<Transaction>> getById(@PathVariable Long id) {
        Optional<Transaction> transaction = transactionService.getById(id);
        return ResponseEntity.ok(transaction);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Transaction> updateTransaction(@RequestBody Transaction transaction, @PathVariable Long id) {
        Transaction updatedTransaction = transactionService.updateTransaction(transaction, id);
        return ResponseEntity.ok(updatedTransaction);
    }

    @GetMapping("/getByUser/{id}")
    public ResponseEntity<List<Transaction>> getByUserId(@PathVariable Long id) {
        List<Transaction> transaction = transactionService.getByUserId(id);
        return ResponseEntity.ok(transaction);
    }



}
