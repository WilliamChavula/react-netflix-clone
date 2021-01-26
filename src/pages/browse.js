import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    // Get series and films from firebase
    const { series } = useContent('series');
    const { films } = useContent('films');

    // get genre slides from films and series
    const slides = selectionFilter({ series, films });
    console.log(slides);

    return <div>Browse</div>;
}
