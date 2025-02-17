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

const SeconderyCarouselConatiner = styled.div(() => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
}));


const App = () => {
    return (
        <MainCarouselConatiner>
            <SeconderyCarouselConatiner>
                <Carousel byItem={false} isHorizontal={true}>
                    <Chip text={"דפדוף לפי כמות פיקסלים"} color={"blue"} width={500} />
                    <Chip text={"ניתן לדפדף גם בעזרת המקדלת"} color={"green"} width={500} />
                    <Chip text={"לוחצים על המעטפת המתאימה ואז על חצי המקלדת"} color={"yellow"} width={500} />
                    <Chip text={"בדיקה נעימה"} color={"purple"} width={500} />
                </Carousel>
                <Carousel byItem={false} isHorizontal={true}>
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
            </SeconderyCarouselConatiner>
            <SeconderyCarouselConatiner>
                <Carousel byItem={true} isHorizontal={true}>
                    <Chip text={"דפדוף לפי איברים"} color={"blue"} width={500} />
                    <Chip text={"כל דפדוף מעביר איבר אחד"} color={"#5757f2"} width={500} />
                    <Chip text={"איבר 3"} color={"#7d7de7"} width={500} />
                    <Chip text={"איבר 4 ואחרון"} color={"#adadf5"} width={500} />
                </Carousel>
                <Carousel byItem={true} isHorizontal={true}>
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
            </SeconderyCarouselConatiner>
        </MainCarouselConatiner>
    )
}

export default App;
