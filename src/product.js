const Book = ({addCount, ...props} ) => {
  return (
    <div className="book">
      <Image img={props.img} />
      <ProductName productName={props.productName} />
      <Price price={props.price} />
      <div>
      <button className="addToCart" onClick={addCount}>
      Add to Cart
       </button>
      </div>
    </div>
  );
};
const Image = (props) => {
  return (
    <img className="image" src={props.img} alt="" width={300} height={200} />
  );
};

const ProductName = (props) => {
  return (
    <h3>
      <p className="productName">
        <b>Name: </b>
        <i>{props.productName}</i>
      </p>
    </h3>
  );
};

const Price = (props) => {
  return (
    <h3>
      <p className="Price">
        <b>Price: </b>
        <i>{props.price}</i>
      </p>
    </h3>
  );
};


export default Book;
