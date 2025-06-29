import { type NextRequest, NextResponse } from "next/server";

// Tipos específicos
interface Testimonial {
  id: number;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
}

// Simulación de base de datos en memoria
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    message:
      "¡Increíble trabajo! El amigurumi que pedí para mi hija quedó perfecto. La calidad es excepcional y llegó súper rápido.",
    rating: 5,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    message:
      "Excelente atención al cliente. Me ayudaron a personalizar el diseño exactamente como lo quería. ¡Muy recomendado!",
    rating: 5,
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Ana Martínez",
    message:
      "Los detalles son impresionantes. Se nota el amor y dedicación en cada puntada. Definitivamente volveré a comprar.",
    rating: 5,
    createdAt: "2024-01-08",
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const testimonial: Testimonial = {
      id: testimonials.length + 1,
      name: body.name,
      message: body.message,
      rating: body.rating,
      createdAt: new Date().toISOString().split("T")[0],
    };

    testimonials.unshift(testimonial);

    return NextResponse.json({
      success: true,
      message: "Testimonio agregado exitosamente",
      testimonial,
    });
  } catch (error) {
    console.error("Error al agregar el testimonio:", error);
    return NextResponse.json(
      { success: false, message: "Error al agregar el testimonio" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ testimonials });
}
