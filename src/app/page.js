
import { getAllAdminProducts } from '@/services/products';
import styles from './page.module.css'
import Listingname from './listingname';

export default async function Home() {
  const getAllProducts = await getAllAdminProducts();
  return (

    <Listingname item={getAllProducts.news} />

  )
}
