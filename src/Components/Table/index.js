import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {mapData} from '../CzechMap/data'
import { RegionContext } from '../../App'
import moment from 'moment'
import './styles.css'


const fetchData = async () => {
  return await axios.get('https://prace-mapa.herokuapp.com/sparql')
}


export const Table = () => {
  const {selectedRegion, sex, year} = useContext(RegionContext)
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchData().then(res => setData(res.data))
  }, [])

  const renderData = () => {
    const {salaryData, workData} = data

    let filteredSalaryData = salaryData.filter(item => (item.refArea === selectedRegion))
    filteredSalaryData = filteredSalaryData.filter(item => (item.sex === sex))
    filteredSalaryData = filteredSalaryData.filter(item => (moment(item.refPeriod).format('YYYY') === year))

    let filteredWorkData = workData.filter(item => (item.wrefArea === selectedRegion))
    filteredWorkData = filteredWorkData.filter(item => (moment(item.wrefPeriod).format('YYYY') === year))


    const renderData = {...filteredSalaryData[0], ...filteredWorkData[0]}
      return (
        <>
        <div className='row'>
          <span>Průměrná mzda</span><span>{renderData.prMzda} Kč</span>
        </div>
        <div className='row'>
          <span>Median mzda</span><span>{renderData.medianMzda} Kč</span>
        </div>
       <div className='row'>
          <span>Počet nezaměstnaných absolventů</span><span>{renderData.neumisteniUchazeciOZamestnaniAbsolventiMladistvi}</span>
        </div>
        <div className='row'>
          <span>Celkový počet nezaměstnaných</span><span>{renderData.neumisteniUchazeci}</span>
        </div>
        </>
      )
  }

  return (
    data ?
    <div className='table'>
      <div>
        <div className='row'>
          <span>Kraj</span><span>{mapData.states[selectedRegion].name}</span>
        </div>
        {
          renderData()
        }
      </div>
        <p className='disclaimer'>* počet nezaměstnaných absolventů a celkový počet nezaměstnaných jsou uváděné pro pohlaví „celkem“</p>
    </div> : <p>Loading data... please wait</p>
  )
}