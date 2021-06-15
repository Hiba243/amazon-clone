import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            <div className="home__row">
                <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
                <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            </div>
            <div className="home__row">
            <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            </div>
            <div className="home__row">
            <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            <Product title='The lean startup' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' />
            </div>
        </div>
    )
}

export default Home
