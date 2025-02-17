import React from "react";
import Chip from "./Chip";
import ItemCard from "./ItemCard";
import Carousel from "./Carousel";
import styled from "styled-components";

const MainCarouselConatiner = styled.div(() => ({
    height: '100%',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#ebf1fb',
    fontFamily: '"Noto Sans Hebrew"',
    justifyContent: 'center',
    alignItems: 'center',
}));

const App = () => {
    return (
        <MainCarouselConatiner>
            <Carousel byItem={false} isHorizontal={true}>
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
                <Chip text={"hhhh דגד דגדג גגג h"} color={"blue"} width={500} />
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
        </MainCarouselConatiner>
    )
}

export default App;
