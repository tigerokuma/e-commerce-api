package org.example.ecommerceapi.repositories;

import org.example.ecommerceapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username); // For authentication purposes
}
