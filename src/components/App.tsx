import React from "react";
import Chip from "./Chip";
import ItemCard from "./ItemCard";

const App = () => {
    return (
        <>
            <Chip text={"hhhhh"} color={"blue"} width={200} />
            <ItemCard
                name={"עגבנייה עסיסית"}
                description={"עגבנייה עסיסית שפשוט מתחשק לתת לה ביס"}
                imageUrl={"/tomato.jpg"}
                width={300}
                height={400}
            />
        </>
    )
}

export default App;
