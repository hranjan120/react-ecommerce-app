import PropTypes from "prop-types";
import { useEffect, useState } from 'react'


export default function OrdersComp(props) {
    const { childToParent, ordData } = props;
    const [orderData, setOrderData] = useState(null);
    useEffect(() => {
        setOrderData(ordData);
    }, [ordData])


    return (
        <>
            {orderData ?
                <div className="col-sm-6 mt-3">
                    <div className="card card-block p-3 card-shadowm">
                        <h5 className="card-title">#{orderData.oid}</h5>
                        <p className="card-text">23-jan-2022 <span style={{ float: 'right' }}>{orderData.status}</span>  </p>
                        <p>Item one +3 Items</p>
                        <h6>Item Total: <span style={{ float: 'right', color: 'green' }}>5678₹</span>  </h6>
                        <button className="btn btn-outline-dark btn-sm" onClick={() => childToParent(orderData)}>View Detail</button>
                    </div>
                </div> : ''}
        </>
    );
}

OrdersComp.propTypes = {
    ordData: PropTypes.object.isRequired,
    childToParent: PropTypes.func.isRequired
}