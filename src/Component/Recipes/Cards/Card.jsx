import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";

import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {img, name, description, ingredients, time, calories} = card;
    
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-[331px] h-[200px]" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="font-bold text-xl">{name}</h2>
                    <p>{description}</p>
                    <h2 className='font-semibold'>Ingredients: {ingredients.length}</h2>
                    <ul>
                        {
                            ingredients.map((item, i) => <ul key={i}><li>{item}</li></ul>)
                        }
                    </ul>
                    <hr />
                    <div className="card-actions flex flex-col">
                        <div className='flex justify-between gap-6'>
                            <div className="flex items-center gap-1">
                                <IoMdTime />
                                <span>{time} minutes</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <RiFireLine />
                                <span>{calories} calories</span>
                            </div>
                        </div>
                       <button className="btn bg-[#0BE58A] font-semibold rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
};

export default Card;