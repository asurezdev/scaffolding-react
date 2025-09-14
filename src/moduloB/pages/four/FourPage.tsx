import { getProductsAction } from "@/moduloB/actions/get-products.action";
import { ProductCard } from "@/moduloB/components/ProductCard";
import { useQuery } from "@tanstack/react-query";

export const FourPage = () => {

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsAction,
    staleTime: 1000 * 60 * 5
  });

  if (!products) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard
            id={product.id.toString()}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating.rate}
            reviewCount={product.rating.count}
            title={product.title}
            key={product.id}
          />
        </div>
      ))}
    </div>
  )
}
