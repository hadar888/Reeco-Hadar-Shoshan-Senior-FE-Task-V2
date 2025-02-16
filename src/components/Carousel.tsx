import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

interface CarouselContainerProps {
    $width: number;
}

const gapSize = 10;
const CarouselContainer = styled.div<CarouselContainerProps>(({ $width }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '15px',
    border: 'solid 2px #0064ff33',
    justifyContent: 'space-around',
    borderRadius: '20px',
    width: `${$width}px`,
    gap: `${gapSize}px`,
}));

const directionButtonWidth = 25;
const DirectionButton = styled.button(() => ({
    borderRadius: '15px',
    border: 'none',
    width: `${directionButtonWidth}px`,
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:not(:disabled)': {
        cursor: 'pointer',
    }
}));

const CarouselContent = styled.div(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '5px',
    // overflow: "hidden",
    overflowX: 'scroll',
}));

interface CarouselProps {
    children: React.ReactNode[];
    step: number;
}

const Carousel = (props: CarouselProps) => {
    const { children, step } = props;

    if (step <= 0) {
        throw new Error("The value must be a positive number.");
    }

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const firstItemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!firstItemRef.current) return;

        const contentSize = firstItemRef.current.clientWidth;
        const wrapperSize = (directionButtonWidth * 2) + (gapSize * 2)
        setContainerWidth(contentSize + wrapperSize);
    }, []);

    const isPrevDisabled = useMemo(() => {
        return scrollPosition <= 0;
    }, [scrollPosition]);

    const isNextDisabled = useMemo(() => {
        if (!containerRef.current) return;

        return scrollPosition >= containerRef.current.scrollWidth - containerRef.current.clientWidth;
    }, [scrollPosition]);

    const handleScroll = (direction: "prev" | "next") => {
        if (!containerRef.current) return;

        const isPrev = direction === "prev";

        const newScrollPosition = isPrev
            ? Math.max(scrollPosition - step, 0)
            : Math.min(scrollPosition + step, containerRef.current.scrollWidth - containerRef.current.clientWidth);

        containerRef.current.scrollTo({
            left: newScrollPosition,
            behavior: "smooth"
        });
        setScrollPosition(newScrollPosition);
    }

    const handlePrev = () => {
        handleScroll("prev");
    }

    const handleNext = () => {
        handleScroll("next")
    }

    return (
        <CarouselContainer $width={containerWidth}>
            <DirectionButton
                disabled={isPrevDisabled}
                onClick={handlePrev}
            >
                <FaArrowLeft />
            </DirectionButton>
            <CarouselContent ref={containerRef}>
                {
                    children.map((item, index) => {
                        return (
                            <div key={uuidv4()} ref={index === 0 ? firstItemRef : null}>
                                {item}
                            </div>
                        )
                    })
                }
            </CarouselContent>
            <DirectionButton
                disabled={isNextDisabled}
                onClick={handleNext}
            >
                {<FaArrowRight />}
            </DirectionButton>
        </CarouselContainer>
    )
}

export default Carousel;
