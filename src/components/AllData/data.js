const menuItems=[
    {
    name:'Invest',
    details:[
      {title: 'Invest', links: ['Stocks', 'Mutual Funds', 'IPOs', 'Sovereign Gold Bonds']},
      { title: 'Tools', links: ['Income Tax Calculator', 'MF Return Calculator', 'SIP Calculator', 'ELSS Calculator', 'Gold Rate Tracker'] },
      { title: 'Holidays', links: ['Trading Holidays', 'NSE Holidays', 'BSE Holidays', 'MCX Holidays'] },
      { title: '', links: ['Muhurat Trading Session', 'Share Market Timing'] }
    ] 
    },
    {
      name:'Trade',
      details:[
        {title: 'Trade Tools', links: ['Option Chain', 'Futures Market', 'Commodity Trading', 'Currency Market']},
        { title: 'Trading Plans', links: ['Option Chain', 'Futures Market', 'Commodity Trading', 'Currency Market'] },
        { title: 'Trade Holidays', links: ['Option Chain', 'Futures Market', 'Commodity Trading', 'Currency Market']},
        { title: 'Optionals', links: ['Option Chain', 'Futures Market', 'Commodity Trading', 'Currency Market']}
      ] 
    },
    {
      name:'Uplearn',
      details:[
        {title:'AboutUs',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Trade',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Courses',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']}
      ]
    },
    {
      name:'AboutUS',
      details:[
        {title:'AboutUs',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Trade',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Courses',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']}
      ]
    },
    {
      name:'Partner With Us',
      details:[
        {title:'AboutUs',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Trade',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Courses',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']}
      ]
    },
    {
      name:'Pricing',
      details:[
        {title:'AboutUs',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Trade',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']},
        {title:'About Courses',links:['Beginner Courses', 'Advanced Trading', 'Strategies', 'Market Analysis']}
      ]
    }
  ]

const investmentData=[
    {
        imageUrl:'https://upstox.com/app/themes/upstox/dist/img/invest-in-share-market/tracker.svg',
        content:'Track all wealth on one app, import external Mutual Funds and link Bank Accounts',
        heading:'Wealth Tracker'
    },
    {  
        imageUrl:'https://upstox.com/app/themes/upstox/dist/img/invest-in-share-market/checklist.svg',
        content:'Based on your risk appetite, find curated Mutual Fund portfolios to start SIPs in',
        heading:'Ready-made Portfolios'
    },
    {
        imageUrl:'https://upstox.com/app/themes/upstox/dist/img/invest-in-share-market/saving-file.svg',
        content:'Stay disciplined with your investments by choosing SIP for Stocks and Mutual Funds',
        heading:'SIP Mode'
    }

]

const footerData = [
  {
    tagline: 'Products',
    contents: [
      { name: 'Pro Web' },
      { name: 'Pro Mobile' },
      { name: 'Mutual Funds' },
      { name: 'IPOs' },
      { name: 'Futures And Options' },
      { name: 'Stocks' },
      { name: 'Indices' },
      { name: 'Uplink Developer API' },
      { name: 'Upstox x TradingView' }
    ]
  },
  {
    tagline: 'Company',
    contents: [
      { name: 'About Us' },
      { name: 'Market Talk' },
      { name: 'Brokerage Charges' },
      { name: 'Refer and Earn' },
      { name: 'Announcements' },
      { name: 'Partner with us' },
      { name: 'Press Releases' },
      { name: 'Bug Bounty Program' },
      { name: 'Contact Us' },
      { name: 'Media Kit' }
    ]
  },
  {
    tagline: 'Services',
    contents: [
      { name: 'Demat Account' },
      { name: 'Open Mutual Fund Account' },
      { name: 'Trading Account' },
      { name: 'Commodity Trading' },
      { name: 'Equity Trading' },
      { name: 'Download Forms' },
      { name: 'Glossary' },
      { name: 'Help Center' }
    ]
  },
  {
    tagline: 'Social',
    contents: [
      { name: 'Facebook', icon: "fa-brands fa-facebook" },
      { name: 'Twitter', icon: 'fab fa-twitter' },
      { name: 'Telegram', icon: 'fab fa-telegram' },
      { name: 'Linkedin', icon: 'fab fa-linkedin' },
      { name: 'YouTube', icon: 'fab fa-youtube' },
      { name: 'Instagram', icon: 'fab fa-instagram' }
    ]
  }
];

const mockData = async () => {
  return {
    data: [
      { id: 1, name: 'NIFTY', value: '25,041.10', change: '+104.70 (0.42%)' },
      { id: 2, name: 'BANKNIFTY', value: '51,272.30', change: '+154.50 (0.30%)' },
      { id: 3, name: 'NIFTY MIDCAP 50', value: '23,643.65', change: '+141.50 (0.60%)' },
      { id: 4, name: 'NIFTY 500', value: '14,213.50', change: '+74.50 (0.53%)' },
      { id: 5, name: 'NIFTY 200', value: '26,115.20', change: '+103.95 (0.40%)' }
    ]
  };
}

export {investmentData,menuItems,footerData,mockData}