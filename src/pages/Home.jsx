import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/Cartslice';
import { fetchProducts, STATUSES } from '../Redux/ProductSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2 style={{ fontWeight: 'bolder' }}>Loading...</h2>;
    }

    return (
        <div className='productsWrapper'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {products.map((product) => (
                        <div className="col mb-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} alt={product.title} className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <h5 className="card-text">${product.price}</h5>
                                    <button className="btn btn-primary" onClick={() => handleAdd(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
