import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    renderDataProduct = () =>{
        return (this.props.productData.map((item, key) => {
            var categoryName ="";
            this.props.categoryData.map((value) => {
                if(parseInt(value.id) === parseInt(item.categoryId)){
                    categoryName = value.name;
                    return 0;
                }
                return 0;
            })
            return (
                <ProductItem key={key} deleteProduct={(id) => this.props.deleteProduct(id)} editProduct={(id, name, price, categoryId, image) => this.props.editProduct(id, name, price, categoryId, image)} id={item.id} img={item.img} name={item.name} price={this.formatNumber(item.price)} categoryId={item.categoryId} categoryName={categoryName} categoryData={this.props.categoryData}></ProductItem>                
            )
        }))
    }

    render() {
        
        return (
            <div className="col">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDataProduct()}
                    </tbody>
                </table>
            </div>    
        );
    }
}

export default ProductList;