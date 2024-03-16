
import PropTypes from 'prop-types';
import { RiBold } from 'react-icons/ri';

const Carts = ({carts}) => {
    // console.log(carts)
    return (
        <div className="overflow-x-auto w-[400px]">
            <h1 className='text-xl  font-bold pb-4 mt-8 px-12'>Want to cook: {carts.length}</h1>
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
                                <td></td>
                                <td>{name}</td>
                                <td>{time}</td> 
                                <td>{calories} </td> 
                                <td><button className='btn bg-[#0BE58A] rounded-full'>Preparing</button></td> 
                            </tr>
                        )
                    })
                }
                </tbody> 
            </table>


            
            <h1 className='text-xl font-bold pb-4 mt-8 px-12'>Currently cooking: 02</h1>
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
                <tbody className='bg-[#28282808] py-4'>
                <tr>
                    <td>1</td> 
                    <td>Cy Ganderton</td> 
                    <td>20 minutes</td> 
                    <td>Littel, </td>
                </tr>
                </tbody> 
            </table>

            <div className='flex justify-end text-start gap-5 pr-5 font-semibold mt-4 text-[#282828CC]'>
                <div>
                    <p>Total Time = <br /> 45 minutes</p>
                </div>
                <div className=''>
                    <p>Total Calories = <br /> 1050 calories</p>
                </div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.object.isRequired
};

export default Carts;