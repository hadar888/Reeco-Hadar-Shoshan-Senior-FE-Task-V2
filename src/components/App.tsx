import React from "react";
import Chip from "./Chip";
import ItemCard from "./ItemCard";
import Carousel from "./Carousel";

const App = () => {
    return (
        <>
            <Carousel byItem={true} isHorizontal={true}>
                {/* <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} /> */}
                <ItemCard
                    name={"עגבנייה עסיסית"}
                    description={"עגבנייה עסיסית שפשוט מתחשק לתת לה ביס"}
                    imageUrl={"/tomato.jpg"}
                    width={300}
                    height={400}
                />
                <ItemCard
                    name={"עגבנייה עסיסית"}
                    description={"עגבנייה עסיסית שפשוט מתחשק לתת לה ביס"}
                    imageUrl={"/tomato.jpg"}
                    width={300}
                    height={400}
                />
                <ItemCard
                    name={"עגבנייה עסיסית"}
                    description={"עגבנייה עסיסית שפשוט מתחשק לתת לה ביס"}
                    imageUrl={"/tomato.jpg"}
                    width={300}
                    height={400}
                />
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
