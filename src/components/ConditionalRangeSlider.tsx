import React from 'react';
import { useEffect, useState } from 'react';
import { useRange, RangeInput } from 'react-instantsearch';
import * as Slider from '@radix-ui/react-slider';
import ConditionalRangeSliderProps from '../types.tsx/ConditionalRangeSliderProps';

import '../css/RangeSlider.css';

export function ConditionalRangeSlider({ attribute, header }: ConditionalRangeSliderProps) {
  const { start, range, canRefine, refine } = useRange({ attribute });
  const { min, max } = range;
  const [value, setValue] = useState([min, max]);

  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  useEffect(() => {
    setValue([from, to]);
  }, [from, to]);

  if (!canRefine) {
    return null;
  }

  if (!canRefine || min === max || (min === 0 && max === 1)) {
    return null;
  }

  return (
    <div className="range-slider-container">
      <h3 className="range-slider-header">{header}</h3>
      <Slider.Root
        className="slider-root"
        min={min}
        max={max}
        value={value}
        onValueChange={setValue}
        onValueCommit={refine}
        disabled={!canRefine}
      >
        <Slider.Track className="slider-track">
          <Slider.Range className="slider-range" />
        </Slider.Track>
        <Slider.Thumb className="slider-thumb" />
        <Slider.Thumb className="slider-thumb" />
      </Slider.Root>
      <RangeInput attribute={attribute} />
    </div>
  );
}
