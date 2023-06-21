import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div className="tekst" onClick={() => props.handleShow(false)} >Voetbalschoenenstore</div>
            <div className="tekst" onClick={() => props.handleShow(true)}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm-11.816 6c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm8-16.5l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-2.541 9h2.102l3.432-12h4.195z"/></svg>
                <sup> {props.count} </sup>
            </div>
            <img className='img' src='https://www.voetbaldirect.nl/media/magefan_blog/Nike_Blueprint_Banner_blog_1.png' width="100%"></img>
        </div>
        
    );
}

export default Header;
