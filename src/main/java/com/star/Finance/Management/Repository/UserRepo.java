package com.star.Finance.Management.Repository;

import com.star.Finance.Management.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User,Long> {

    User findByUsernameOrEmail(String username, String email);

    @Query("SELECT u.id FROM User u WHERE u.username = :username OR u.email = :username")
    Long findIdByUsernameOrEmail(@Param("username") String username);

}
