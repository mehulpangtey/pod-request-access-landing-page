import './CallToAction.styles.sass';
import Input from '../Input/Input';
import Button from '../Button/Button';
import applePodcast from '../../assets/desktop/apple-podcast.svg';
import googlePodcast from '../../assets/desktop/google-podcasts.svg';
import poceketCast from '../../assets/desktop/pocket-casts.svg';
import spotify from '../../assets/desktop/spotify.svg';

const icons = [
    {   
        id: 0,
        name: 'spotify',
        src: spotify
    },
    {   
        id: 1,
        name: 'apple-podcast',
        src: applePodcast
    },
    {   
        id: 2,
        name: 'google-podcast',
        src: googlePodcast
    },
    {   
        id: 3,
        name: 'pocket-cast',
        src: poceketCast
    },   
];

const CallToAction = (() => {
    let html = `
        <div class="callToAction">
            <h1>BUILDING A COMMUNITY<span class="highlight">AROUND PODCAST.</span></h1>
            
            <p>It’s time to hook up with other podcasters from around the world. Formulate partnerships so you can grow your podcast’s audience and impact</p>
            <p> <span class="highlight_1">Connect,</span> <span class="highlight_2">Collaborate </span> & <span class="highlight_3">Grow. </span><span class="highlight_2">Together.</span> </p>
            <form>
                
                ${Button}
            </form>
           <span class="error">Oops! Please check your email</span>
            <ul>
                ${icons.map(icon => `<li><img src=${icon.src} alt=${icon.name}/></li>`).join('')}
            </ul>
        </div>
    `;

    return html;
})();

export default CallToAction;