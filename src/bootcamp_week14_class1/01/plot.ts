// first declare the data types
const xData: number[] = [1, 2, 3, 4, 5];
const yData: number[] = [1, 2, 4, 8, 16];

// create a type safe trace
const trace1: Partial<Plotly.PlotData> = {
    x: xData,
    y: yData,
    type: 'scatter',
};

// define the layout
const layout: Partial<Plotly.Layout> = {
    title: { text: 'My Plot' },
    xaxis: {
        title: { text: 'X Axis' },
    },
    yaxis: {
        title: { text: 'Y Axis' },
    },
};


// call the Plotly function to create the plot
Plotly.newPlot("plot", [trace1], layout)
