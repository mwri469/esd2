import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>The team:</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
              src='member_photos/agustin.jpeg'
              text='Agustin Soto'
              label='President'
              path='/team'
              />
              <CardItem
              src='member_photos/alyssa.jpeg'
              text='Alyssa Olsen'
              label='Marketing'
              path='/team'
              />
              <CardItem 
              src='member_photos/ankia.png'
              text='Ankia van Zyl'
              label='Marketing'
              path='/Team'
              />
              <CardItem 
              src='member_photos/ben.jpeg'
              text='Benjamin Woods'
              label='General Exec'
              path='/team'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
              src='member_photos/beth.jpg'
              text='Beth Cutler'
              label='General Exec'
              path='/team'
              />
              <CardItem
              src='member_photos/caroline.jpg'
              text='Caroline Beeson'
              label='Treasurer'
              path='/team'
              />
              <CardItem 
              src='member_photos/ellen.jpg'
              text='Ellen Park'
              label='Secretary'
              path='/team'
              />
              <CardItem
              src='member_photos/hannah.jpg'
              text='Hannah Hill-Marks'
              label='Marketing'
              path='/team'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
              src='member_photos/iris.jpg'
              text='Iris Wang'
              label='Adviser'
              path='/team'
              />

              <CardItem 
              src='member_photos/janny.jpg'
              text='Janny Jones'
              label='General Exec'
              path='/team'
              />
              <CardItem
              src='member_photos/martin.jpeg'
              text='Martin Wright'
              label='General Exec'
              path='/team'
              />
              <CardItem
              src='member_photos/niki.jpg'
              text='Niki Nakao'
              label='General Exec'
              path='/team'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
              src='member_photos/phyllis.jpeg'
              text='Phyllis Lan'
              label='Education'
              path='/team'
              />

              <CardItem 
              src='member_photos/soyeon.jpeg'
              text='So-Yeon Lee'
              label='Marketing'
              path='/team'
              />
              <CardItem
              src='member_photos/tessa.jpeg'
              text='Tessa Brunton'
              label='Vice President'
              path='/team'
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards
