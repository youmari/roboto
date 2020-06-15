import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll' , height:'800px' , scrollBehavior:'auto' }}>
            {props.children}
        </div>
    )
}

export default Scroll;