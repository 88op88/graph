// Import the vis.js library
var vis = require("vis");

// Create an array of nodes with 30 elements
var nodes = [];
for (var i = 0; i < 30; i++) {
    nodes.push({id: i, label: "Node " + i});
}

// Create an array of edges that connects every node to every other node
var edges = [];
for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
        edges.push({from: i, to: j});
    }
}

// Create a new network object
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
