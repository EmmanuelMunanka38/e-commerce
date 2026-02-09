import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-secondary-50 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text-primary">MarketPlace</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Your trusted marketplace for quality products. Connect with amazing vendors and discover unique items.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-text-muted hover:text-primary-600 hover:bg-primary-50 transition-colors">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-muted hover:text-primary-600 hover:bg-primary-50 transition-colors">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-muted hover:text-primary-600 hover:bg-primary-50 transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-muted hover:text-primary-600 hover:bg-primary-50 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">All Products</Link></li>
              <li><Link href="/categories" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Categories</Link></li>
              <li><Link href="/deals" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Deals & Promotions</Link></li>
              <li><Link href="/new" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="/trending" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Trending Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Sell</h4>
            <ul className="space-y-3">
              <li><Link href="/sell" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Start Selling</Link></li>
              <li><Link href="/vendor" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Vendor Dashboard</Link></li>
              <li><Link href="/fees" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Fees & Pricing</Link></li>
              <li><Link href="/seller-guide" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Seller Guide</Link></li>
              <li><Link href="/success" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Help & Contact</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/support" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Customer Support</Link></li>
              <li><Link href="/shipping" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-text-secondary hover:text-primary-600 transition-colors text-sm">Returns & Refunds</Link></li>
            </ul>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-text-secondary text-sm">
                <Mail className="h-4 w-4" />
                <span>support@marketplace.com</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary text-sm">
                <Phone className="h-4 w-4" />
                <span>1-800-MARKET</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              &copy; 2025 MarketPlace. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-text-secondary hover:text-primary-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-text-secondary hover:text-primary-600 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-text-secondary hover:text-primary-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}