-- Script para limpiar la tabla products
-- ¡ADVERTENCIA! Este script eliminará TODOS los datos de la tabla products

-- Eliminar todos los registros de la tabla products
DELETE FROM products;

-- Reiniciar la secuencia del ID (opcional, pero recomendado)
ALTER SEQUENCE products_id_seq RESTART WITH 1;

-- Verificar que la tabla esté vacía
SELECT COUNT(*) as total_products FROM products; 