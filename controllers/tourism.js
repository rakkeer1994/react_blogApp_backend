let tourism = [{
    id:"1",
    name:"kashmir",
    image:"https://tse1.mm.bing.net/th?id=OIP.iW-fa75MkWoCdmPwyJcnSwHaE7&pid=Api&P=0&w=260&h=173",
    
    info:"Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. ",
    date:"Tourism /22 jan 2022" ,
    description:"Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy.",
   },
   {
    id:"2",
    image:"http://wirally.com/wp-content/uploads/2018/11/6-Reasons-To-Visit-Lambasingi-Kashmir-of-Andhra-Pradesh-This-Winter-Web.jpg",
    name:"Lammasingii",
    info:"Lambasingi is famous for its tea and coffee plantations along with little apple and strawberry farms. Moreover, the place is abounding with a variety of wildlife, flora, and fauna. ",
    date:"Tourism / 22 jan 2022 ",
    description:"The region was formerly densely covered in forests and known in the past to have supported tigers. The region is known for its diversity of birdlife. Apart, this little hamlet of Lambasingi is home to an isolated tribal community. ",
   },
   {
    id:"3",   
    image:"https://cdn1.goibibo.com/voy_ing/t_fs/india-goa-147105343003o.jpeg",
    name:"Goa-Holiday place to enjoy",
    info:"Goa is famous in India for a holiday destination, Goa Tourism & Travels is truly a traveler’s paradise. A perfect blend of Indian and Portuguese cultures.",
    date:"Tourism / 22 jan 2022",
    description:"The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
   },
   {
    id:"4",   
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn9pxQ6emOjCtQ-A_8jffOede-JwQ-fvTVQ&usqp=CAU",
    name:"Kerala the best tourism place",
    info:"Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia.",
    date:"Tourism / 22 jan 2022",
   description:"Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad",
   } ];

const tourismDetails=(req, res)=>{ res.send(tourism)}

module.exports.tourismDetails=tourismDetails