import react from 'react';

export default function ProjectList({ projects }) {
    return <ul class="list-none">
        { projects.map(({ link, title, authors, desc }, idx) =>
            <li className="font-mono thing-wrap" key={idx} style={{ "--anim-order": `${idx}` }}>
                <a  href={link} className="thing">
                <a className="text-gray-100 thing-title">{title}</a>
                    <span className="mw-[60vw] text-right text-sm font-bold text-gray-300">
            <span className="pr-2 font-light border-r border-gray-600">{authors.join(" ")}</span> {desc}</span>
                </a >
          </li>
        ) }
    </ul>;
}

