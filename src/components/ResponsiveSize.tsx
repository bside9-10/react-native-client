import React from 'react';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 758;

export function widthPercentage(width: number): number {
    const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;

    return responsiveScreenWidth(percentage);
}

export function heightPercentage(height: number): number {
    const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;

    return responsiveScreenHeight(percentage);
}

export function fontPercentage(size: number): number {
    const percentage = size * 0.135;

    return responsiveScreenFontSize(percentage);
}