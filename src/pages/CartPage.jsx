import { useState, useEffect } from 'react';
import PageTitleComp from "../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { removeItemFromCart } from "../redux/userCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import logo256 from '../assets/logo256.png'

function CartPage() {
    const [cartTotal, setCartTotal] = useState(0);
    const dispatch = useDispatch();
    const { userCart } = useSelector((state) => state);

    useEffect(() => {
        let total = 0;
        userCart.cartData.forEach((itm) => {
            total += itm.sellingPrice * itm.qty;
        })
        setCartTotal(total)
    }, [userCart.cartData]);

    return (
        <>
            <PageTitleComp title={'User Cart'} />
            <Container>
                <Row>
                    {(userCart.cartData.length > 0) ? <>
                        <Col xs={12} md={12} lg={12} className='mt-4 mb-4 p-5'>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userCart.cartData.map((itm, i) => (
                                        <tr key={itm._id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={'https://micro-store.s3.ap-south-1.amazonaws.com/' + itm.productImg} height={50} alt="Product img" />
                                            </td>
                                            <td>{itm.productName}</td>
                                            <td>{itm.qty}</td>
                                            <td>₹{itm.sellingPrice * itm.qty}</td>
                                            <td><button className='btn btn-sm btn-danger m-1' onClick={() => dispatch(removeItemFromCart(itm))}>Remove</button></td>
                                        </tr>
                                    ))}
                                    <tr style={{ backgroundColor: 'burlywood' }}>
                                        <td colSpan={4}>
                                            <p><strong>Total Amount</strong></p>
                                        </td>
                                        <td><p><strong>₹ {cartTotal}</strong></p></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </> : <>
                        <Col xs={12} md={12} lg={12} className='text-center mt-4 mb-4 p-5'>
                            <img src={logo256} alt="404 not Found" />
                            <h1 className='mt-5'>Your cart is Empty</h1>
                            <Link style={anchorCss} to="/">
                                Go to Home
                            </Link>
                        </Col>
                    </>}


                </Row>
            </Container>
        </>
    );
}

const anchorCss = {
    color: "blue",
    textDecoration: "none",
    fontSize: "20px"
};

export default CartPage;