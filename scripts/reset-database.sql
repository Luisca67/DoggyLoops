-- Script para limpiar base de datos y reiniciar secuencias
-- Usar la base de datos
\c doggyloops_db;

-- Limpiar todas las tablas (en orden correcto por dependencias)
TRUNCATE TABLE orders CASCADE;
TRUNCATE TABLE products CASCADE;
TRUNCATE TABLE categories CASCADE;
TRUNCATE TABLE testimonials CASCADE;
TRUNCATE TABLE contacts CASCADE;

-- Reiniciar todas las secuencias
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE orders_id_seq RESTART WITH 1;
ALTER SEQUENCE testimonials_id_seq RESTART WITH 1;
ALTER SEQUENCE contacts_id_seq RESTART WITH 1;

-- Verificar que las tablas están vacías
SELECT 'categories' as tabla, COUNT(*) as registros FROM categories
UNION ALL
SELECT 'products' as tabla, COUNT(*) as registros FROM products
UNION ALL
SELECT 'orders' as tabla, COUNT(*) as registros FROM orders
UNION ALL
SELECT 'testimonials' as tabla, COUNT(*) as registros FROM testimonials
UNION ALL
SELECT 'contacts' as tabla, COUNT(*) as registros FROM contacts;

-- Verificar que las secuencias están reiniciadas
SELECT 
    sequence_name,
    last_value,
    start_value
FROM information_schema.sequences 
WHERE sequence_schema = 'public'; 