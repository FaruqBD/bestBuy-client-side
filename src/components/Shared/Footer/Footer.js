import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3" id="about">
                        <h5 className="text-uppercase">About Best Buy</h5>
                        <p>BestBuy is the first online cars classifieds website in Bangladesh. Easily and quickly buy and sell cars in Bangladesh.
                            You can easily find new and used cars for sale, as well as sell your vehicles online on www.bestbuy.com</p>

                        <p>If you want to buy a car in Bangladesh and only have a small budget, you will find the best choices on BestBuy.
                            From small city cars to 4x4 SUV's, we have thousands of vehicles, for any budget. Finding the right car has never been this easy. Find hundreds of makes including Toyota, Lexus, Hyundai, Mercedes-Benz and more. </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/"> Mobile : +880 1678 054 851</Link></li>
                            <li><Link to="/"> Email : info@bestbuy.com</Link></li>
                            <li><Link to="/"> Address : 20/21, Dhaka Cantonment, Dhaka-1206</Link></li>

                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">All Cars</Link></li>
                            <li><Link to="/dashboard">My Order</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                Copyright 2021 © <Link to="/">www.bestbuy.com</Link>
            </div>

        </footer>
    )
}
export default Footer