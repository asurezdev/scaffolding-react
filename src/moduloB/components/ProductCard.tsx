import { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
  className?: string;
}

export const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  discount,
  isNew,
  className,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <div className={cn(
      "group relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden animate-fade-in",
      "hover:scale-[1.02] transform-gpu",
      className
    )}>
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-card p-6">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {discount && (
            <Badge  className="text-xs font-bold">
              -{discount}%
            </Badge>
          )}
          {isNew && (
            <Badge  className="text-xs font-bold">
              NUEVO
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 group/heart"
        >
          <Heart 
            className={cn(
              "w-4 h-4 transition-all duration-200 group-hover/heart:scale-110",
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            )}
          />
        </button>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button
            className="flex-1"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            <ShoppingCart className="w-4 h-4" />
            {isLoading ? "Agregando..." : "Agregar"}
          </Button>
          <Button
            
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={cn(
              "w-4 h-4",
              isWishlisted ? "fill-current" : ""
            )} />
          </Button>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
    </div>
  );
};