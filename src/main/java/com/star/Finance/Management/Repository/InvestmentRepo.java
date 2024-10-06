package com.star.Finance.Management.Repository;

import com.star.Finance.Management.Model.Investment;
import com.star.Finance.Management.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvestmentRepo extends JpaRepository<Investment,Long> {
    List<Investment> findByUserId(Long id);
}
