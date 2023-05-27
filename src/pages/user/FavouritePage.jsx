import { PlusLg, DashLg, Heart } from 'react-bootstrap-icons';

function FavouritePage() {
    return (
        <>
            <div className="container">
                <h4>Your Favourite Products..</h4>

                <div className="row">


                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="food-card">
                            <div className="food-card_img">
                                <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                                <a href="#0"><Heart size={20} /></a>
                            </div>
                            <div className="food-card_content">
                                <div className="food-card_title-section">
                                    <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
                                </div>
                                <div className="food-card_bottom-section">
                                    <hr />
                                    <div className="space-between">
                                        <div className="food-card_price">
                                            <span>5.99₹</span>
                                        </div>
                                        <div className="food-card_order-count">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                                </div>
                                                <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue="0" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="food-card">
                            <div className="food-card_img">
                                <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                                <a href="#0"><Heart size={20} /></a>
                            </div>
                            <div className="food-card_content">
                                <div className="food-card_title-section">
                                    <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
                                </div>
                                <div className="food-card_bottom-section">
                                    <hr />
                                    <div className="space-between">
                                        <div className="food-card_price">
                                            <span>5.99₹</span>
                                        </div>
                                        <div className="food-card_order-count">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                                </div>
                                                <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue="0" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="food-card">
                            <div className="food-card_img">
                                <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                                <a href="#0"><Heart size={20} /></a>
                            </div>
                            <div className="food-card_content">
                                <div className="food-card_title-section">
                                    <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
                                </div>
                                <div className="food-card_bottom-section">
                                    <hr />
                                    <div className="space-between">
                                        <div className="food-card_price">
                                            <span>5.99₹</span>
                                        </div>
                                        <div className="food-card_order-count">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                                </div>
                                                <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue="0" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="food-card">
                            <div className="food-card_img">
                                <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                                <a href="#0"><Heart size={20} /></a>
                            </div>
                            <div className="food-card_content">
                                <div className="food-card_title-section">
                                    <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
                                </div>
                                <div className="food-card_bottom-section">
                                    <hr />
                                    <div className="space-between">
                                        <div className="food-card_price">
                                            <span>5.99₹</span>
                                        </div>
                                        <div className="food-card_order-count">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><DashLg color="green" size={15} /></button>
                                                </div>
                                                <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue="0" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><PlusLg color="green" size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    );
}

export default FavouritePage;
