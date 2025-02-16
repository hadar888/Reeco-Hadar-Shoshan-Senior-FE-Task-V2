import React from "react";
import styled from "styled-components";

interface ChipContainerProps {
    $color: string;
    $width: number;
}

const ChipContainer = styled.div<ChipContainerProps>(({$color, $width}) => ({
    borderRadius: '20px',
    padding: '5px 10px',
    border: `solid 2px ${$color}`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    width: `${$width}px`,
    margin: '2px',
}));

interface ChipProps {
    text: string;
    color: string;
    width: number;
}

const Chip = (props: ChipProps) => {
    const {text, color, width} = props;

    return( 
        <ChipContainer $color={color} $width={width}>
            {text}
        </ChipContainer>
    )
}

export default Chip;
