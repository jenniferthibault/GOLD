import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The tab component
 */
const Tab = ({ sections }) => (
	<Fragment>{ sections }</Fragment>
);

Tab.propTypes = {
	/**
	 * sections: (partials)(4)
	 */
	sections: PropTypes.node.isRequired,
};

Tab.defaultProps = {};

export default Tab;