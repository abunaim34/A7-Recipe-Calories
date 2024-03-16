import PropTypes from 'prop-types';

const Carts = ({carts, handleRemoveWantToCook, recipes, times, calories}) => {
    return (
        <div className="overflow-x-auto lg:w-[400px]">
            <h1 className='text-xl  font-bold pb-4 mt-8 lg:px-12'>Want to cook: {carts.length}</h1>
            <hr className='mx-20'/>
            <table className="table table-xs table-pin-rows table-pin-cols mt-6">
                <thead>
                <tr>
                    <th></th> 
                    <td>Name</td> 
                    <td>Time</td> 
                    <td>Calories</td> 
                    <th></th> 
                </tr>
                </thead> 
                <tbody className='bg-[#28282808] mt-4'>
                {
                    carts.map((cart, index) => {
                        const {name, time, calories} = cart
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{time} minutes</td> 
                                <td>{calories} calories</td> 
                                <td><button onClick={() => handleRemoveWantToCook(cart)} className='btn bg-[#0BE58A] rounded-full'>Preparing</button></td> 
                            </tr>
                        )
                    })
                }
                </tbody> 
            </table>
            <div className='overflow-x-auto'>
                <h1 className='text-xl font-bold pb-4 mt-8 lg:px-12'>Currently cooking: {recipes.length}</h1>
                <hr className='mx-16'/>
                <table className="table table-xs table-pin-rows table-pin-cols mt-6">
                    <thead>
                    <tr>
                        <th></th> 
                        <td>Name</td> 
                        <td>Time</td> 
                        <td>Calories</td>  
                    </tr>
                    </thead> 
                    <tbody className='bg-[#28282808]'>
                    {
                        recipes.map((recipe, index) => {
                            const {name, time, calories} = recipe;
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td> 
                                    <td className='py-4'>{name}</td> 
                                    <td>{time} minutes</td> 
                                    <td>{calories} calories</td>
                                </tr>
                            )
                        })
                    }
                    </tbody> 
                </table>
            </div>
            <div className='flex justify-end text-start gap-5 pr-5 font-semibold mt-4 text-[#282828CC]'>
                <div>
                    <p>Total Time = <br /> {times} minutes</p>
                </div>
                <div className=''>
                    <p>Total Calories = <br /> {calories} calories</p>
                </div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.object.isRequired,
    handleRemoveWantToCook: PropTypes.func.isRequired,
    recipes: PropTypes.object.isRequired,
    times: PropTypes.object.isRequired,
    calories: PropTypes.object.isRequired,

};

export default Carts;