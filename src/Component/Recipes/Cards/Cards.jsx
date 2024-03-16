
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({cards, handleWantToCook}) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                cards.map((card, idx) => <Card key={idx} card={card} handleWantToCook={handleWantToCook}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
};

export default Cards;