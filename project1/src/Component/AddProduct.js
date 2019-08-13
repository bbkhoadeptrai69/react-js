import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state= {
            txtName: "",
            txtPrice: "",
            slCategoryId: "",
            image: ""
        }
        this.fileInput = React.createRef();
    }
    
    getNewData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    getImage = () => {
        this.setState({
            image: this.fileInput.current.files[0].name
        })
    }

    displayForm = ()=>{
        if(this.props.displayFormInsert === true){
            return (
                <div className="col-4">
                    <h3>Thêm mới sản phẩm</h3>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="nhập tên sản phẩm" name="txtName" onChange={(event) => this.getNewData(event)}/>
                        <hr />
                        <label>Giá sản phẩm</label>
                        <input type="text" className="form-control" placeholder="nhập giá sản phẩm" name="txtPrice" onChange={(event) => this.getNewData(event)}/>
                        <hr />
                        <label>Danh mục sản phẩm</label>
                        <select className="form-control" name="slCategoryId" onChange={(event) => this.getNewData(event)}>
                        <option value="">Lựa chọn</option>
                        {
                            this.props.categoryData.map((value) => {
                                return (
                                    <option value={value.id}>{value.name}</option>
                                )
                            })
                        }
                        </select>
                        <hr />
                        <label>Ảnh</label>
                        {/* <input ref={this.fileInput} type="file" className="form-control-file" name id placeholder aria-describedby="fileHelpId" onChange={() => this.getImage()}/> */}
                        <input className="form-control" name="txtAnh" onChange={(event) => this.getNewData(event)}/>
                        <br />
                        <button className="btn btn-outline-success" onClick={() => this.props.insertProduct(parseInt(this.props.productData[this.props.productData.length - 1].id) + 1, this.state.txtName, this.state.txtPrice, this.state.slCategoryId, this.state.txtAnh)}>Thêm mới</button>
                    </div>
                </div>
            )
        }
        else
            return <div></div>;

    }
    render() {
        return (
            
            this.displayForm()

        );
    }
}

export default AddProduct;