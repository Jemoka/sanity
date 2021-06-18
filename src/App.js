import './App.css';

function App() {
  return (
    <div className="App">
        <span><span id="sanity">Sanity</span><span className="font-mono text-gray-200">is a group of friends building cool things.</span></span>
        <br />
        <span className="flex flex-wrap mt-2 text-sm text-gray-300"><span><a href="https://github.com/zbuster05" className="mr-2 name">@zbuster05</a><a href="https://www.jemoka.com/" className="mr-2 name">@jemoka</a><a href="https://github.com/TheEnquirer/" className="mr-2 name break-here">@enquirer</a></span><span><a href="http://exr0n.com" className="mr-2 name">@exr0n</a><a href="https://richardfeynmanrocks.github.io/" className="mr-2 name">@quantumish</a></span></span>
        <br />
        <br />
        <a  href="https://spinny.sanity.gq/" className="thing">
            <a className="thing-title">spinny</a> <span className="thing-desc"><span className="author">@en</span> diff. eq modeling of spinny spring </span>
        </a >
        <a  href="https://automata.sanity.gq/" className="thing">
            <a className="thing-title">automata</a> <span className="thing-desc"><span className="author">@j</span> conrad's game of life + inheritance </span>
        </a >
        <a href="https://potato.sanity.gq/" className="thing">
            <a  className="thing-title">potato</a> <span className="thing-desc"><span className="author">@j @z</span> znc and bitlbee instance</span>
        </a >
        <a href="https://taproot.sanity.gq/" className="thing">
            <a  className="thing-title">taproot</a> <span className="thing-desc"><span className="author">@j @z @ex @en</span> notes! notes! get'em notes!</span>
        </a >
    </div>
  );
}

export default App;
