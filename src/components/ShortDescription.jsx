import React from "react";





const ShortDescription = ({header}) => {

    return (
        <div className=" mt-10 mb-6 ">
            <div className="grid grid-cols-1">
                <div className="text-center mx-2 h-auto">
                    <h1 className="text-custom-navy-sky text-6xl ">{header}</h1>
                </div>
            </div>
        </div>
    );

}


export default ShortDescription