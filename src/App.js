import './App.css';
import Header from './component/Header'
import Testimonial from './component/Testimonial';
import testimonial from './data.js';
function App() {
  
  return (
    <div className="App">
      <Header />
      <Testimonial reviewData = {testimonial}></Testimonial>
    </div>
  );
}

export default App;
