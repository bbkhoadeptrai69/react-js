import './../App.css';
import Header from './Header';
import Search from './Search';
import ProductList from './ProductList';
import Footer from './Footer';
import ProductData from './ProductData';
import CategoryData from './CategoryData';
import React, { Component } from 'react';
import AddProduct from './AddProduct';
import {firebaseConnect} from './firebaseConnect';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      categoryData: [],
      searchCategory: "",
      txtSearch: "",
      displayFormInsert: false
    }
  }

  
  componentWillMount() {
    /**
     * LOADING DATA WITH LOCAL STOREAGE
     */
    // if(localStorage.getItem('ProductData') === null){
    //   localStorage.setItem('ProductData', JSON.stringify(ProductData));
    // }
    // else{
    //   let temp = JSON.parse(localStorage.getItem('ProductData'));
    //   this.setState({
    //     productData: temp
    //   })
    // }

    // if(localStorage.getItem('CategoryData') === null){
    //   localStorage.setItem('CategoryData', JSON.stringify(CategoryData));
    // }
    // else {
    //   let temp = JSON.parse(localStorage.getItem('CategoryData'));
      
    //   this.setState({
    //     categoryData: temp
    //   })
    // }
    

    /**
     * LOADING DATA WITH FIREBASE
     */
    var arr = [];
    firebaseConnect.database().ref('productData').once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
      //  console.log("key: " + childSnapshot.key);
      //  console.log( childSnapshot.val().name);
        let item = {};
        item["id"] = childSnapshot.val().id;
        item['name'] = childSnapshot.val().name;
        item['price'] = childSnapshot.val().price;
        item['img'] = childSnapshot.val().img;
        item['categoryId'] = childSnapshot.val().categoryId;
        arr.push(item);
        
      })

      if(arr !== null){
        this.setState({
          productData: arr
        })
      }
      
    })
  }

  getSelectSearch = (keySearch) => { 
    this.setState({
      searchCategory: keySearch
    })
  }

  getInputSearch = (keySearch) => {
    this.setState({
      txtSearch: keySearch
    })
    
  }

  setStateInsert = () => {
    this.setState({
      displayFormInsert: !this.state.displayFormInsert
    })
  }

  insertProduct = (id, name, price, categoryId, img) => {
    /**
     * HANDLE WITH LOCAL STORAGE
     */

    let item = {
      id: id,
      name: name,
      price: price,
      categoryId: categoryId,
      img: img
    }
    // let newData = this.state.productData;
    // newData.push(item);

    // this.setState({
    //   productData: newData
    // })

    // localStorage.setItem('ProductData', JSON.stringify(newData));


    /**
     * HANDLE WITH REALTIME FIREBASE
     */
    // firebaseConnect.database().ref("productData").once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    //firebaseConnect.database().ref("productData").push(item);


    var updates = {};
    updates['/productData/' + id] = item;

    firebaseConnect.database().ref().update(updates);
  }


  editProduct = (id, name, price, categoryId) => {
    let arrProductData = this.state.productData;
    let arrCategoryData = this.state.categoryData;
    arrProductData.map((item) => {
      if(parseInt(item.id) === parseInt(id)){
        item.name = name;
        item.price = price;
        arrCategoryData.map((value) => {
          if(parseInt(value.id) === parseInt(categoryId)){
            item.categoryId = categoryId;
            return 0;
          }
          return 0;
        })
      }
      return 0;
    })

    this.setState({
      productData: arrProductData
    })

    localStorage.setItem("ProductData", JSON.stringify(arrProductData));
    return <div></div>;
  }

  deleteProduct = (id) => {
    let arrData = this.state.productData;
    arrData.map((value, key) => {
      if(parseInt(value.id) === parseInt(id)){
        arrData.splice(key, 1);
        return 0;
      }
      return 0;
    })
    this.setState({
      productData: arrData
    })

    localStorage.setItem('ProductData', JSON.stringify(arrData));
  }

  render() {
    // console.log(this.state.productData);
    var result = [];
    // this.state.productData.map((value) => {
    //   console.log(value);
    //   // if(value.name.toLowerCase().indexOf(this.state.txtSearch.toLowerCase()) !== -1){
    //   //   if(this.state.searchCategory !== ""){
    //   //     if(value.categoryId.indexOf(this.state.searchCategory) !== -1){
    //   //       result.push(value);
    //   //     }
    //   //   }
    //   //   else{
    //   //     result.push(value);
    //   //   }
    //   // }
    //   // return 0;
    // })

    // console.log(this.state.productData);
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Search displayFormInsert={this.state.displayFormInsert} setStateInsert={() => this.setStateInsert()} categoryData={this.state.categoryData} getSelectSearch={(keySearch) => this.getSelectSearch(keySearch)} getInputSearch={(keySearch) => this.getInputSearch(keySearch)}></Search>
          <div className="row">
            <ProductList deleteProduct={(id) => this.deleteProduct(id)} editProduct = {(id, name, price, categoryId) => this.editProduct(id, name, price, categoryId)} productData={result} categoryData={this.state.categoryData}></ProductList>
            <AddProduct productData={result} categoryData={this.state.categoryData} insertProduct={(id, name, price, categoryId, img) => this.insertProduct(id, name, price, categoryId, img)} displayFormInsert={this.state.displayFormInsert}></AddProduct>
          </div>
          
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
