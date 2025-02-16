import React from "react";
import styled from "styled-components";

interface ChipContainerProps {
    $color: string;
}

const ChipContainer = styled.div<ChipContainerProps>(({$color}) => ({
    borderRadius: '20px',
    padding: '5px 10px',
    border: `solid 2px ${$color}`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
}));

interface ChipProps {
    text: string;
    color: string;
}

const Chip = (props: ChipProps) => {
    const {text, color} = props;

    return( 
        <ChipContainer $color={color}>
            {text}
        </ChipContainer>
    )
}

export default Chip;
