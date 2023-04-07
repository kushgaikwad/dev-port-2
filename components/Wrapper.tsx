import React from "react";

type Props = {
    children : any, 
    className: any
}

const Wrapper = (props : Props) => {
    return (
        <div
            className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
                props.className || ""
            }`}
        >
            {props.children}
        </div>
    );
};

export default Wrapper;