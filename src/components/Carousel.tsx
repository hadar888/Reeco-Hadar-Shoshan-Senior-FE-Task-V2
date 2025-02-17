import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

interface CarouselContainerProps {
    $size: number;
    $isHorizontal: boolean;
}

const gapSize = 10;
const CarouselContainer = styled.div<CarouselContainerProps>(({ $size, $isHorizontal }) => ({
    display: 'flex',
    flexDirection: $isHorizontal ? 'row' : 'column',
    alignItems: 'center',
    padding: '15px',
    border: 'solid 2px #0064ff33',
    justifyContent: 'space-around',
    borderRadius: '20px',
    width: $isHorizontal ? `${$size}px` : 'unset',
    height: !$isHorizontal ? `${$size}px` : 'unset',
    gap: `${gapSize}px`,
}));

const directionButtonSize = 30;
const DirectionButton = styled.button(() => ({
    borderRadius: '15px',
    border: 'none',
    minWidth: `${directionButtonSize}px`,
    minHeight: `${directionButtonSize}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:not(:disabled)': {
        cursor: 'pointer',
    }
}));

interface CarouselContentProps {
    $isHorizontal: boolean;
}

const carouselGapSize = 5;
const CarouselContent = styled.div<CarouselContentProps>(({ $isHorizontal }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: $isHorizontal ? 'row' : 'column',
    gap: `${carouselGapSize}px`,
    overflow: "hidden",
    // overflowX: 'scroll',
    // overflowY: 'scroll',
}));

interface CarouselProps {
    children: React.ReactNode[];
    step?: number;
    byItem?: boolean;
    isHorizontal?: boolean;
}

const Carousel = (props: CarouselProps) => {
    const { children, step = 40, byItem = false, isHorizontal = true } = props;

    if (!byItem && step <= 0) {
        throw new Error("Step must be a positive number.");
    }

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [containerSize, setContainerSize] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const firstItemRef = useRef<HTMLDivElement | null>(null);

    const clientSizeProperty = useMemo(() => isHorizontal ? 'clientWidth' : 'clientHeight', [isHorizontal]);
    const scrollSizeProperty = useMemo(() => isHorizontal ? 'scrollWidth' : 'scrollHeight', [isHorizontal]);
    const scrollDirecton = useMemo(() => isHorizontal ? 'left' : 'top', [isHorizontal]);

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (!isNextDisabled && ((isHorizontal && event.key === "ArrowRight")
            || (!isHorizontal && event.key === "ArrowDown"))) {
            handleNext();
        } else if (!isPrevDisabled && ((isHorizontal && event.key === "ArrowLeft")
            || (!isHorizontal && event.key === "ArrowUp"))) {
            handlePrev();
        }
    };

    useEffect(() => {
        if (!firstItemRef.current) return;

        const contentSize = firstItemRef.current[clientSizeProperty];
        const wrapperSize = (directionButtonSize * 2) + (gapSize * 2) + 1
        setContainerSize(contentSize + wrapperSize);
    }, []);

    const isPrevDisabled = useMemo(() => {
        return scrollPosition <= 0;
    }, [scrollPosition]);

    const isNextDisabled = useMemo(() => {
        if (!containerRef.current) return;

        return scrollPosition >= containerRef.current[scrollSizeProperty] - containerRef.current[clientSizeProperty];
    }, [scrollPosition]);

    const handleScroll = (direction: "prev" | "next") => {
        if (!containerRef.current || !firstItemRef.current) return;

        const isPrev = direction === "prev";
        
        const stepSize = byItem ? firstItemRef.current[clientSizeProperty] + carouselGapSize : step;

        const newScrollPosition = isPrev
            ? Math.max(scrollPosition - stepSize, 0)
            : Math.min(scrollPosition + stepSize, containerRef.current[scrollSizeProperty] - containerRef.current[clientSizeProperty]);

        containerRef.current.scrollTo({
            [scrollDirecton]: newScrollPosition,
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
        <CarouselContainer $size={containerSize} $isHorizontal={isHorizontal} onKeyDown={handleKeyPress} tabIndex={0}>
            <DirectionButton
                title="next"
                disabled={isPrevDisabled}
                onClick={handlePrev}
            >
                {isHorizontal ? <FaArrowLeft /> : <FaArrowUp />}
            </DirectionButton>
            <CarouselContent ref={containerRef} $isHorizontal={isHorizontal}>
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
                title="prev"
                disabled={isNextDisabled}
                onClick={handleNext}
            >
                {isHorizontal ? <FaArrowRight /> : <FaArrowDown />}
            </DirectionButton>
        </CarouselContainer>
    )
}

export default Carousel;
