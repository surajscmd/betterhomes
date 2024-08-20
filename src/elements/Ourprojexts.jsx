import React from 'react'
import Projects from '../componets/Projects'

 const Ourprojexts = () => {
  const projectlist = [{
    name: "Purva Meraki",
    location: "Hosapalaya, Muneshwara Nagar HSR Layout",
    url:"https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf639c358835be2.gif",
    date: "31-10-2027",
    price: "4.14 Crore ",
    dec: "Purva Meraki in HSR Layout, South East Bengaluru, offers world-class amenities including an Infinity Pool, Skywalk, Party Lawn, Yoga Deck, Barbeque Area, Outdoor Gym, Hammocks, Kids Play Area, and 76% lush green open space",
    bedconfig: "3 BHK , 4 BHK",
    pricepsq: "15000",
    type: "Ultra Luxury",
    theme: "Harmony of nature and modern urban living",
    config: "(2B+G+8) 1 tower",
    units: "44"
  },
  {
    name: "CasaGrand Flamingo" ,
    location: "ITI Layout, Sector 7, HSR Layout",
    url:"https://www.casagrand.co.in/wp-content/uploads/2023/10/Elevation-View-A-HR-2-scaled.jpg?ver=1.201",
    date: "October 2025",
    price:"2.14 Crore",
    dec: "Luxurious 2, 3, and 4 BHK apartments with expansive amenities, grand entrance, lavish driveway, and 77% open spaces for maximum light and ventilation. Highlight: 2.7 acres of landscaped greenery, offering a refined living experience.",
    bedconfig: "3 BHK , 4 BHK",
    pricepsq: "10999",
    type: "Luxury",
    theme: "luxurious, comfortable, and well-connected living environment",
    config: "(2B+G+13) 2 tower",
    units: "218"
  },
  {
    name: "Shriram Esquire" ,
    location: "Ejipura, 1st Block Koramangala, Koramangala",
    url:"https://www.homznspace.com/wp-content/uploads/2023/04/Main-Elevation-Shriram-Esquire-Koramangala.jpg",
    date: "January 2027",
    price: " 2.79 Crore",
    dec: "Ultra-luxury 3 and 4 BHK 'Invitation Only' apartments, designed for fine living with contemporary Esquire design. These exclusive homes ensure perfect equilibrium, offering magnificent dwellings that cater precisely to your needs. Upgrade to perfection.",
    bedconfig: "3 BHK , 4 BHK",
    pricepsq: "14000",
    type: "Luxury",
    theme: "Luxury, exclusivity, and sophisticated living",
    config: "2 tower",
    units: "128"
  },
  {
    name: "Raheja Vivarea" ,
    location: "3rd Block, Koramangala",
    url:"https://img.staticmb.com/mbimages/project/Photo_h470_w1080/Project-Photo-1-Raheja-Vivarea-Bangalore-5007722_480_1366_470_1080.jpg",
    date:" ",
    price: "4.11 Crore",
    dec: "Raheja Vivarea in Koramangala on Sarjapur Road offers excellent connectivity, close to Silk Board, HSR Layout, and Indiranagar. Amenities include a clubhouse, gym, swimming pool, sports courts, children's play area, party hall, landscaped gardens, and 24/7 state-of-the-art security.",
    bedconfig: "3 BHK , 4 BHK , 5 BHK",
    pricepsq: "(On Request)",
    type: "ultra Luxury",
    theme: " ",
    config: "(2B + G + 10) 9 tower",
    units: "150"
  },
  {
    name: "Pacifica Hamilton Tower" ,
    location: "Teachers Colony, Koramangala",
    url:"https://pacificacompanies.co.in/wp-content/uploads/2017/04/bang1.jpg",
    date: "December 2024",
    price: "3.61 Crore",
    dec: "HAMILTON TOWERS offers high-rise apartments amidst landscaped gardens and activity areas, designed for a comfortable and wholesome lifestyle. Conceived by Pacifica, these residences provide world-class amenities, promoting health and recreation with fashionable living at your doorstep.",
    bedconfig: "3 BHK , 4 BHK ",
    pricepsq: "13000",
    type: "Luxury",
    theme: "Elevated Living: Embracing Comfort, Wholesomeness, and Fashionable Lifestyle",
    config: " ",
    units: "39"
  },
  {
    name: "La Palazzo" ,
    location: "Koramangala",
    url:"https://www.homznspace.com/wp-content/uploads/2013/05/La-Palazzo-1.jpg",
    date: " ",
    price: "3.61 Crore",
    dec: "La Palazzo in Koramangala is renowned for its opulent living experience. Offering luxurious residences with modern amenities, it stands out for its exquisite design, spacious interiors, and prime location. With meticulous attention to detail and top-notch facilities, La Palazzo redefines upscale living in Bengaluru.",
    bedconfig: "4 BHK, 5 BHK ",
    pricepsq: "15000",
    type: "Luxury",
    theme: "Modern luxury and elegance",
    config: "(2B + G + 10) 1 tower",
    units: "151"
  },
  {
    name: "Purva Orinted Grand" ,
    location: "Lalbhag Road",
    url:"https://houssed.com/assets/projects/images/53f7659f0819013aadbea2430d5d4d87.jpg",
    date: "june 2027 ",
    price: "5.5 Crore",
    dec: "Experience luxury and innovation at Purva Oriented Grand. Prime location, state-of-the-art amenities, eco-friendly design, and exclusive facilities like infinity pool and spa offer a sophisticated lifestyle with top-notch security and personalized service.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "15000",
    type: "ultra Luxury",
    theme: "Luxury and modern livingLuxury Living with Innovation and Sustainabilit",
    config: "(G + 24) 1 tower",
    units: "79"
  },
 
  {
    name: "Manikchand - Svamitva SoulSpring" ,
    location: "ITI Layout, Sector 2, HSR Layout",
    url:"https://svamitva.com/soulspring/img/Svamitva-Soulspring-Luxury-Apartments-HSR-Layout.jpg",
    date: "December 2028",
    price: "2.55 Crore",
    dec: "Manikchand-Svamitva SoulSpring in Bangalore offers luxurious apartments with world-class amenities, including landscaped gardens, a state-of-the-art clubhouse, swimming pool, fitness center, children's play area, and 24/7 security, providing an exceptional living experience in a prime location.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "15000",
    type: "ultra Luxury",
    theme: "Luxurious Living in Harmony with Nature",
    config: "(G + 24) 1 tower",
    units: "172"
  },
  {
    name: "Purava Waeves" ,
    location: "Yemalur ,East Bangalore",
    url:"https://www.purvaweaves.live/images/banner/purva-weaves.webp",
    date: "2024",
    price: " ",
    dec: "Purvanka Weaves in Bangalore offers a blend of modern amenities and serene living, featuring thoughtfully designed spaces, lush greenery, and top-notch facilities. Its prime location ensures excellent connectivity, making it an ideal choice for a harmonious urban lifestyle.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "  ",
    type: "ultra Luxury",
    theme: "Luxury and modern living",
    config: " ",
    units: "150 + "
  },
  {
    name: "Prestige Rainforest Project" ,
    location: "Varthur, Whitefield",
    url:"https://cdn.prod.website-files.com/64410f25532729fc6f592c77/65e6006809cda3bc5c494b62_prestige-clairemont.jpeg",
    date: "2028",
    price: "3.5 Crore",
    dec: "Prestige Rainforest in Bangalore offers a luxury forest-themed township, featuring the Forum Mall, Tech Park, hotels, and cutting-edge fitness facilities. With serene green spaces and a 100,000 sq ft clubhouse (G+2), every amenity is designed to elevate your lifestyle, blending modern comfort with natural tranquility.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "15000",
    type: "ultra Luxury",
    theme: "Towship - Forest theme",
    config: "(G + 19) 1 tower",
    units: "172"
  },

  {
    name: "DNR Spring Leaf" ,
    location: "Koramangala",
    url:"https://www.homznspace.com/wp-content/uploads/2019/03/DNR-Spring-Leaf.jpg",
    date:" ",
    price: "1.76 Crore",
    dec: "The project offers spacious Apartments with luxurious features. It has excellent connectivity & it is located at the crux of Koramangala near existing and upcoming communities & facilities.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq:" ",
    type: "ultra Luxury",
    theme: "Towship - Forest theme",
    config: "(G + 19) 1 tower",
    units: "59"
  },
 
  {
    name: "Brigade Sanctuary" ,
    location: "Dommasandra, Varthur",
    url:"https://www.homznspace.com/wp-content/uploads/2023/11/Elevation-C-Brigade-Sanctuary.jpg",
    date: " dec 2028",
    price: "3.5 Crore",
    dec: "Prestige Rainforest in Bangalore offers a luxury forest-themed township, featuring the Forum Mall, Tech Park, hotels, and cutting-edge fitness facilities. With serene green spaces and a 100,000 sq ft clubhouse (G+2), every amenity is designed to elevate your lifestyle, blending modern comfort with natural tranquility.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "15000",
    type: "ultra premium",
    theme: "Integrate modernism with the natural beauty",
    config: "(2B + G + 27)",
    units: "1275"
  },

  {
    name: "Prestige Rain Tree Park" ,
    location: "Varthur",
    url:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*7BvI4CMwzywWIqedMxDnuw.jpeg",
    date: "Dec 2026",
    price: "2.95 Crore",
    dec: "Prestige Raintree Park offers a perfect blend of luxury and comfort with its spacious apartments, world-class amenities, and lush green surroundings. Located in a prime area, it ensures excellent connectivity and a serene, high-quality living experience for residents.",
    bedconfig: "3 BHK, 4 BHK ",
    pricepsq: "15000",
    type: "ultra premium",
    theme: "luxury living in harmony with nature",
    config: "(2B + G + 19)",
    units: "1365"
  },


]




  return (
    <div className='ourproject-container'>
        <p className='partner-header'>Our Projects</p>      
        <div className='project-container-list'> 
        {projectlist.map((data, i)=><Projects dataobject={data} key={i} />)}          
        </div>
    </div>
  )
}

export default Ourprojexts