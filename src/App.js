import './App.css';
import ProjectList from './ProjectList.jsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FRIENDS = [
    { url: "https://github.com/zbuster05", name: "zbuster05", color: "rgb(190, 52, 37)" },
    { url: "https://www.jemoka.com/", name: "jemoka", color: "#eaebab" },
    { url: "https://github.com/TheEnquirer/", name: "enquirer", color: "#fbec22" },
    { url: "http://exr0n.com", name: "exr0n", color: "#326ccc" },
    { url: "https://richardfeynmanrocks.github.io/", name: "quantumish", color: "#6cad50" }
]
const FEATURED_PROJECTS = [
    { link: "https://dictembed.jklsnt.com/", title: "dictembed", authors: [ "@j", "@z" ], desc: "context-aware term definitions" },
    { link: "https://automata.jklsnt.com/", title: "automata", authors: [ "@j" ], desc: "conrad's game of life + inheritance" },
    { link: "https://taproot3.jklsnt.com/", title: "taproot", authors: [ "@j @en @ex @z" ], desc: "shared zettelkasten" },
    { link: "https://poems.jklsnt.com/", title: "pomes", authors: ["@en @z"], desc: "a whole lotta fruit"},
    { link: "https://urbanmap.exr0n.com/", title: "urbanmap", authors: ["@ex"], desc: "walkability in the US"}
];
const ARXIVED_PROJECTS = [
    { link: "http://meshwave.exr0n.com/", title: "meshwave", authors: [ "@ex" ], desc: "time synced boredem repellent v2" },
    { link: "https://wiki.jklsnt.com", title: "wiki", authors: [ "@j" ], desc: "a wiki; not quite sure why" },
    { link: "https://spinny.jklsnt.com/", title: "spinny", authors: [ "@en" ], desc: "diff. eq modeling of spinny spring" },
    { link: "https://potato.jklsnt.com/", title: "potato", authors: [ "@j", "@z" ], desc: "znc and bitlbee instance" },
    { link: "https://balls.jklsnt.com/", title: "balls", authors: [ "@en" ], desc: "some balls that bounce, wheee!" },
    { link: "https://lilypads.jklsnt.com/", title: "lilypads", authors: [ "@en @ex" ], desc: "just some three.js art" },
]

function App() {
    const [ showHidden, setShowHidden ] = useState(false);
    const [ friendsOrdering, setFriendsOrdering ] = useState( FRIENDS.map(f => ({ ...f, order: Math.random() })) );

    // state to keep track of which scroll arrow we are showing: the incoming animation one or the pulse animation one
    const [ featuredProjectsLoaded, setFeaturedProjectsLoaded ] = useState(false);
    setTimeout(() => setFeaturedProjectsLoaded(true), 2000 + 100*FEATURED_PROJECTS.length);
    const scrollDownArrow = (() => {
        if (featuredProjectsLoaded) return <div className="text-xl text-center text-gray-500" style={{animationName: 'pulse', animationDuration: '3s', animationIterationCount: 'infinite'}}><FontAwesomeIcon icon={faAngleDown} /> </div>
        return <div className="text-xl text-center text-gray-500" style={{animationName: 'fadeup', animationDelay: `${500 + 100 * FEATURED_PROJECTS.length}ms`, animationFillMode: 'both', animationDuration: '1s'}}><FontAwesomeIcon icon={faAngleDown} /> </div>
    })();

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
        { showHidden? <div>
            <br/><span className="font-mono font-bold text-gray-200" style={{animationName: 'fadeup', '--anim-order': 0, animationDuration: '1s', animationFillMode: 'both'}}>Older projects:</span>
            <ProjectList projects={ARXIVED_PROJECTS} />
            </div> : scrollDownArrow
        }
    </div>
    );
}

export default App;
