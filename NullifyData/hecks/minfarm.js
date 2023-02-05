// requires modified app 21 chunk to exit lesson

// checks if lesson is open
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
    alert('Please open a lesson.')
} else { if (togglemin === 1) { // sets min farmer to enable
    togglemin = 0;
    // enables min farmer, auto exits lesson once enabled
    html5Iframe.contentWindow.localStorage.cheats = '{"timeoutValue":"1000000000000000000","timeoutMode":true}' // shhh don't tell iready about this
    alert('Enabled. Click again to disable. Open any lesson to start farming. You will only gain minutes while inside a lesson.')
    alert('Going onto a new tab will prevent Min Farmer from working. Putting a new tab on a seperate window should solve this')
    exit()
} else { // confirms if user wants to disable min farmer
    alert("Make sure to exit your lesson before disabling! If you don't, all your farmed minutes will be lost.")
    var discancel = confirm('Are you sure you want to disable Min Farmer?')
    if (discancel === true) {
    togglemin = 1; // disables min farmer
    html5Iframe.contentWindow.localStorage.clear();
    exit()
    alert('Min Farmer Disabled.')
} else {
    console.log('Canceled.')
}
}
}
