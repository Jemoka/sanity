import './App.css';
import ProjectList from './ProjectList.jsx';
import { useState, useEffect } from 'react';

const FRIENDS = [
    { url: "https://github.com/zbuster05", name: "zbuster05", color: "rgb(190, 52, 37)" },
    { url: "https://www.jemoka.com/", name: "jemoka", color: "#eaebab" },
    { url: "https://github.com/TheEnquirer/", name: "enquirer", color: "#fbec22" },
    { url: "http://exr0n.com", name: "exr0n", color: "#326ccc" },
    { url: "https://richardfeynmanrocks.github.io/", name: "quantumish", color: "#6cad50" }
]
const FEATURED_PROJECTS = [
    { link: "https://dictembed.sanity.gq/", title: "dictembed", authors: [ "@j", "@z" ], desc: "context-aware term definitions" },
    { link: "https://automata.sanity.gq/", title: "automata", authors: [ "@j" ], desc: "conrad's game of life + inheritance" },
    { link: "https://taproot3.sanity.gq/", title: "taproot", authors: [ "@j @en @ex @z" ], desc: "shared zettelkasten" },
    { link: "https://poems.jklsnt.com/", title: "pomes", authors: ["@en @z"], desc: "a whole lotta fruit"},
    { link: "https://urbanmap.exr0n.com/", title: "urbanmap", authors: ["@ex"], desc: "walkability in the US"}
];
const ARXIVED_PROJECTS = [
    { link: "http://meshwave.exr0n.com/", title: "meshwave", authors: [ "@ex" ], desc: "time synced boredem repellent v2" },
    { link: "https://wiki.sanity.gq", title: "wiki", authors: [ "@j" ], desc: "a wiki; not quite sure why" },
    { link: "https://spinny.sanity.gq/", title: "spinny", authors: [ "@en" ], desc: "diff. eq modeling of spinny spring" },
    { link: "https://potato.sanity.gq/", title: "potato", authors: [ "@j", "@z" ], desc: "znc and bitlbee instance" },
    { link: "https://balls.sanity.gq/", title: "balls", authors: [ "@en" ], desc: "some balls that bounce, wheee!" },
    { link: "https://lilypads.sanity.gq/", title: "lilypads", authors: [ "@en @ex" ], desc: "just some three.js art" },
]

function App() {
    const [ showHidden, setShowHidden ] = useState(false);
    const [ friendsOrdering, setFriendsOrdering ] = useState( FRIENDS.map(f => ({ ...f, order: Math.random() })) );

    console.log(showHidden)

    // add scroll listener to show archived projects on scroll-down https://stackoverflow.com/a/61018017
    useEffect(() => {
        const wheelEvent = e => {
            if (e.deltaY > 0) {
                window.removeEventListener('wheel', wheelEvent);
                setShowHidden(true);
            }
        }
        window.addEventListener('wheel', wheelEvent);
        return () => window.removeEventListener('wheel', wheelEvent);
    }, []);

    return (
    <div className="m-5">
        <div style={{ animationName: 'fadeup', animationDuration: "1s", animationFillMode: 'both' }} className="my-12">
            <span className="pr-2 font-mono italic font-bold text-gray-200" id="sanity">Sanity</span>
            <span className="font-mono text-gray-200">is a group of friends building cool things.</span>
            <br />
            <span className="flex flex-wrap mt-2 text-sm text-gray-300 space-x-2">
                {
                    FRIENDS.sort(f => f.order)
                    .map(({ name, url, color }, idx) =>
                    <a href={url} className="name" style={{"--hcolor": color}} key={idx}>@{name}</a>
                ) }
            </span>
        </div>
        <ProjectList projects={FEATURED_PROJECTS} />
        <div style={{display: showHidden ? 'block' : 'none'}}>
            <ProjectList projects={ARXIVED_PROJECTS} />
        </div>
    </div>
    );
}

export default App;
