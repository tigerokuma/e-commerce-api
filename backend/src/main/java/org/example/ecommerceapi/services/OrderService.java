package org.example.ecommerceapi.services;

import org.example.ecommerceapi.models.Order;
import org.example.ecommerceapi.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(int id) {
        return orderRepository.findById(id);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }
}
