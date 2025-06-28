-- Insertar categorías
INSERT INTO categories (name, description) VALUES
('Animales', 'Amigurumis de animales tiernos y adorables'),
('Fantasía', 'Criaturas mágicas y personajes fantásticos'),
('Marinos', 'Animales y criaturas del océano'),
('Personajes', 'Personajes de películas, series y anime'),
('Bebés', 'Amigurumis especiales para bebés y niños pequeños');

-- Insertar productos del catálogo
INSERT INTO products (name, description, price, image_url, category_id) VALUES
('Osito Teddy Clásico', 'Adorable osito de peluche tejido a mano con hilo de algodón suave. Perfecto para abrazar y acompañar en las noches.', 25.00, '/images/osito-teddy.jpg', 1),
('Unicornio Mágico', 'Unicornio colorido con cuerno dorado y melena arcoíris. Trae magia y fantasía a cualquier hogar.', 35.00, '/images/unicornio.jpg', 2),
('Gatito Kawaii', 'Tierno gatito con expresión dulce y colores pastel. Ideal para los amantes de los gatos.', 20.00, '/images/gatito-kawaii.jpg', 1),
('Pulpo Arcoíris', 'Pulpo multicolor con tentáculos suaves y ojos brillantes. Perfecto para decorar y jugar.', 30.00, '/images/pulpo-arcoiris.jpg', 3),
('Dragón Amigable', 'Dragón sonriente con alas extendidas y colores vibrantes. No da miedo, ¡solo quiere ser tu amigo!', 40.00, '/images/dragon-amigable.jpg', 2),
('Conejito Primaveral', 'Conejo suave con orejas largas y colores primaverales. Perfecto para celebrar la llegada de la primavera.', 22.00, '/images/conejito-primaveral.jpg', 1),
('Sirena Encantada', 'Hermosa sirena con cola brillante y cabello largo. Trae la magia del océano a tu hogar.', 38.00, '/images/sirena.jpg', 3),
('Elefante Bebé', 'Tierno elefante en tonos suaves, perfecto para bebés. Hipoalergénico y súper suave.', 28.00, '/images/elefante-bebe.jpg', 5);

-- Insertar algunos testimonios iniciales
INSERT INTO testimonials (name, message, rating, is_approved) VALUES
('María González', '¡Increíble trabajo! El amigurumi que pedí para mi hija quedó perfecto. La calidad es excepcional y llegó súper rápido.', 5, true),
('Carlos Rodríguez', 'Excelente atención al cliente. Me ayudaron a personalizar el diseño exactamente como lo quería. ¡Muy recomendado!', 5, true),
('Ana Martínez', 'Los detalles son impresionantes. Se nota el amor y dedicación en cada puntada. Definitivamente volveré a comprar.', 5, true),
('Luis Fernández', 'Pedí un unicornio personalizado para mi sobrina y quedó hermoso. La entrega fue puntual y el empaque muy cuidado.', 5, true),
('Carmen López', 'La calidad de los materiales es excelente. Mi hijo no se separa de su nuevo amigurumi. ¡Gracias por tanto cariño en cada detalle!', 5, true);

-- Insertar algunos pedidos de ejemplo
INSERT INTO orders (customer_name, email, phone, description, status, estimated_price) VALUES
('Pedro Sánchez', 'pedro@email.com', '+1234567890', 'Quiero un gato naranja con rayas blancas, ojos verdes y una sonrisa tierna. Tamaño mediano, aproximadamente 20cm de alto.', 'in_progress', 25.00),
('Laura Jiménez', 'laura@email.com', '+1234567891', 'Necesito un dragón morado con alas doradas para mi hijo. Que sea amigable y no dé miedo. Tamaño grande.', 'pending', 45.00),
('Roberto García', 'roberto@email.com', '+1234567892', 'Un osito igual al de la foto pero en color azul marino con detalles en blanco. Es para regalo de baby shower.', 'completed', 30.00);
