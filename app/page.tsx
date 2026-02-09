import { ProductGrid } from "@/components/features/product-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ShoppingCart, Package, Home as HomeIcon, Shirt, Star, TrendingUp, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

// Mock data for demonstration
const mockProducts = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 299.99,
    images: ["/placeholder.svg"],
    vendorId: "vendor1",
    vendor: { id: "vendor1", email: "vendor1@example.com", name: "Tech Store", role: "VENDOR" as const, createdAt: new Date() },
    createdAt: new Date()
  },
  {
    id: "2", 
    title: "Organic Coffee Beans",
    description: "Premium organic coffee beans sourced from sustainable farms.",
    price: 24.99,
    images: ["/placeholder.svg"],
    vendorId: "vendor2",
    vendor: { id: "vendor2", email: "vendor2@example.com", name: "Coffee Co", role: "VENDOR" as const, createdAt: new Date() },
    createdAt: new Date()
  },
  {
    id: "3",
    title: "Smart Watch Pro",
    description: "Advanced fitness tracking and health monitoring in a sleek design.",
    price: 199.99,
    images: ["/placeholder.svg"],
    vendorId: "vendor3",
    vendor: { id: "vendor3", email: "vendor3@example.com", name: "Gadget Hub", role: "VENDOR" as const, createdAt: new Date() },
    createdAt: new Date()
  },
  {
    id: "4",
    title: "Eco-Friendly Yoga Mat",
    description: "Sustainable, non-slip yoga mat made from recycled materials.",
    price: 49.99,
    images: ["/placeholder.svg"],
    vendorId: "vendor4",
    vendor: { id: "vendor4", email: "vendor4@example.com", name: "Green Living", role: "VENDOR" as const, createdAt: new Date() },
    createdAt: new Date()
  }
];

const categories = [
  {
    title: "Electronics",
    description: "Gadgets, devices, and tech accessories",
    icon: Package,
    color: "bg-blue-100 text-blue-600",
    href: "/electronics"
  },
  {
    title: "Home & Garden",
    description: "Furniture, decor, and outdoor items",
    icon: HomeIcon,
    color: "bg-green-100 text-green-600",
    href: "/home-garden"
  },
  {
    title: "Fashion",
    description: "Clothing, accessories, and footwear",
    icon: Shirt,
    color: "bg-purple-100 text-purple-600",
    href: "/fashion"
  },
  {
    title: "Sports & Outdoors",
    description: "Fitness equipment and outdoor gear",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
    href: "/sports"
  },
  {
    title: "Books & Media",
    description: "Books, music, movies, and games",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
    href: "/books"
  },
  {
    title: "Health & Beauty",
    description: "Skincare, makeup, and wellness products",
    icon: Shield,
    color: "bg-pink-100 text-pink-600",
    href: "/health"
  }
];

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and encrypted transactions"
  },
  {
    icon: Users,
    title: "Verified Vendors",
    description: "Trusted sellers with quality products"
  },
  {
    icon: TrendingUp,
    title: "Growing Marketplace",
    description: "New products added daily"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                  Discover Amazing
                  <span className="block text-primary-600">Products</span>
                </h1>
                <p className="text-lg lg:text-xl text-text-secondary max-w-2xl leading-relaxed">
                  Shop unique items from talented vendors. Support independent creators and find products you'll love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary shadow-medium hover:shadow-strong">
                  <Link href="/products" className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary-500">
                  <Link href="/sell">Start Selling</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary-500" />
                  <span>10,000+ Vendors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-accent-500" />
                  <span>50,000+ Products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-warning-400" />
                  <span>4.8 Rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-accent-200 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-surface rounded-2xl shadow-strong p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-secondary-100 rounded-lg"></div>
                  <div className="aspect-square bg-primary-100 rounded-lg"></div>
                  <div className="aspect-square bg-accent-100 rounded-lg"></div>
                  <div className="aspect-square bg-warning-100 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-2">Featured Products</h2>
              <p className="text-text-secondary">Handpicked items from our best vendors</p>
            </div>
            <Button variant="outline" asChild className="border-2 border-primary-500">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
          <ProductGrid products={mockProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Shop by Category</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Browse our wide selection of products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-strong transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-text-primary group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" asChild className="w-full border-2 border-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Link href={category.href}>Browse {category.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Start Selling?
              </h2>
              <p className="text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto">
                Join thousands of vendors who trust MarketPlace to grow their business. 
                Set up your shop in minutes and start reaching customers worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-accent-400 mx-auto mb-2" />
                <p className="text-white font-medium">Easy Setup</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-accent-400 mx-auto mb-2" />
                <p className="text-white font-medium">Low Fees</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-accent-400 mx-auto mb-2" />
                <p className="text-white font-medium">Global Reach</p>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-medium">
              <Link href="/sell" className="flex items-center">
                Become a Vendor
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
