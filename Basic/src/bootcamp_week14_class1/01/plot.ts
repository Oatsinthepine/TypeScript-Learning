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
const layout1: Partial<Plotly.Layout> = {
    title: { text: 'My Plot' },
    xaxis: {
        title: { text: 'X Axis' },
    },
    yaxis: {
        title: { text: 'Y Axis' },
    },
};


// call the Plotly function to create the plot
Plotly.newPlot("plot", [trace1], layout1)


// the second plot:
let Name: string = 'Travis Taylor';

let title: string = `${Name}'s First Plotly Chart`;

let books: string[] = ["The Visual Display of Quantitative Information", "Automate the Boring Stuff", "Data Science from Scratch"];

let timesRead: number[] = [100, 50, 25];


// Assign `x` and `y` values for the Plotly trace object
const trace2: Partial<Plotly.PlotData> = {
    x: books,
    y: timesRead,
    type: 'bar'
};

// Leave the code below unchanged

const data = [trace2];

const layout2: Partial<Plotly.Layout> = {
    title: {text : title}
};

Plotly.newPlot("plot2", data, layout2);