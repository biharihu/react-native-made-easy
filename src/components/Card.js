import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import Styles from "../styles";

const Card = (props) => {
  const { style, children } = props;
  return <View style={[Styles.card, { ...style }]}>{children}</View>;
};

export default Card;

Card.propTypes = {
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
};
