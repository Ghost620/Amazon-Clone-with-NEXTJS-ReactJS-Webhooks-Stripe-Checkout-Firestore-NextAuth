import Product from "./Product"

const ProductFeed = ( {products} ) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

        {
        products.map( ({id, title, price, description, category, image}) => (

          <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />

        ))
        }

        <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg" alt="" />

    </div>
  )
}

export default ProductFeed