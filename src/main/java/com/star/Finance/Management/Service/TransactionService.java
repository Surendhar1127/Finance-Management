package com.star.Finance.Management.Service;

import com.star.Finance.Management.Model.Transaction;
import com.star.Finance.Management.Model.User;
import com.star.Finance.Management.Repository.TransactionRepo;
import com.star.Finance.Management.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private TransactionRepo transactionRepo;

    public Transaction addTransaction(Transaction transaction,Long id) {

        User user = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User with ID " + id + " not found."));
        Transaction transaction1=new Transaction();
        try{
            transaction1.setDescription(transaction.getDescription());
            transaction1.setType(transaction.getType());
            transaction1.setAmount(transaction.getAmount());
            transaction1.setCategory(transaction.getCategory());
            transaction1.setDateTime(LocalDateTime.now());
            transaction1.setUser(user);
            return transactionRepo.save(transaction1);
        }catch (Exception e){
            System.out.println("Exception From Transaction Adding :"+e);
        }

        return null;
    }

    public List<Transaction> getAll() {
        return transactionRepo.findAll();
    }

    public Optional<Transaction> getById(Long id) {
        return transactionRepo.findById(id);
    }

    public Transaction updateTransaction(Transaction transaction, Long id) {
        Transaction transaction1 = transactionRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction with ID " + id + " not found."));
        try {
            transaction1.setDescription(transaction.getDescription());
            transaction1.setType(transaction.getType());
            transaction1.setAmount(transaction.getAmount());
            transaction1.setCategory(transaction.getCategory());
            transaction1.setDateTime(transaction.getDateTime());
            return transactionRepo.save(transaction1);
        } catch (Exception e) {
            throw new RuntimeException("Failed to update transaction", e);
        }
    }

    public List<Transaction> getByUserId(Long id) {

        return transactionRepo.findByUserId(id);
    }
}
