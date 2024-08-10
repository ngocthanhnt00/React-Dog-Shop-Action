import React from "react";
import DogCard from "./DogCard";
import "./dogs.css";
const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS");
    return (
        <>
            <section className="dogs-container">
                {allDogs.map((item) => {
                    return (
                        <>
                            <div key={DogCard.id}>
                                <DogCard
                                    id={item.id}
                                    name={item.name}
                                    breed={item.breed}
                                    description={item.description}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default Dogs;
