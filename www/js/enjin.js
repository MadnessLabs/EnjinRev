window.addEventListener("message", receiver, false);
function receiver() {
    var receiverEvent = event;
    if (receiverEvent.data.type === 'init') {
        window.onhashchange = function() {
            receiverEvent.source.postMessage({hash: window.location.hash}, receiverEvent.origin);
        };
    } else if (receiverEvent.data.type === 'url') {
        window.location.hash = receiverEvent.data.hash;
    }
}