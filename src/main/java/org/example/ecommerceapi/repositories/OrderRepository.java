package org.example.ecommerceapi.repositories;

import org.example.ecommerceapi.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
