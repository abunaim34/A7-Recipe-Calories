import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Cards/Cards';
import Carts from './Carts/Carts';
import { useEffect, useState } from 'react';

const Recipes = () => {
    const [cards, setCards] = useState([])
    const [carts, setCarts] = useState([])
    const [recipes, setRecipes] = useState([])
    const [times, setTimes] = useState(0)
    const [calories, setCalories] = useState(0)

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
        setTimes(times + recipe.time)
        setCalories(calories + recipe.calories)
    }

    return (
        <div>
            <div className='text-center my-24'>
                <h1 className='text-4xl font-bold'>Our Recipes</h1>
                <p className='tex-[#12132D99] pt-5 mx-auto lg:w-[690px]'>Explore a tantalizing array of recipes, from savory classic to sweet delights. Let our diverse collection inspire your next culinary masterpiece. </p>
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-6 mt-12'>
                    <div>
                     <Cards cards={cards} handleWantToCook={handleWantToCook}></Cards>
                    </div>
                    <div>
                      <div className='border rounded-2xl text-center'>
                        <Carts carts={carts} handleRemoveWantToCook={handleRemoveWantToCook} recipes={recipes} times={times} calories={calories}></Carts>
                      </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;