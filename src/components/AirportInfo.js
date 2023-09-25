import PropTypes from "prop-types";

const AirportInfo = ({ airportDetails }) => {
  return (
    <span>{`${airportDetails.iata} - ${airportDetails.name} (${airportDetails.city})`}</span>
  );
};

AirportInfo.propTypes = {
  airportDetails: PropTypes.object.isRequired,
};

export default AirportInfo;
