import React from "react";
import styled from "styled-components";


interface CarouselContentProps {
    $img: string;
    $height: number;
    $width: number;
}

const CardContainer = styled.div<CarouselContentProps>(({ $img, $height, $width }) => ({
    position: 'relative',
    backgroundImage: `url(${$img})`,
    height: `${$height}px`,
    width: `${$width}px`,
    backgroundSize: '100% 100%',
}));

const TextOnCard = styled.div(() => ({
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    left: '50%',
    transform: 'translate(-50%, 0)',
    padding: '5px',
    textAlign: 'center',
}));

const ItemName = styled(TextOnCard)(() => ({
    fontSize: '20px',
    top: '2%',
}));

const ItemDescription = styled(TextOnCard)(() => ({
    fontSize: '15px',
    bottom: '2%',
}));

interface ItemCardProps {
    name: string;
    description: string;
    imageUrl: string;
    height: number;
    width: number;
}

const ItemCard = (props: ItemCardProps) => {
    const { name, description, imageUrl, height, width } = props;

    return (
        <CardContainer $img={imageUrl} $height={height} $width={width}>
            <ItemName>{name}</ItemName>
            <ItemDescription>{description}</ItemDescription>
        </CardContainer >
    );
}

export default ItemCard;
