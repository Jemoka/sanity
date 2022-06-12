import react from 'react';

export default function ProjectList({ projects }) {
    return <ul class="list-none">
        { projects.map(({ link, title, authors, desc }, idx) =>
            <li className="thing-wrap" key={idx} style={{ "--anim-order": `${idx}` }}>
                <a  href={link} className="thing">
                <a className="thing-title">{title}</a> <span className="thing-desc"><span className="author">{authors.join(" ")}</span> {desc}</span>
                </a >
          </li>
        ) }
    </ul>;
}

