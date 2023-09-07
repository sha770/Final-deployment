import { Link } from 'react-router-dom';
import { Carousel, Container, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Container>
    <Carousel pause='hover' style = {{   backgroundColor: '#063970'}}>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/{product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {product.name} (₹{product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  );
};

export default ProductCarousel;
