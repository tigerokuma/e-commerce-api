const { faker } = require('@faker-js/faker');
const { Client } = require('pg');

// PostgreSQL connection configuration
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce_db',
    password: 'your_password',  // Replace with your actual password
    port: 5432,
});

const NUM_PRODUCTS = 1000;

async function seedDatabase() {
    try {
        await client.connect();
        console.log("Connected to the database.");

        // Generate and insert products
        for (let i = 0; i < NUM_PRODUCTS; i++) {
            const name = faker.commerce.productName();
            const description = faker.commerce.productDescription();
            const price = parseFloat(faker.commerce.price(5, 500, 2));
            const quantity = faker.number.int({ min: 1, max: 100 });

            // Use a placeholder image URL
            const imageUrl = `https://via.placeholder.com/400x300?text=${encodeURIComponent(name)}`;

            try {
                await client.query(
                    'INSERT INTO products (name, description, price, quantity, image_url) VALUES ($1, $2, $3, $4, $5)',
                    [name, description, price, quantity, imageUrl]
                );
                console.log(`Inserted product ${i + 1}`);
            } catch (insertErr) {
                console.error(`Error inserting product ${i + 1}:`, insertErr);
            }
        }

        console.log('Seeding complete');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await client.end();
        console.log("Database connection closed.");
    }
}

// Run the script
seedDatabase().catch((err) => {
    console.error('Unexpected error during seeding:', err);
    client.end();
});
