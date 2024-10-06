package com.star.Finance.Management.Repository;

import com.star.Finance.Management.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepo extends JpaRepository<Transaction,Long> {

    List<Transaction> findByUserId(Long id);
}
