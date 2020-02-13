import React, { Component } from "react";
import { connect } from "react-redux";
import AddTotal from "../actions/AddTotal";
import SubtractTotal from "../actions/SubtractTotal";
import createHistory from "history/createBrowserHistory";
import "../styles/CartStyle.scss";

export class Cart extends Component {
  state = {
    stateTotal: 0
  };
  componentDidMount() {
    //helper to count the total cost of the items
    // const countTotal = (total, num) => {
    //   return total + num;
    // };

    // this.setState({ stateTotal: countTotal });

    //check to see if this array is empty
    if (JSON.parse(localStorage.getItem("cartArray").length !== 0)) {
      let itemArr = JSON.parse(localStorage.getItem("cartArray")).map(
        item => item.price
      );
      //add up amounts in total
      let totalAmount = 0;
      for (let i of itemArr) {
        totalAmount = parseInt(i) + totalAmount;
      }
      this.setState({ stateTotal: totalAmount });
      this.props.addTotal(totalAmount);
    } else {
      return (
        // <div>
        //   <h1>Cart is Empty</h1>
        // </div>
        null
      );
    }
    // let total = JSON.parse(localStorage.getItem("cartArray"))
    //   .map(item => item.price)
    //   .reduce(countTotal);
    // this.props.addTotal(total);
    // console.log(total);
  }

  // componentDidUpdate(prevProps, prevState, e) {
  //   if (prevState.stateTotal !== this.state.stateTotal) {
  //     console.log('pokemons state has changed.')
  //     const cartArray = JSON.parse(localStorage.getItem("cartArray"));
  //     let product_id = e.target.value;
  //     const idx = cartArray.findIndex(i => i.id == product_id);
  //     const newCartArray = cartArray.filter(item => item !== cartArray[idx]);
  //     let deletedItemPrice = cartArray[idx].price;
  //     this.setState(prevState => {
  //       return { stateTotal: prevState.stateTotal - deletedItemPrice };
  //     });
  //     console.log(this.state.stateTotal);
  //     this.props.subtractTotal(this.state.stateTotal);
  //   }
  // }

  handleClick = e => {
    const hist = createHistory();
    // ------------------- Deleting an item from localstorage ------------------------
    // get the array from localstorage, change the datatype from a string to a json obj
    const cartArray = JSON.parse(localStorage.getItem("cartArray"));
    // loop through the array and find the obj with a id that matches the one that the user clicked delete for
    let product_id = e.target.value;
    // remove that obj from the array in local storage
    // -------------- ISSUE: Since I am find the product based on id,
    // -------------- if 2 products were to have the same id, they would have the same idx
    // FIX: if product with the same id, increase the quantity when product is added the cart
    const idx = cartArray.findIndex(i => i.id == product_id);
    // console.log(cartArray[idx]);
    const newCartArray = cartArray.filter(item => item !== cartArray[idx]);
    console.log(newCartArray);
    // store the array back into localstorage
    localStorage.setItem("cartArray", JSON.stringify(newCartArray));

    //subtract from total
    let deletedItemPrice = cartArray[idx].price;
    console.log(typeof deletedItemPrice);
    // let subtractedTotal = this.state.stateTotal - deletedItemPrice
    this.setState(prevState => {
      return { stateTotal: prevState.stateTotal - deletedItemPrice };
    });
    console.log(this.state.stateTotal);
    this.props.subtractTotal(this.state.stateTotal);

    // this.props.history.push("/cart_items");
    this.forceUpdate();
    hist.go(0);
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    // when user clicks the add item to card button, add to localstorage
    // figure out a way to get items rendered on the cart page. Find the specfic item that the user added to cart
    // SHORT TERM SOLUTION: go through all the items in products and find the id that matches the one in localstorage,
    // render that to the cart page

    // OTHER TASKS
    // get the total of all the items in localstorage
    // get the total number of items in localstorage

    // FOR CHECKOUT
    // when the user clicks checkout make a post request to the backend,
    // store the items of a single order to the backend

    // const product = JSON.parse(localStorage.getItem("cartArray"));
    let product = localStorage.getItem("cartArray");
    // console.log(JSON.parse(product))
    product = JSON.parse(product);
    // console.log(product[0])

    return (
      <div className="main__container">
        <h1 className="cart__label">Your Cart</h1>
        {localStorage.getItem("cartArray")
          ? product.map((item, id) => (
              <div className="cart__item">
                <h1 className="item__name">{item.name}</h1>
                <h1 className="item__price">${item.price}</h1>
                {/* <h1 className="item__image">{item.image}</h1> */}
                <img className="item__image" src={item.image}></img>
                <button>+</button>
                <h3 className="item__quantity">Quantity: {item.quantity}</h3>
                <button>-</button>
                <button
                  className="item__delete"
                  onClick={this.handleClick}
                  value={item.id}
                >
                  Delete
                </button>
              </div>
            ))
          : null}
        <br />
        <h1 className="cart__total">Total: ${this.props.total}</h1>
        <button className="cart__checkout" onClick={this.handleCheckout}>
          Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total
});

const mapDispatchToProps = dispatch => ({
  addTotal: amount => dispatch(AddTotal(amount)),
  subtractTotal: amount => dispatch(SubtractTotal(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
