import React, { useState, useEffect } from 'react'
// import Skeleton from 'react-loading-skeleton';

const Products = () => {

    const [data, setDate] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setDate(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);


    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                {/* <Skeleton height={350}/> */}
            </div>
            <div className="col-md-3">
                {/* <Skeleton height={350}/> */}
            </div>
            <div className="col-md-3">
                {/* <Skeleton height={350}/> */}
            </div>
            <div className="col-md-3">
                {/* <Skeleton height={350}/> */}
            </div>
            </>
        );
    };

    const filterProduct =(cat) =>{
        const updatedList =data.filter ((x) => x.category === cat);
        setFilter(updatedList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2'onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Wemen's clothing")}>Wemen's Clothing</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Electronic")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latast Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
};

export default Products;