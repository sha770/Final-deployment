import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Homeheader from '../components/new_components/Homeheader';
import Reviews from '../components/new_components/Review';
//import Reviews from '../components/new_components/Review';

const HomeScreen = () => {
  // work

  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

 // search  =   no :all products ?  yes : search products  
  return (
    <>
      <Homeheader />
      {!keyword ? ( <ProductCarousel />) : ( <Link to='/' className='btn btn-light mb-4'> {' '}   Go Back{' '} </Link> )} 
     

      {isLoading ? (  <Loader /> ) : error ? (  <Message variant='danger'>  {error?.data?.message || error.error} </Message>
      ) : (
        <>
          <Meta />
          <div style = {{margin : '2% 0 0 1%' ,  fontSize : '3rem'}}>Latest Products</div>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
          <Reviews />
        </>
      )}
    </>
  );
};

export default HomeScreen;