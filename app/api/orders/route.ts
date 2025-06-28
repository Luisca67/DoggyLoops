import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const orders: any[] = []

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const order = {
      id: orders.length + 1,
      customerName: formData.get("customerName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      description: formData.get("description"),
      image: formData.get("image"), // En producción, esto se subiría a un servicio de almacenamiento
      createdAt: new Date().toISOString(),
      status: "pending",
    }

    orders.push(order)

    return NextResponse.json({
      success: true,
      message: "Pedido creado exitosamente",
      orderId: order.id,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error al crear el pedido" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ orders })
}
