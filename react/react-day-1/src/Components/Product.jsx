function Product({ product: { name, price, img } }) {
  return (
    <div className="product">
      <h1>{name}</h1>
      <p> $ {price}</p>
      <img src={img} alt="" />
    </div>
  );
}
export default Product;
