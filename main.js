// Check if has spotify artist ID

if () {

    // Check if instance of musical agent
    q = `SELECT ?musical_agent ?musical_agentLabel WHERE {
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        ?musical_agent (wdt:P31/(wdt:P279*)) wd:Q109802395.
    }
    LIMIT 1000`

    if () {
        
        // Get artists
        chrome.storage.local.get('access_token', function(result) {
            var title = document.body.getElementsByClassName('wikibase-title-label')[0];
        
            fetch('https://api.spotify.com/v1/search?type=artist&q=Twice',  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + result.access_token
                },
                method: 'GET'
            }).then(r => {
                console.log(r.json());
            });
        });

    }
}