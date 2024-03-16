import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Cards from './Cards/Cards';
import Carts from './Carts/Carts';
import { useEffect, useState } from 'react';

const Recipes = () => {
    const [cards, setCards] = useState([])
    const [carts, setCarts] = useState([])
    const [recipes, setRecipes] = useState([])
    // const [times, setTimes] = useState(0)

    useEffect(() => {
        fetch('./recipies.json')
          .then(res => res.json())
          .then(data => setCards(data))
    }, [])

    const handleWantToCook = (cart) => {
        const isExists = carts.find(c => c.recipe_id == cart.recipe_id)
        if(!isExists){
            const newCarts = [...carts, cart]
            setCarts(newCarts)
        }else{
            return toast.warn(" Already exsits !")
        }
    }

    const handleRemoveWantToCook = (recipe) => {
        const removewantToCook = carts.filter(cart => cart.recipe_id != recipe.recipe_id)
        setCarts(removewantToCook);
        const newRecipes = [...recipes, recipe]
        setRecipes(newRecipes)
        // const newTimes = times + recipe.time;
        // setTimes(newTimes)
    }

    return (
        <div>
            <div className='text-center my-24'>
                <h1 className='text-4xl font-bold'>Our Recipes</h1>
                <p className='tex-[#12132D99] pt-5 mx-auto lg:w-[690px]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-6 mt-12'>
                    <div className=''>
                     <Cards cards={cards} handleWantToCook={handleWantToCook}></Cards>
                    </div>
                    <div>
                      <div className='border rounded-2xl text-center'>
                        <Carts carts={carts} handleRemoveWantToCook={handleRemoveWantToCook} recipes={recipes}></Carts>
                      </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Recipes.propTypes = {
    PropTypes
};

export default Recipes;