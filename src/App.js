import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { data, category } from './Data';
import Fooddata from './Fooddata';
import Category  from './Category';

function App() {

  const menu = (cat) => {
    console.log(cat);
}

  return (
    <div>
      <Header />
      <Category category={category} menu={menu}/>
      <Fooddata food={data} />
    </div>
  );
}

export default App;
