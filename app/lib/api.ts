const API_BASE_URL = "http://localhost:3001";

// Tipos de datos
export interface Amigurumi {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  categoryId: number;
  category?: {
    id: number;
    name: string;
    description: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  message: string;
  rating: number;
  is_approved: boolean;
  created_at: string;
}

export interface OrderData {
  customer_name: string;
  email: string;
  phone: string;
  description: string;
  estimated_price?: number;
  image_url?: string;
}

// Funciones para obtener datos
export const fetchProducts = async (): Promise<Amigurumi[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) {
      throw new Error("Error al obtener testimonios");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const createOrder = async (
  orderData: OrderData,
  image?: File
): Promise<any> => {
  try {
    const formData = new FormData();

    // Agregar datos del pedido
    Object.entries(orderData).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        formData.append(key, value.toString());
      }
    });

    // Agregar imagen si existe
    if (image) {
      formData.append("image", image);
    }

    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al crear el pedido");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const createTestimonial = async (testimonialData: {
  name: string;
  message: string;
  rating: number;
}): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testimonialData),
    });

    if (!response.ok) {
      throw new Error("Error al crear el testimonio");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating testimonial:", error);
    throw error;
  }
};
