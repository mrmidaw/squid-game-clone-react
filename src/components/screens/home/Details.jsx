import React from "react";

export const Details = () => {
    return (
        <div className="absolute right-1 bottom-0 flex items-center text-white font-bold text-lg">
            <div
                className="pr-2"
                style={{ borderRight: '2px solid rgba(255,255,255, .3) ' }}
            >
                2021
            </div>

            <div
                className="px-2"
                style={{ borderRight: '2px solid rgba(255,255,255, .3) ' }}
            >
                1 SEASON
            </div>

            <div className="pl-2">
                <span className="bg-white text-black rounded-sm px-2 py- mr-2 ">
                    IMDb
                </span>
                <span>9.5</span>
            </div>
        </div>
    );
};