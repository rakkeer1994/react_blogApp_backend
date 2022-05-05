let bollywood=[
    {
        id:"13",
        image:"https://tse3.mm.bing.net/th?id=OIP.77SB9kgWTgjlrTgDvBZBhgHaEb&pid=Api&P=0&w=280&h=167",
        name:"Bahubali",
        info:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. ",
        description:"Near the ancient Indian kingdom of Mahishmati, an injured woman named Sivagami is seen exiting a cave down by a mountain waterfall carrying an infant. She kills two soldiers pursuing and attempts to cross a raging river, but slips and is washed away in the current.",
        date:'Bollywood /22 jan 2022',
        
    },
    {
        id:"14",
        image:"https://moviekoop.com/Images/Cover_Photos/r-rajkumar-Poster.jpg",
        name:"R-Rajkumar",
        info:"Rajkumar, an aimless youth, works for a drug baron and is sent to kill a rival dealer. His life is changed forever when he meets Chanda.",
        date:'Bollywood /22 jan 2022',
        description:"Romeo Rajkumar is an aimless youth who arrives in Dhartipur, a small town ruled by two drug barons named Shivraj Gurjar and his arch-enemy Manik Parmar, controlled by a Mafia don named Ajit Taaka, who operates in Hong Kong."
    },
    {
        id:"15",
        image:"https://1.bp.blogspot.com/-p1JKXAG6yi8/YNhQVtGsPwI/AAAAAAAAA5s/6ANoxm1wKr80QUDUdk0dQQs28Pb74ngUgCLcBGAsYHQ/w1200-h630-p-k-no-nu/images%25284%2529.jpg",
        name:"Pushpa-1",
        info:"Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization",
        date:'Bollywood/ 22 jan 2022',
        description:"When DSP Govindappa raids them in the forest, Pushpa hides and recovers the stock, thereby gaining the trust of his employer Konda Reddy. With the help of novel ideas to smuggle the red sandalwood, he quickly rises through the ranks and becomes Konda Reddy's partner.",
    },
    {
        id:"16",
        image:"https://www.filmibeat.com/img/2017/08/kgf1-29-1503989563.jpg",
        name:"Kgf",
        info:"The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they get gold.",
        date:'Bollywood /22 jan 2022',
        description:"Rocky soon rises in strength and power, rivaling Shetty's own. This attracts the attention of Andrews, who offers him Bombay in return for assassinating Garuda, Suryavardhan's elder son, who is to inherit KGF after his now-paralyzed father's passing.",
    }
]


const bollywoodDetails=(req, res)=>{res.send(bollywood)}
module.exports.bollywoodDetails=bollywoodDetails