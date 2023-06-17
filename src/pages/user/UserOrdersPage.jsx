import { useState, useEffect } from 'react';
import OrdersComp from "../../components/OrdersComp";

function UserOrdersPage() {
    const [orderData, setOrderData] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const getSingleOrderData = (dt) => {
        setSelectedOrder(dt);
    }
    useEffect(() => {
        setTimeout(() => {
            setOrderData([
                { oid: '6057860191880057', status: 'Processing' },
                { oid: '6002936276333636', status: 'Delivered' },
                { oid: '6016521577228302', status: 'Processing' },
                { oid: '5089030103594727', status: 'Ready' },
                { oid: '2679818645424071', status: 'Processing' },
            ])
        }, 2000)
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-sm-12 mt-3">
                    <h3>Orders</h3>
                    <p>{selectedOrder ? JSON.stringify(selectedOrder) : 'No order selected'}</p>
                </div>

                {orderData.length > 0 ? <>
                    {orderData.map((itm) => {
                        return (
                            <OrdersComp key={itm.oid} ordData={itm} childToParent={getSingleOrderData} />
                        )
                    })}
                </> : <h4 className='mt-3'>No Orders found</h4>}
            </div>

        </>
    );
}

export default UserOrdersPage;
