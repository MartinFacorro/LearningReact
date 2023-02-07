import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {


  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};


FirstApp.prototype = {
  title: PropTypes.string.isRequired // DEBE SER string
}