"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Star, ShoppingBag, MessageCircle, Send, Upload, X, Sparkles, Gift, Users } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { fetchProducts, fetchTestimonials, createOrder, createTestimonial, type Amigurumi, type Testimonial, type OrderData } from "./lib/api"

// Función para convertir rutas de la base de datos a rutas web
const getImageUrl = (imageUrl: string | null): string => {
  if (!imageUrl) return "/placeholder.svg"
  
  // Si la ruta ya empieza con /, usarla directamente
  if (imageUrl.startsWith('/')) {
    return imageUrl
  }
  
  // Si no, agregar / al inicio
  return `/${imageUrl}`
}

export default function DoggyLoopsLanding() {
  const [products, setProducts] = useState<Amigurumi[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showTestimonialForm, setShowTestimonialForm] = useState(false)
  const [orderData, setOrderData] = useState<OrderData>({
    customer_name: "",
    email: "",
    phone: "",
    description: "",
  })
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    message: "",
    rating: 5,
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(true)

  // Cargar datos desde la API
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [productsData, testimonialsData] = await Promise.all([
          fetchProducts(),
          fetchTestimonials()
        ])
        setProducts(productsData)
        setTestimonials(testimonialsData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createOrder(orderData, selectedImage || undefined)
      alert("¡Pedido enviado exitosamente! Te contactaremos pronto.")
      setShowOrderForm(false)
      setOrderData({ customer_name: "", email: "", phone: "", description: "" })
      setSelectedImage(null)
    } catch (error) {
      console.error("Error al enviar el pedido:", error)
      alert("Error al enviar el pedido. Por favor, intenta de nuevo.")
    }
  }

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createTestimonial(testimonialData)
      alert("¡Gracias por tu testimonio!")
      setShowTestimonialForm(false)
      setTestimonialData({ name: "", message: "", rating: 5 })
      
      // Recargar testimonios
      const updatedTestimonials = await fetchTestimonials()
      setTestimonials(updatedTestimonials)
    } catch (error) {
      console.error("Error al enviar el testimonio:", error)
      alert("Error al enviar el testimonio. Por favor, intenta de nuevo.")
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#7B4A22] via-[#F7E6C4] to-[#FFF6E9] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FFF6E9] mx-auto mb-4"></div>
          <p className="text-[#FFF6E9] text-xl">Cargando DoggyLoops...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7B4A22] via-[#F7E6C4] to-[#FFF6E9]">
      {/* Navbar con logo y solo dos enlaces */}
      <header className="bg-[#7B4A22] shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo-doggyloops.png" alt="DoggyLoops Logo" width={48} height={48} className="rounded-full bg-[#FFF6E9] p-1 shadow-md" />
            <div>
              <h1 className="text-xl font-bold text-[#FFF6E9] tracking-wide">DoggyLoops</h1>
              <p className="text-xs text-[#F7B7A3]">Amigurumis con amor</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-[#FFF6E9] hover:text-[#F7B7A3] transition-colors font-medium text-lg">Catálogo</a>
            <a href="#testimonials" className="text-[#FFF6E9] hover:text-[#F7B7A3] transition-colors font-medium text-lg">Testimonios</a>
          </nav>
          <Button
            onClick={() => setShowOrderForm(true)}
            className="bg-[#F7B7A3] text-[#7B4A22] hover:bg-[#e89a8b] shadow-lg font-semibold"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Hacer Pedido
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Fondo decorativo suave */}
        <div className="absolute inset-0 w-full h-full z-0 hero-background">
          <Image
            src="/fondo-hero-section.jpg"
            alt="Fondo Hero Section"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-[#7B4A22]/60" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFF6E9]/80 rounded-full border border-[#F7B7A3] mb-8 shadow">
            <Sparkles className="w-4 h-4 text-[#7B4A22] mr-2" />
            <span className="text-sm font-medium text-[#7B4A22]">Amigurumis únicos hechos a mano</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFF6E9] drop-shadow-lg">
            Amigurumis que <span className="text-[#F7B7A3]">cobran vida</span>
          </h2>
          <p className="text-xl text-[#FFE6C7] mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            En DoggyLoops creamos muñecos de crochet personalizados con amor y dedicación. Cada amigurumi es una obra de arte única, tejida especialmente para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Button
              size="lg"
              onClick={() => setShowOrderForm(true)}
              className="bg-[#7B4A22] text-[#FFF6E9] hover:bg-[#4B2E13] text-lg px-10 py-4 rounded-full shadow-xl font-semibold"
            >
              <Gift className="w-5 h-5 mr-2" />
              Crear Mi Amigurumi
            </Button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#FFF6E9]/90 rounded-2xl p-6 shadow border border-[#F7E6C4]">
              <div className="text-3xl font-bold text-[#7B4A22] mb-2">{products.length}+</div>
              <div className="text-[#4B2E13]">Amigurumis creados</div>
            </div>
            <div className="bg-[#FFF6E9]/90 rounded-2xl p-6 shadow border border-[#F7E6C4]">
              <div className="text-3xl font-bold text-[#7B4A22] mb-2">100%</div>
              <div className="text-[#4B2E13]">Clientes satisfechos</div>
            </div>
            <div className="bg-[#FFF6E9]/90 rounded-2xl p-6 shadow border border-[#F7E6C4]">
              <div className="text-3xl font-bold text-[#7B4A22] mb-2">24h</div>
              <div className="text-[#4B2E13]">Respuesta promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#EAD6C0] backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#7B4A22] mb-4">¿Por qué elegir DoggyLoops?</h3>
            <p className="text-xl text-[#4B2E13] max-w-2xl mx-auto">
              Nos especializamos en crear amigurumis únicos que capturan la esencia de lo que imaginas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7B4A22] to-[#7B4A22] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Heart className="w-8 h-8 text-[#FFF6E9]" />
              </div>
              <h4 className="text-xl font-bold text-[#7B4A22] mb-3">Hecho con Amor</h4>
              <p className="text-[#4B2E13]">
                Cada puntada está llena de cariño y dedicación para crear algo verdaderamente especial.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7B4A22] to-[#7B4A22] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Sparkles className="w-8 h-8 text-[#FFF6E9]" />
              </div>
              <h4 className="text-xl font-bold text-[#7B4A22] mb-3">100% Personalizable</h4>
              <p className="text-[#4B2E13]">
                Diseñamos tu amigurumi exactamente como lo imaginas, con todos los detalles que desees.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7B4A22] to-[#7B4A22] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Users className="w-8 h-8 text-[#FFF6E9]" />
              </div>
              <h4 className="text-xl font-bold text-[#7B4A22] mb-3">Atención Personal</h4>
              <p className="text-[#4B2E13]">
                Te acompañamos en todo el proceso, desde la idea inicial hasta la entrega final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 bg-[#F7E6C4]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#7B4A22] mb-4">¡Nuestro Catálogo!</h3>
            <p className="text-xl text-[#4B2E13] max-w-2xl mx-auto">
              Explora algunos de nuestros diseños más populares o úsalos como inspiración para tu pedido personalizado
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#7B4A22] text-xl">Cargando productos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-[#FFF6E9] backdrop-blur-sm transform hover:scale-105"
                >
                  <div className="relative">
                    <Image
                      src={getImageUrl(product.image_url)}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-[#7B4A22] text-[#FFF6E9] border-0 shadow-lg">
                      {product.category?.name || "Sin categoría"}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-[#7B4A22] text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-[#4B2E13] leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#7B4A22]">
                        ${product.price}
                      </span>
                      <Button
                        onClick={() => setShowOrderForm(true)}
                        className="bg-[#7B4A22] text-[#FFF6E9] hover:bg-[#4B2E13] shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Personalizar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-[#FFF6E9] backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h3 className="text-4xl font-bold text-[#7B4A22] mb-4">Lo que dicen nuestros clientes</h3>
              <p className="text-xl text-[#4B2E13]">Historias reales de familias felices</p>
            </div>
            <Button
              onClick={() => setShowTestimonialForm(true)}
              variant="outline"
              className="border-2 border-[#F7B7A3] text-[#7B4A22] hover:bg-[#FFF6E9] bg-[#FFF6E9]/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Dejar Testimonio
            </Button>
          </div>

          {testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#7B4A22] text-xl">No hay testimonios disponibles</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border border-[#7B4A22]/60 shadow-lg bg-[#FFF6E9] backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-[#7B4A22]">{testimonial.name}</CardTitle>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F7B7A3] text-[#F7B7A3]" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#4B2E13] italic leading-relaxed">{testimonial.message}</p>
                    <p className="text-sm text-[#7B4A22] mt-4">
                      {new Date(testimonial.created_at).toLocaleDateString('es-ES')}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7B4A22] text-[#FFF6E9] py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#FFF6E9]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Image src="/logo-doggyloops.png" alt="DoggyLoops Logo" width={40} height={40} className="rounded-full" />
              </div>
              <div>
                <h4 className="text-3xl font-bold">DoggyLoops</h4>
                <p className="text-[#F7B7A3]">Amigurumis con amor</p>
              </div>
            </div>
            <p className="text-xl mb-8 text-[#F7B7A3]">Creando sonrisas, una puntada a la vez</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div>
                <h5 className="font-bold mb-3">Contacto</h5>
                <p className="text-[#F7B7A3]">info@doggyloops.com</p>
                <p className="text-[#F7B7A3]">+1 (555) 123-4567</p>
              </div>
              <div>
                <h5 className="font-bold mb-3">Horarios</h5>
                <p className="text-[#F7B7A3]">Lun - Vie: 9AM - 6PM</p>
                <p className="text-[#F7B7A3]">Sáb: 10AM - 4PM</p>
              </div>
              <div>
                <h5 className="font-bold mb-3">Síguenos</h5>
                <p className="text-[#F7B7A3]">@doggyloops</p>
                <p className="text-[#F7B7A3]">Facebook | Instagram</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F7B7A3] pt-8 text-center">
            <p className="text-[#F7B7A3]">© 2025 DoggyLoops. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#7B4A22] to-[#F7B7A3] text-[#FFF6E9] rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#FFF6E9]">Hacer Pedido Personalizado</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOrderForm(false)}
                  className="text-[#FFF6E9] hover:bg-[#F7B7A3]/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="customer_name">Nombre Completo</Label>
                  <Input
                    id="customer_name"
                    value={orderData.customer_name}
                    onChange={(e) => setOrderData({ ...orderData, customer_name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={orderData.email}
                    onChange={(e) => setOrderData({ ...orderData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={orderData.phone}
                    onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Descripción Detallada</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe cómo quieres tu amigurumi: colores, tamaño, características especiales, etc."
                    value={orderData.description}
                    onChange={(e) => setOrderData({ ...orderData, description: e.target.value })}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="image">Imagen de Referencia (opcional)</Label>
                  <div className="mt-2">
                    <input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image")?.click()}
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {selectedImage ? selectedImage.name : "Subir Imagen"}
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7B4A22] to-[#F7B7A3] hover:from-[#4B2E13] hover:to-[#7B4A22] shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Testimonial Form Modal */}
      {showTestimonialForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#7B4A22] to-[#F7B7A3] text-[#FFF6E9] rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#FFF6E9]">Dejar Testimonio</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTestimonialForm(false)}
                  className="text-[#FFF6E9] hover:bg-[#F7B7A3]/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="testimonialName">Tu Nombre</Label>
                  <Input
                    id="testimonialName"
                    value={testimonialData.name}
                    onChange={(e) => setTestimonialData({ ...testimonialData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Calificación</Label>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setTestimonialData({ ...testimonialData, rating: star })}
                        className="focus:outline-none transition-all duration-200 hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= testimonialData.rating ? "fill-[#F7B7A3] text-[#F7B7A3]" : "text-[#7B4A22]"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="testimonialMessage">Tu Experiencia</Label>
                  <Textarea
                    id="testimonialMessage"
                    placeholder="Cuéntanos sobre tu experiencia con nuestros amigurumis..."
                    value={testimonialData.message}
                    onChange={(e) => setTestimonialData({ ...testimonialData, message: e.target.value })}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7B4A22] to-[#F7B7A3] hover:from-[#4B2E13] hover:to-[#7B4A22] shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Testimonio
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
