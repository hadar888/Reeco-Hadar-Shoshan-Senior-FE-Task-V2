# React Carousel Component

## Overview

This project provides a flexible and reusable React carousel component, implemented using styled-components and TypeScript. The carousel supports both horizontal and vertical scrolling, and can be controlled via buttons or keyboard navigation.

## Features

- Supports horizontal and vertical scrolling

- Scroll by fixed pixel steps or by item count

- Keyboard navigation (arrow keys)

- Smooth scrolling effect

- Reusable components: Carousel, Chip, and ItemCard

## Installation

Clone the repository and install dependencies:

```sh 
npm install
```

## Components

### `Carousel`

#### Props:

- children: Array of React elements (items to display in the carousel)

- step: number - pixel size per scroll (default: 40)

- byItem: boolean - whether to scroll by item instead of fixed pixels (default: false)

- isHorizontal: boolean - horizontal or vertical scroll (default: true)

### `Chip`

#### Props:

- text: string - content of the chip

- color: string - border color of the chip

- width: number - width of the chip

### `ItemCard`

#### Props:

- name: string - title of the item

- description: string - description text

- imageUrl: string - URL of the image

- height: number - height of the card

- width: number - width of the card

## Keyboard Navigation

- Arrow keys (←, →, ↑, ↓) move the carousel in the respective direction.
