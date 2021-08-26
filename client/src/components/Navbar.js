import content from '../content';

export default function Navbar() {
  return(
    <div className="w-full absolute" style={{
      background: '#291F1E'
    }}>
      <div className="flex items-center justify-between mx-auto w-11/12 py-3 text-yellow-400">
        <h1 className="text-xl font-bold">
          {content.navbar.logo}
        </h1>
        <div>
          {content.navbar.links.map((link, i) => {
            return <span className="text-zl mr-4" key={i}>{link.text}</span>
          })}
        </div>
      </div>
    </div>
  );
};