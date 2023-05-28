import { useState, useEffect } from 'react';
import PageTitleComp from "../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/userCartSlice";
import { PlusLg, DashLg } from 'react-bootstrap-icons';

function ProductDetailPage() {
    const [addedItem, setAddedItem] = useState([]);
    const [prodName, serProdName] = useState('Product Detail');
    const { prodSlug, prodSku } = useParams();
    const { productData, userCart } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleProduct({ prodSlug, prodSku }));
    }, []);

    useEffect(() => {
        if (productData.singleProductData.productName) {
            serProdName(productData.singleProductData.productName);
        }
    }, [productData.singleProductData]);

    useEffect(() => {
        setAddedItem(userCart.cartData);
    }, [userCart.cartData]);

    const checkItemQty = (itmId) => {
        const userCarts = [...addedItem];
        const chkQty = userCarts.find(a => a._id === itmId);
        if (chkQty) {
            return chkQty.qty;
        } else {
            return 0;
        }
    }

    return (
        <>
            <PageTitleComp title={prodName} />
            <Container>
                {productData && productData.singleProductData && productData.singleProductData.productName ? (
                    <Row>
                        <Col xs={6} md={6} lg={6} className='mt-5 mb-4 p-3'>
                            <img className='img-fluid' src={'https://micro-store.s3.ap-south-1.amazonaws.com/' + productData.singleProductData.productImg} alt="Logo 64" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className='mt-5 mb-4 p-3'>
                            <h4 className='mt-5'>{productData.singleProductData.productName}</h4>
                            <p className='mt-3'>Description: {productData.singleProductData.shortDesc}</p>
                            <p><strong>SKU: {productData.singleProductData.productSku}</strong></p>
                            <p><strong>₹: {productData.singleProductData.sellingPrice}</strong></p>
                            <div className="food-card_order-count" style={{ width: '150px' }}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button onClick={() => dispatch(removeFromCart(productData.singleProductData))} className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                    </div>
                                    <input type="text" className="form-control input-manulator" disabled={true} value={checkItemQty(productData.singleProductData._id)} />
                                    <div className="input-group-append">
                                        <button onClick={() => dispatch(addToCart(productData.singleProductData))} className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ) : (<>
                    <Row>
                        <Col xs={12} md={12} lg={12} className='mt-5 mb-4 p-3'>
                            <h3>No Product Found</h3>
                        </Col>
                    </Row>
                </>)}

            </Container>
        </>
    );
}

export default ProductDetailPage;
