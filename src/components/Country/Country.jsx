import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area} = country;
    return (
        <div className='country'>
            <h4>{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>P: {population}</p>
            <p>A: {area}</p>
            
            
        </div>
    );
};

export default Country;