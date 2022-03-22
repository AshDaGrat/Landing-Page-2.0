const sidebar = () => {
    return(
        <div className="fixed top-0 left-0 w-28 h-screen
                        flex flex-col text-center drop-shadow-lg
                        bg-gray-900 text-white">
            <a><img className = "py-10" src={require('./Untitled.png')} /></a>
            <dl className='space-y-5 divide-y'>
                <dt><a className="sidebar">About</a></dt>
                <dt><a className="sidebar">Skills</a></dt>
                <dt><a className="sidebar">Laurels</a></dt>
                <dt><a className="sidebar">Contact</a></dt>
            </dl>
        </div>
    );
};

export default sidebar;