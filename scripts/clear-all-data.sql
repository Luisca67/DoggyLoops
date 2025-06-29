-- Script para limpiar todas las tablas de datos
-- ¡ADVERTENCIA! Este script eliminará TODOS los datos de las tablas

-- Eliminar datos en orden correcto (respetando foreign keys)
DELETE FROM orders;
DELETE FROM testimonials;
DELETE FROM products;
DELETE FROM categories;

-- Reiniciar las secuencias de ID
ALTER SEQUENCE orders_id_seq RESTART WITH 1;
ALTER SEQUENCE testimonials_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE categories_id_seq RESTART WITH 1;

-- Verificar que las tablas estén vacías
SELECT 'orders' as tabla, COUNT(*) as total FROM orders
UNION ALL
SELECT 'testimonials' as tabla, COUNT(*) as total FROM testimonials
UNION ALL
SELECT 'products' as tabla, COUNT(*) as total FROM products
UNION ALL
SELECT 'categories' as tabla, COUNT(*) as total FROM categories; 