import { useState, useEffect } from 'react';
import PageTitleComp from "../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, PlusLg, DashLg } from 'react-bootstrap-icons';
import { fetchMainCategory, fetchProduct } from "../redux/productSlice";
import { addToCart, removeFromCart } from "../redux/userCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";


function ProductListPage() {
    const [addedItem, setAddedItem] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { prodCat } = useParams();
    const { productData, userCart } = useSelector((state) => state);

    useEffect(() => {
        if (productData && productData.mainCategoryData.length == 0) {
            dispatch(fetchMainCategory());
        }
        dispatch(fetchProduct(prodCat));
    }, []);

    const handleCatagery = (mainCatSlug) => {
        navigate(`/products/${mainCatSlug}`);
        dispatch(fetchProduct(mainCatSlug));
    }
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
            <PageTitleComp title={'Product List'} />
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3} className='mt-4 mb-4 p-5'>
                        <h5 className='ml-2'>Shop Category</h5>
                        <ul className="list-group">
                            {productData.mainCategoryData.map((itm) => (
                                <li onClick={() => { handleCatagery(itm.mainCatSlug) }} key={itm._id} className={`list-group-item cursor-pointer ${(prodCat === itm.mainCatSlug) ? 'active' : ''}`}>
                                    <ArrowRight color="blue" size={15} /> {itm.mainCatName}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={9} className='mt-4 mb-4 p-5'>
                        <Row>
                            {(productData.loading === true && productData.productData.length === 0) ? 'Loading...' : ''}
                            {(productData.error !== '') ? productData.error : ''}
                            {(productData && productData.productData.length > 0) ?
                                (productData.productData.map((itm) => (
                                    <div key={itm._id} className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="food-card">
                                            <div className="food-card_img">
                                                <img src={'https://micro-store.s3.ap-south-1.amazonaws.com/' + itm.productImg} alt="Product img" />
                                            </div>
                                            <div className="food-card_content">
                                                <div className="food-card_title-section">
                                                    <Link className="food-card_title" to={`/product/${itm.productSlug}/${itm.productSku}`}>
                                                        {itm.productName}
                                                    </Link>
                                                </div>
                                                <div className="food-card_bottom-section">
                                                    <hr />
                                                    <div className="space-between">
                                                        <div className="food-card_price">
                                                            <span>{itm.sellingPrice}₹</span>
                                                        </div>
                                                        <div className="food-card_order-count">
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <button onClick={() => dispatch(removeFromCart(itm))} className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                                                </div>
                                                                <input type="text" className="form-control input-manulator" disabled={true} value={checkItemQty(itm._id)} />
                                                                <div className="input-group-append">
                                                                    <button onClick={() => dispatch(addToCart(itm))} className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )))
                                : ''}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductListPage;
