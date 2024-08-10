import React from "react";
import DogCard from "./DogCard";
import "./dogs.css";
const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS");
    return (
        <>
            <section>
                {allDogs.map((item) => {
                    return (
                        <>
                            <div className="dogs-conatiner"></div>
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default Dogs;
