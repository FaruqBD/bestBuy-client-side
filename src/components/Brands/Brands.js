import React from 'react';
import Brand from '../Brand/Brand';
const topBrand= [
    {   "_id":"1",
        "name": "Toyota",
        "img":"https://i.ibb.co/ts5ZJYK/toyota.png"
    },
    {   "_id":"2",
        "name": "Nissan",
        "img":"https://i.ibb.co/x1QnpmN/nissan.png"
    },
    {   "_id":"3",
        "name": "Honda",
        "img":"https://i.ibb.co/FBWZ019/honda.png"
    },
    {   "_id":"4",
        "name": "Lexus",
        "img":"https://i.ibb.co/b6JYT0D/lexus.png"
    },
    {   "_id":"5",
        "name": "Hyundai",
        "img":"https://i.ibb.co/KVy1CPp/hyundai.png"
    },
    {   "_id":"6",
        "name": "Mercedez-Benz",
        "img":"https://i.ibb.co/syv2KB4/mercedes-benz.png"
    },
    {   "_id":"7",
        "name": "Mitsubishi",
        "img":"https://i.ibb.co/Thf5XGk/mitsubishi.png"
    },
    {   "_id":"8",
        "name": "Kia",
        "img":"https://i.ibb.co/QNWm3Dm/kia.png"
    }
]
const Brands = () => {
    return (
        <div id="top-brand" className=" text-center container my-5">
            <div className="col-lg-12 col-md-12 col-sm-12 my-5">
                <div className="section-head pb-40">
                    <h2>All Brands</h2>
                </div>
            </div>
            <div className="top-brand-container">
                {
                    topBrand.map(brand => <Brand
                        key={brand._id}
                        brand={brand}></Brand>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;