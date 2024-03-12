import './Country.css' 

const Country = ({country}) => {
    console.log(country)
    const {name, flags}=country
    return (
        <div className="countryContainer">
        <div className="country">
            <img src={flags.png} alt="" />
            <h3>Name: {name.common} </h3>
        </div>
        </div>
    );
};

export default Country;