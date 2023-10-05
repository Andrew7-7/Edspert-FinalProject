import React from "react";

const Typography = ({sizes,children,colors,bolds}) => {
    const styles = {
        fontSize: `${sizes}vw`,
        color: `${colors}`,
        fontWeight: `${bolds}` 
    }

  return <p style={styles}>{children}</p>;
}

export default Typography;