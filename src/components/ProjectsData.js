import exchange from '../images/exchange.png';
import cryptoprices from '../images/crypto_prices.png'
import leonardo from '../images/leaonardo-teaser.png'

export const ProjectsData = {
    projects:[
        {
            id: 1,
            imgSrc: exchange,
            title: 'Crypto Exchange',
            desc: 'Completed with Dapp University',
            info: 'Deployed to the Rinkeby Test Network, this is a fully functioning ERC20 token and exchange.',
            skillsHeader: 'Key Skills',
            skillsOne: 'Solidity',
            skillsTwo: 'React',
            skillsThree: 'Redux',
            buttonOne: 'View Code',
            buttonTwo: 'Visit Exchange',
            code: 'https://github.com/Tommy15101/CapstoneProject',
            visit: 'https://flat-credit-3558.on.fleek.co/'
        },
        {
            id: 2,
            imgSrc: cryptoprices,
            title: 'Crypto Price Tracker',
            desc: 'Top 100 Crypto Assets Live Prices',
            info: 'A simple CryptoCurrencey price tracker with data sourced from the Coin Gecko API.',
            skillsHeader: 'Key Skills',
            skillsOne: 'React',
            skillsTwo: 'CSS',
            skillsThree: 'JS',
            buttonOne: 'View Code',
            buttonTwo: 'Visit Tracker',
            code: 'https://github.com/Tommy15101',
            visit: 'https://jolly-sea-5132.on.fleek.co'
        },
        {
            id: 3,
            imgSrc: leonardo,
            title: 'NFT Collection',
            desc: 'In Progress - Coming Soon',
            info: 'A collection of 20 unique pieces',
            skillsHeader: 'Key Skills',
            skillsOne: 'Solidity',
            skillsTwo: 'React',
            skillsThree: 'IPFS',
            buttonOne: 'Coming Soon',
            buttonTwo: 'Coming Soon',
            // code: 'https://github.com/Tommy15101',
            // visit: 'https://flat-credit-3558.on.fleek.co/'
        }
    ]
}
