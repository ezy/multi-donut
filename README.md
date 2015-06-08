# multi-donut

1. Slider handles go over the edges. For sliders D3.js brushes were used, they are very flexible yet not regarding this missing edges (if handles are not small circles).
The solution would be drawing rectangles with the same color as slider on slider's edges so that handle would not go pass them.

2. Because of troubles with chosen DonutSlider "pie charts", specifically its implementation of sliders, the latter are not implemented and harder (but more D3.js standard) brushes were chosen to implement slider with.

3. Percentage sign on slider handles can be removed quickly.

4. Short colored line that is red or green at the top on the donut slider is getting covered with donut fill color. No "3D" order is respected due to donut slider implementation so line gets hidden. The only possible way would be continuously removing and adding line element whenever donut slider draws over it.

5. Captions 0 and 100 can be added left and right respectively on each of the sliders.

6. Captions on the stacked bar chart would be somehow harder to add - for the drawing a small trick was used. There are actual two joined charts drawn next to each other. For example, for X-Y on the right bar one grey (empty) and one blue value are used. So when C<B, grey part is the difference (100 - (X+Y)) and blue bar has zero height and if C>B then grey part has zero height and blue adapts etc.

7. Line (red or green, depending on C>B) for B value on stacked bar chart cannot be added by default D3.js elements. It's possible to draw a line above both joined charts and control its color similar to a inner circle in the donut slider.

DonutSlider is not "responsive", meaning easily resized in different screen resolutions. I have tested this with version of the complete chart and only DonutSlider hasn't change its size. In spite of that I have included a lot of parameters for different sizes (and colors, initial values etc) so it is possible even now to think about "resize" function that would have to adapt my chosen unit (margin_unit) based on screen resolution and just redraw not automatically resized chart elements with changed unit.
