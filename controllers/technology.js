
let technology=[
    {
        id:"9",
        image:"https://1.bp.blogspot.com/-2G41xqhVg80/XaXvkx2z0-I/AAAAAAAAAFY/oyQM0YvdilEGm0PzKUcj6FEpkwa2GlhnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/communication-digitale.gif",
        name:"Communication-Technology",
        info:"Communication is indeed rather essential in all aspects of our personal and professional life to express emotions, share information, exchange ideas and what not",
        date:"Technology/22 jan 2022",
    description:"Communication technology definition Communication technology refers to all the tools used to send, receive, and process information. In today’s fast climate, efficiency and convenience are the keys to successful communication technology.",
    },
    {
        id:"10",
        image:"https://www.trade.gov/sites/default/files/2020-09/Health%2025%20-%20MedTech.jpeg",
        name:"Medical-Technology",
        info:"Medical Technology can be defined as the technologies that diagnose, treat and/or improve a person’s health and wellbeing.",
        date:"Technology/22 jan 2022",
        description:"Medical technology includes medical and surgical procedures, drugs, equipment and facilities, and the organizational and supportive systems within which care is provided. ",
    },
    {
        id:"11",
        image:"https://tse1.mm.bing.net/th?id=OIP.4hFnQfuAVvzo4bheVeii-AHaE8&pid=Api&P=0&w=253&h=168",
        name:"Robot-Technology",
        info:"Robotics technology is a field which is related to artificial intelligence. It is the utilization of machines, operation, and designing robots for performing tasks that were done by humans",
        date:"Technology/22 jan 2022",
        description:"Robots are machines that can carry out complex actions automatically. They generally need three elements: sensors such as cameras, lidar, or microphones; actuators such as motors, pistons or artificial muscles, and controllers.",
    },

    {
        id:"12",
        image:"https://vir.com.vn/stores/news_dataimages/hung/122019/29/17/p24-digital-transformation-key-driver-for-agriculture.jpg",
        name:"Agricultural-Technology",
        info:"This technology refers to the technologies for machine production that are utilized on a farm.",
        date:"Technology/22 jan 2022",
     description:" Mechanical processing of soil so that it is in the proper physical condition for planting is usually referred to as tilling; adding nutrients and trace elements is called fertilizing.application of techniques to control the growth and harvesting of animal and vegetable products",
    }

]

const technologyDetails=(req, res)=>{ res.send(technology)}

module.exports.technologyDetails=technologyDetails