package org.example.ecommerceapi.repositories;

import org.example.ecommerceapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
