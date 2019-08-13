import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateEdit: false,
            txtid: this.props.id,
            txtname: this.props.name,
            txtprice: this.props.price,
            slCategoryId: this.props.categoryId
        }
    }
    
    deleteClick = (id) => {
        this.props.deleteProduct(id);
        
    }

    editClick = () => {
        
        this.setState({
            stateEdit: !this.state.stateEdit
        })
    }

    saveClick = (id, name, price, categoryId) => {
        this.props.editProduct(id, name, price, categoryId);
        this.setState({
            stateEdit: !this.state.stateEdit
        })
        
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value; 
        this.setState({
            [name] : value
        })
    }
    removeComma = (str) => {
        str = str.replace(/,/gi, "");
        return str;
    }

    displayDataRow = () => {
        if(this.state.stateEdit === true){
            return (
                <tr>
                    <td><img src={this.props.img} style={{width: 80, height: 80}} alt=""></img></td>
                    <td><input name="txtname" type="text" className="form-control" defaultValue={this.props.name} onChange={(event) => this.isChange(event)}/> </td>
                    <td><input name="txtprice" className="form-control" defaultValue={this.removeComma(this.props.price)} onChange={(event) => this.isChange(event)}/></td>
                    <td>
                        <select defaultValue={this.state.slCategoryId} name="slCategoryId" className="form-control" onChange={(event) => this.isChange(event)}>
                            { 
                                this.props.categoryData.map((value, key) => { 
                                    return (<option key={key}  value={value.id}>{value.name}</option>)
                                })
                            }
                        </select>
                    </td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={() => this.saveClick(this.state.txtid, this.state.txtname, this.state.txtprice, this.state.slCategoryId)}>Save</button>
                        </div>
                    </td>
                </tr>
            )
        }
        else
            return (
                <tr>
                    <td><img src={this.props.img} style={{width: 80, height: 80}} alt=""></img></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.price} vnd</td>
                    <td>{this.props.categoryName}</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-outline-warning" onClick={() => this.editClick()}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={()=> this.deleteClick(this.props.id)}>Delete</button>
                        </div>
                    </td>
                </tr>
            )
    }
    render() {
        
        return (
            this.displayDataRow()
        );
    }
}

export default ProductItem;