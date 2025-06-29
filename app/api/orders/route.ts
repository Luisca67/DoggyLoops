import { type NextRequest, NextResponse } from "next/server";

// Tipos específicos
interface Order {
  id: number;
  customerName: string | null;
  email: string | null;
  phone: string | null;
  description: string | null;
  image: File | null;
  createdAt: string;
  status: string;
}

// Simulación de base de datos en memoria
const orders: Order[] = [];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const order: Order = {
      id: orders.length + 1,
      customerName: formData.get("customerName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
      image: formData.get("image") as File, // En producción, esto se subiría a un servicio de almacenamiento
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    orders.push(order);

    return NextResponse.json({
      success: true,
      message: "Pedido creado exitosamente",
      orderId: order.id,
    });
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    return NextResponse.json(
      { success: false, message: "Error al crear el pedido" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ orders });
}
