const ProductCard = ({ productData, customClass }) => {
    return (
        <>
            {
                productData.map((item) => (
                    <div className="col-lg-4 mb-3">
                        <div className={`card ${customClass}`}>
                            <img className="card-img-top" src={item.imageURL} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">
                                    {item.description}
                                </p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default ProductCard;