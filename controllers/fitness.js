



let fitness=[
        
    {
        id:"5",
      image:"https://tse2.mm.bing.net/th?id=OIP.FiqbMTlxAQYypvwXzIAPqgHaDv&pid=Api&P=0&w=350&h=176" ,
      name:"Swimming" ,
      info:"Swimming is a great aerobic workout for people with most types of arthritis. It can take the load off your joints and help prevent injuries.",
      date:"Fitness/ 22 jan 2022",
   description:"Swimming has many more benefits that those obvious advantages seen on the surface; its improvements to overall health go much deeper.Swimming improves muscle definition and strength. Swimmers gain muscle strength throughout the entire body.",
    },
    {
        id:"6",
      image:"https://i.pinimg.com/736x/3a/a5/5c/3aa55c890be15c659e9defc2c213bffb.jpg",
      name:"Running",
      info:"While there exists the potential for injury while running (just as there is in any sport), there are many benefits. Some of these benefits include potential weight loss, improved cardiovascular",
      date:"Fitness/22 jan 2022",
   description:"Running is one of the best ways to boost your overall health. According to medical research, you can increase on your good cholesterol levels by running every day. It is also a great way to improve on lung function. ",
    },
    {
        id:"7",
        image:"https://tse2.mm.bing.net/th?id=OIP.sTv0Jzu_Q-KSV4463nvdoAHaFj&pid=Api&P=0&w=226&h=170",
        name:"Proper-Diet",
        info:"A good diet can have many profound benefits on physical appearance  Having a healthy protein and unsaturated fat intake is good for the inside as well as the outside of your body,",
        date:"Fitness/22 jan 2022",
     description:"Diet (nutrition) A proper nutrition requires a proper ingestion and, also important, the absorption of vitamins, minerals, and food energy in the form of carbohydrates, proteins, and fats. Dietary habits and choices play a significant role in health and mortality.",
    },
    {
        id:"8",
        image:"https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.2.1478845952.1641254400",
        name:"Gym..",
        info:"Most people go to the gym to achieve physical fitness goals such as weight loss, muscle tone or increased endurance.But regularly working out at the gym can provide excellent emotional benefits, too.",
        date:"Fitness/ 22 jan 2022",
    description:"A gym is a place with a number of equipments and machines used by the people to do exercises. Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises",
       }
]


const fitnessDetails=(req, res)=>{res.send(fitness)}
module.exports.fitnessDetails=fitnessDetails