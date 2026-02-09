import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/types"
import Image from "next/image"
import { ShoppingCart, Star, Heart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-strong transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-surface/90 backdrop-blur-sm hover:bg-white text-text-secondary hover:text-error-500 transition-colors"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            New
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-text-primary line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.title}
          </CardTitle>
        </div>
        <CardDescription className="text-text-secondary line-clamp-2">
          {product.description?.substring(0, 80)}...
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? 'text-warning-400 fill-current' : 'text-text-muted'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-text-secondary">(4.0)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-text-primary">${product.price}</span>
            <span className="text-sm text-text-secondary line-through ml-2">$399.99</span>
          </div>
          <span className="text-xs text-text-secondary bg-secondary-100 px-2 py-1 rounded">
            by {product.vendor.name}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full btn-primary group-hover:btn-secondary transition-colors">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}