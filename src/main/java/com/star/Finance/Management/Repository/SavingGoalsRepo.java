package com.star.Finance.Management.Repository;

import com.star.Finance.Management.Model.SavingsGoal;
import com.star.Finance.Management.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavingGoalsRepo extends JpaRepository<SavingsGoal,Long> {
    List<SavingsGoal> findByUserId(Long id);
}
