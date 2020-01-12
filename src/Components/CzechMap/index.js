import React, {useContext} from 'react'
import { mapData } from './data'
import { MapPath } from './path'
import { RegionContext } from '../../App'
import './styles.css'

export const CzechMap = () => {
  const handleClick = (e) => {
    toggleRegion(e.target.id)
  }

  
  const {selectedRegion, toggleRegion, setSex, sex, year, setYear} = useContext(RegionContext)

  return (
    <div className='map'>
    <div className='filter'>
      <label>Pohlaví
        <select onChange={(e) => setSex(e.target.value)} value={sex}>
          <option value='http://purl.org/linked-data/sdmx/2009/code#sex-M'>Muž</option>
          <option value='http://purl.org/linked-data/sdmx/2009/code#sex-F'>Žena</option>
          <option value='http://purl.org/linked-data/sdmx/2009/code#sex-T'>Celkem</option>
        </select>
      </label>
      <label>Rok
        <select onChange={(e) => setYear(e.target.value)} value={year}>
          <option value='2010'>2010</option>
          <option value='2011'>2011</option>
          <option value='2012'>2012</option>
        </select>
      </label>
    </div>
    <div className="map-cantainer">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    overflow="hidden"
  >
    {
      Object.keys(mapData.paths).map(path => <MapPath key={path} id={path} path={mapData.paths[path]} onClick={handleClick} selected={selectedRegion === path} />)
    }
  </svg>
  </div>
  </div>

  )
}