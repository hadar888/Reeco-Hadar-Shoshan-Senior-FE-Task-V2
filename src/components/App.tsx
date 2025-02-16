import React from "react";
import Chip from "./Chip";
import ItemCard from "./ItemCard";
import Carousel from "./Carousel";

const App = () => {
    return (
        <>
            <Carousel step={20}>
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} />
                <ItemCard
                    name={"עגבנייה עסיסית"}
                    description={"עגבנייה עסיסית שפשוט מתחשק לתת לה ביס"}
                    imageUrl={"/tomato.jpg"}
                    width={300}
                    height={400}
                />
            </Carousel>
        </>
    )
}

export default App;
