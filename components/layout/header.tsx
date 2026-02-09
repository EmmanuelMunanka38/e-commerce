import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-200 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              MarketPlace
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-text-secondary hover:text-primary-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-text-secondary hover:text-primary-600 transition-colors font-medium">
              Categories
            </Link>
            <Link href="/deals" className="text-text-secondary hover:text-primary-600 transition-colors font-medium">
              Deals
            </Link>
            <Link href="/sell" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">
              Start Selling
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <Input
              placeholder="Search products..."
              className="pl-10 w-80 border-secondary-300 bg-secondary-50 focus:border-primary-500 focus:ring-primary-200 transition-all"
            />
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button className="btn-primary shadow-soft hover:shadow-medium">
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-text-secondary hover:text-primary-600">
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}