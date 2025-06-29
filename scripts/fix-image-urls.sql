-- Script para corregir las rutas de las imágenes en la tabla products
-- Convierte rutas como 'app\public\osito-teddy.png' a '/osito-teddy.png'

UPDATE products 
SET image_url = '/' || SUBSTRING(image_url FROM '[^\\\/]+$')
WHERE image_url LIKE '%app%public%';

-- O si prefieres hacerlo manualmente para cada producto:
-- UPDATE products SET image_url = '/osito-teddy.png' WHERE name = 'Osito Teddy Clásico';
-- UPDATE products SET image_url = '/unicornio.jpg' WHERE name = 'Unicornio Mágico';
-- UPDATE products SET image_url = '/gatito.jpg' WHERE name = 'Gatito Kawaii';
-- UPDATE products SET image_url = '/pulpo.jpg' WHERE name = 'Pulpo Arcoíris';
-- UPDATE products SET image_url = '/dragon.jpg' WHERE name = 'Dragón Amigable';
-- UPDATE products SET image_url = '/conejo.jpg' WHERE name = 'Conejito Primaveral';
-- UPDATE products SET image_url = '/sirena.jpg' WHERE name = 'Sirena Encantada';
-- UPDATE products SET image_url = '/elefante-bebe.jpg' WHERE name = 'Elefante Bebé'; 