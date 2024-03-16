
import PropTypes from 'prop-types';
import Cards from './Cards/Cards';
import Carts from './Carts/Carts';
import { useEffect, useState } from 'react';

const Recipes = () => {
    const [cards, setCards] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('./recipies.json')
          .then(res => res.json())
          .then(data => setCards(data))
    }, [])

    const handleWantToCook = (cart) => {
        const newCarts = [...carts, cart]
        setCarts(newCarts)
    }

    // const handleRemoveWantToCook = () => {
    //     console.log('clcic remove')
    // }

    return (
        <div>
            <div className='text-center my-24'>
                <h1 className='text-4xl font-bold'>Our Recipes</h1>
                <p className='tex-[#12132D99] pt-5 mx-auto lg:w-[690px]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                <div className='flex justify-between gap-6 mt-12'>
                    <div className=''>
                     <Cards cards={cards} handleWantToCook={handleWantToCook}></Cards>
                    </div>
                    <div>
                      <div className='border rounded-2xl text-center'>
                        <Carts carts={carts}></Carts>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {
    PropTypes
};

export default Recipes;