import Productinfo from "@/app/productsinfo";
import { productById } from "@/services/products";



export async function generateMetadata({ params }) {
  const newsUrl = decodeURIComponent(params.details);
  const product = await productById(newsUrl);
  const productss = product.news[0]
  return {
    title: `${productss.newsTitle}`,
    description: `${productss.newsContent}}`,
    openGraph: {
      title: `${productss.newsTitle}}`,
      description: `${productss.newsContent}}`,
      images: productss.thumbnail ? [productss.thumbnail] : [],
    },
  }

}


export default async function ProductDetails({ params }) {
  const newsUrl = decodeURIComponent(params.details);
  const product = await productById(newsUrl);
  const productss = product.news[0]
  return (
    <Productinfo prod={productss} />
  )

}
