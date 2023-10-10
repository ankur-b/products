function HomePage(props:{products:product[]}){
  const {products} = props;
  return(
    <ul>
      {products.map(product=><li key={product.id}>{product.title}</li>)}
    </ul>
  )
}
export async function getStaticProps(){
  return {
    props : {
      products:[{id:'p1',title:'Product 1'},{id:'p2',title:'Product 2'}]
    }
  }
}
type product = {
  id:string,
  title:string,
  description:string
}
export default HomePage