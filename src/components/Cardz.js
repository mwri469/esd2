import React from 'react'
import CardItem from './CardItemz'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
              src='images/river.jpg'
              text='Fluvial geomorphology'
              label='Water'
              path='/services/fluv-geomorph'
              info='Expertise to provide councils and other organisations a deeper understanding of their river systems'
              />
              <CardItem
              src='images/box-culvert.jpg'
              text='Culvert design and analysis'
              label='Water'
              path='/services'
              info="With experience on working some of Aotearoa's biggest roading projects, we can assist with your stormwater needs"
              />
              <CardItem 
              src='images/code.jpg'
              text='Applied machine learning'
              label='Digital'
              path='/services'
              info='With a deep understanding of the AI transition, we can help your business be the most prepared for this revolution'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
              src='images/reservoir.jpg'
              text='Reservoir modelling'
              label='Energy'
              path='/services'
              info='From geothermal to oil and gas fields, we provide the expertise to maximise the production of your next project'
              />
              <CardItem
              src='images/hecras.jpg'
              text='Flood modelling'
              label='Water'
              path='/services'
              info='Deep experience in building complex models for organisations to help mitigate flood and climate change risk'
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards
