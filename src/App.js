import './App.css';

function App() {
    const friends = [
        { url: "https://github.com/zbuster05", name: "zbuster05", color: "rgb(190, 52, 37)" },
        { url: "https://www.jemoka.com/", name: "jemoka", color: "#eaebab" },
        { url: "https://github.com/TheEnquirer/", name: "enquirer", color: "#fbec22" },
        { url: "http://exr0n.com", name: "exr0n", color: "#326ccc" },
        { url: "https://richardfeynmanrocks.github.io/", name: "quantumish", color: "#6cad50" }
    ]
    const projects = [
        { link: "http://meshwave.exr0n.com/", title: "meshwave", authors: [ "@ex" ], desc: "time synced boredem repellent v2" },
        { link: "https://dictembed.sanity.gq/", title: "dictembed", authors: [ "@j", "@z" ], desc: "context-aware term definitions" },
        { link: "https://wiki.sanity.gq", title: "wiki", authors: [ "@j" ], desc: "a wiki; not quite sure why" },
        { link: "https://spinny.sanity.gq/", title: "spinny", authors: [ "@en" ], desc: "diff. eq modeling of spinny spring" },
        { link: "https://automata.sanity.gq/", title: "automata", authors: [ "@j" ], desc: "conrad's game of life + inheritance" },
        { link: "https://potato.sanity.gq/", title: "potato", authors: [ "@j", "@z" ], desc: "znc and bitlbee instance" },
        { link: "https://balls.sanity.gq/", title: "balls", authors: [ "@en" ], desc: "some balls that bounce, wheee!" },
        { link: "https://taproot.sanity.gq/", title: "taproot", authors: [ "@j @en @ex @z" ], desc: "shared zettelkasten" },
    ];

    return (
    <div className="App">
        <div id="blurb" class="my-12">
            <span id="sanity">Sanity</span><span className="font-mono text-gray-200">is a group of friends building cool things.</span>
            <br />
            <span className="flex flex-wrap mt-2 text-sm text-gray-300 space-x-2">
                { friends.sort(() => Math.random() - 0.5).map(({ name, url, color }, idx) =>
                    <a href={url} className="name" style={{"--hcolor": color}} key={idx}>@{name}</a>
                ) }
            </span>
        </div>
        <ul class="list-none" className="prjs">
        { projects.map(({ link, title, authors, desc }, idx) =>
            <li className="thing-wrap" key={idx} style={{ "--anim-order": `${idx}` }}>
                <a  href={link} className="thing">
                <a className="thing-title">{title}</a> <span className="thing-desc"><span className="author">{authors.join(" ")}</span> {desc}</span>
                </a >
          </li>
        ) }
        </ul>
    </div>
    );
}

export default App;
