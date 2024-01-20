
import './App.css';
import CustomFooter from './components/CustomFooter/CustomFooter';
import CustomHeader from './components/CustomHeader/CustomHeader';
import CustomMain from './components/CustomMain/CustomMain';

function App() {
  return (
    <div className="App">
      <CustomHeader/>
      <CustomMain
        title="Ejercicio React"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper sociosqu,
        fames nibh facilisis turpis pulvinar molestie mus nulla eros nisl,
        varius sem donec sagittis facilisi dictumst iaculis nascetur. "/>
      <CustomFooter text="2022"/>
    </div>
  );
}

export default App;
