// unused
// import React, { PureComponent } from "react";
// import { withRouter } from "react-router-dom";

// class PassToMeMyRouterHistory extends PureComponent {
  
//   redirectToSignIn = () => {
//     const { history } = this.props;
//     if (history) {
//       // event.preventDefault();
//       localStorage.removeItem("token");
//       history.push("/signin")
//     };
//   };

//   render() {
//     const { history } = this.props;
//     console.log("hiasd")

//     return history ? (
//       <div onClick={this.redirectToSignIn}>Sign Out</div>
//     ) : (
//       <div>Oh, we did not get pathname! 🤔</div>
//     );
//   }
// }

// export default withRouter(PassToMeMyRouterHistory);
