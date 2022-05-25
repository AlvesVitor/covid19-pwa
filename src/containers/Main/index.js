import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Painel'
import { ContainerStyled, ContinerVideo } from './style'

import Video from "assets/media/video.mp4"

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('Brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
       <ContinerVideo
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
      </ContinerVideo>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
      
    </ContainerStyled>
  )
}

export default memo(Main)
