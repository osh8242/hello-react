import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import LifeCycleSample from "./LifeCycleSample";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000",
//     lifeCycleVisible: true,
//   };

//   handlerClick = () => {
//     this.setState({ color: getRandomColor() });
//   };

//   handlerLifeCycleInvisible = () => {
//     this.setState({ lifeCycleVisible: false });
//   };

//   handlerLifeCycleVisible = () => {
//     this.setState({ lifeCycleVisible: true });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handlerClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;
