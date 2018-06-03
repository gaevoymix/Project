
function select(element) {
    var value = element.getAttribute("data-value"); // Read value of selected option
    var nodes = element.parentNode.childNodes; // Getting other elements
    for (var i = 0; i < nodes.length; i++) {
        // filtering outside elements text and input
        if (nodes[i] instanceof HTMLParagraphElement) {
            // Adding 'active' class to the chosen elemnt and deleting this class from another
            if (value == nodes[i].getAttribute("data-value")) nodes[i].className = "active";
            else nodes[i].className = "";
        }
    }
}