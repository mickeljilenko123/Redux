import React from 'react';

const Spinner = ({ size }) => {
    const styles = {
      width: size,
      height: size,
    };
    return <span style={styles} className="spinner" />;
  };
export default Spinner;