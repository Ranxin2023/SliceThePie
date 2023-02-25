import React, { useRef, useEffect } from 'react';

/* Component */
function D3BarChart (props) {
    
    // The useRef Hook makes a ref (a static variable that does not trigger a re-render when it changes).
    // Its value will get filled in when we add the chart svg to the DOM. 
    const d3Container = useRef(null);
    

    // A React effect, that is, a function that gets run every time the component is rendered.  
    // Inserts the D3 elements making the chart into the container element d3Container.
    useEffect(
        function () {
            console.log("Adding elements to the chart");

            // only if we have data and chart is in the DOM
            if (props.data && d3Container.current) {

                // By the time the effect is called, after the DOM is rendered, the svg element is in the DOM 
                // The ref variable now contains a pointer to the DOM element thanks to the ref attribute.
                const svg = d3.select(d3Container.current);

                // Bind data to objects at every update.
                svg.selectAll('rect')
                .data(props.data)
                .join("rect")
                .attr('x', (d, i) => i * 25)
                .attr('y', (d)=> 100-(d*15))
                .attr("height",(d) => d*15)
                .attr("fill", "steelblue")
                .attr("width",20);
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data, d3Container.current]);

    // the component returns the svg that contains the chart (d3Container)
    return (
        <svg
          className="d3-component"
          width={400}
          height={200}
          ref={d3Container}
        />
    );
}

export default D3BarChart;
