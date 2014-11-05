function traverse(selector) {

    var node = document.querySelector(selector);
    tracerseNode(node, '');


    function tracerseNode(node, spacing) {
        spacing += " ";

        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].nodeType === Node.ELEMENT_NODE) {

                var childClass = node.childNodes[i].getAttribute("class");
                var childId = node.childNodes[i].getAttribute("id");
                var child = node.childNodes[i];
                

                console.log(spacing + child.nodeName.toLowerCase() + ": "
                    + (childId !== null ? 'id="' + childId + '"' : '')
                    + (childClass !== null ? 'class="' + childClass + '"' : ''));
                   
                if (child.hasChildNodes) {
                    tracerseNode(child, spacing);
                }
            }
        }
    }
}

traverse(".birds");
