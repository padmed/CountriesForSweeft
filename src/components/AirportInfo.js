import PropTypes from "prop-types";

const AirportInfo = ({ airportDetails }) => {
  return (
    <div>
      <span>{`${airportDetails.iata} - ${airportDetails.name} (${airportDetails.city})`}</span>
    </div>
  );
};

AirportInfo.propTypes = {
  airportDetails: PropTypes.object.isRequired,
};
export default AirportInfo;
