import React, {useState}  from 'react';
import {CzechMap} from './Components/CzechMap'
import {Table} from './Components/Table'
import './App.css';

export const RegionContext = React.createContext(null);
function App() {
  const [selectedRegion, setSelectedRegion] = useState("https://ruian.linked.opendata.cz/zdroj/vúsc/19")
  const [sex, setSex] = useState('http://purl.org/linked-data/sdmx/2009/code#sex-F')
  const [year, setYear] = useState('2012')

  const toggleRegion = (id) => {
    setSelectedRegion(id)
  }
  
  return (
    <RegionContext.Provider value={{selectedRegion, toggleRegion, sex, setSex, year, setYear}}>
      <div className="App">
          <h2>Počet nezaměstnaných absolventů a průměrná mzda v ČR</h2>
          <div className="container">
            <CzechMap />
            <Table />
          </div>
      </div>
    </RegionContext.Provider>
  );
}

export default App;
