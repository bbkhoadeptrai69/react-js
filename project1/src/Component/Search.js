import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            searchCategory: "",
            txtSearch: ""
        }
    }
    
    isChangeSelect = (event) => {
        this.setState({
            searchCategory: event.target.value
        })
        this.props.getSelectSearch(event.target.value);
    } 

    isChangeInput = (event) => {
        this.setState({
            txtSearch: event.target.value
        })
        this.props.getInputSearch(event.target.value);
    } 
    
    displayButton = () => {
        if(this.props.displayFormInsert === true){
            return <button className="btn btn-outline-secondary mt-4 btn-block" onClick={() => this.props.setStateInsert()}>Đóng Lại</button>;
        }
        else{
            return <button className="btn btn-outline-primary mt-4 btn-block" onClick={() => this.props.setStateInsert()}>Thêm Mới Sản Phẩm</button>;
        }

    }
    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="form-group">
                    <label>Chọn category</label>
                    <select className="form-control" name="searchCategory" onChange={(event) => this.isChangeSelect(event)}>
                    <option value="">Lựa chọn</option>
                        {
                            this.props.categoryData.map((value, key) => {
                                return <option key={key} value={value.id}>{value.name}</option>
                            })
                        }
                    </select>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                    <label />
                    <input type="text" style={{marginTop: '8px'}} className="form-control" name="txtSearch" aria-describedby="helpId" placeholder="nhập từ khóa tìm kiếm..." onChange={(event) =>this.isChangeInput(event)}/>
                    <button className="btn btn-success btn-inline">Tìm kiếm</button>
                    </div>
                </div>
                <div className="col-3">
                    {this.displayButton()}
                </div>
            </div>

        );
    }
}

export default Search;