function browserHistory(object, arr) {
    for (let action of arr) {
        let [command, site] = action.split(' ');
        //console.log(command, site);

        if (command === 'Open') {
            object['Open Tabs'].push(site);
            object["Browser Logs"].push(action);
        } else if (command === 'Close') {

            if (object['Open Tabs'].includes(site)) {

                let index = object['Open Tabs'].indexOf(site);

                object['Open Tabs'].splice(index, 1);

                object['Recently Closed'].push(site);

                object["Browser Logs"].push(action);
            }
        } else if (action === "Clear History and Cache") {
            object["Open Tabs"] = [];
            object["Recently Closed"] = [];
            object["Browser Logs"] = [];
        }
    }

    console.log(object["Browser Name"]);
    console.log(`Open Tabs: ${object["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${object["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${object["Browser Logs"].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome",

    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],

    "Recently Closed": ["Yahoo", "Gmail"],

    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo",

        "Open Gmail", "Close Gmail", "Open Facebook"]
},

    ["Close Facebook", "Open StackOverFlow", "Open Google"])