'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Package, Search } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Navbar component
const Navbar = () => (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="text-xl font-bold text-blue-600">EShop</div>
                <div className="flex items-center space-x-8">
                    <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
                        <Package size={20} />
                        <span>Products</span>
                    </a>
                    <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                    </a>
                    <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
                        <User size={20} />
                        <span>Account</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
);

// SearchBar component
const SearchBar = ({ onSearch }) => (
    <div className="relative max-w-xl mx-auto mt-4">
        <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full"
            onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
);

// ProductCard component
const ProductCard = ({ product }) => (
    <Card className="h-full">
        <CardHeader>
            <CardTitle className="text-lg">{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="w-full h-48 bg-gray-100 rounded-md mb-4">
                <img
                    src={product.imageUrl} // Use the actual image URL from the product data
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div className="text-2xl font-bold text-blue-600">${product.price}</div>
            <div className="text-sm text-gray-500">{product.quantity} in stock</div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Add to Cart</Button>
        </CardFooter>
    </Card>
);

// ProductGrid component
const ProductGrid = ({ products }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
);

// Main EcommerceApp component
const EcommerceApp = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    // Fetch products from the backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Handle search input
    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(term.toLowerCase()) ||
            product.description.toLowerCase().includes(term.toLowerCase())
        );
        setProducts(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pt-20 pb-8 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to EShop</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our curated collection of premium products at competitive prices.
                    </p>
                </div>
                <SearchBar onSearch={handleSearch} />
                <ProductGrid products={products} />
            </main>
        </div>
    );
};

export default EcommerceApp;
