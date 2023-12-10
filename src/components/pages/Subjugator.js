import React from 'react';
import '../../App.css';
import './Subjugator.css';
import ImageCarousel from '../ImageCarousel.js';

// JavaScript to synchronize horizontal scrolling with mouse scroll events
const scrollingWrapper = document.querySelector('.scrolling-wrapper');

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    scrollingWrapper.scrollLeft += event.deltaY * 5; // Adjust the scrolling speed as needed
});


function renderCard(imageSrc, subName, dryWeight, thrusters, dimensions, maxThrust, maxDepth, navigation, maxSpeed, cpu, batteryLife, cameras) {
    return (
      <div className="card">
        <img src={imageSrc} className="timeline-image" />
        <div className="description">
          <h2>{subName}</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td><strong>Dry Weight:</strong></td>
              <td>{dryWeight}</td>
              <td><strong>Thrusters:</strong></td>
              <td>{thrusters}</td>
            </tr>
            <tr>
              <td><strong>Dimensions:</strong></td>
              <td>{dimensions}</td>
              <td><strong>Max Thrust:</strong></td>
              <td>{maxThrust}</td>
            </tr>
            <tr>
              <td><strong>Max Depth:</strong></td>
              <td>{maxDepth}</td>
              <td><strong>Navigation:</strong></td>
              <td>{navigation}</td>
            </tr>
            <tr>
              <td><strong>Max Speed:</strong></td>
              <td>{maxSpeed}</td>
              <td>CPU:</td>
              <td>{cpu}</td>
            </tr>
            <tr>
              <td><strong>Battery Life:</strong></td>
              <td>{batteryLife}</td>
              <td><strong>Cameras:</strong></td>
              <td>{cameras}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

function teamTable(data){

  function rowMaker(data) {
    return data.map((element, index) => (
      <tr class='teamTable' key={index}>
        {dataFiller(element)}
      </tr>
    ));
  }

  function dataFiller(data) {
    return data.map((element, index) => (
      <td key={index}>{element}</td>
    ));
  }

  return(
  
  <table class='teamTable'>
          <thead>
              <td><strong>Name</strong></td>
              <td><strong>Position</strong></td>
              <td><strong>Major</strong></td>
              <td><strong>Email</strong></td>
          </thead>
          <tbody >

          {rowMaker(data)}
 
          </tbody>
        </table>
  
  );
}

const imagePaths = [
  '/team.png',
  '/Team-Photo-2019_1.png',
  '/sub9_2.png',
  '/Sub.png',
  '/2014teams-980x360.jpg'
  // Add more image file paths as needed
];




export default function Subjugator() {
  return (
    <>
    <div class='center'>
      <img src="/Subjugator-Logo2.png" />
    </div>
    
      {/* <h1 className='subjugator'>Subjugator</h1> */}

      <div>
      {/* <h1>Automatic Image Carousel</h1> */}
      {imagePaths.length > 0 && <ImageCarousel imagePaths={imagePaths} />}
    </div>

    <h1 >What is Subjugator?</h1>
    <p>MIL’s SubjuGator is the three time champion autonomous submarine of the <a href="https://robosub.org/">Robosub</a> AUVSI/ONR underwater
       competition {/*(2005-2007), and placed in the top 3 in eleven of the 21 years of the competition
         (including second place in 2012, 2013 and 2014). MIL’s NaviGator AMS, is the defending champion 
        in the Maritime RobotX Challenge (from our victory in our only entry in this biennial competition in 2016). 
        In 2013, MIL participated for the first time in the RoboBoat AUVSI/ONR water surface vechicle 
        competition with our PropaGator robot boat; we won! In 2014, we earned second place in the RoboBoat 
        competition. We also won the static division of the 2011 ION Robot Lawnmower competition with MIL’s 
        InstiGator robot lawnmower.*/}</p> 
    <h1 >Awards</h1>
    <p>We have placed in the top 3 in eleven of the 21 years of the competition
         (including second place in 2012, 2013 and 2014)</p>

    <h1 >Our Submarines</h1>
      {/* Horizontal scrolling cards */}
    <div class="scrolling-wrapper">

    {renderCard(
    "/Subjugator9.jpg",
    "Subjugator 9 (Present)",
    "~60 lbs",
    "Blue Robotics T200 (x8)",
    "36″ x 11″ x 16″",
    "~62 lbf static surge",
    "50 feet",
    "Teledyne Explorer (DVL)\nSensonar STIM300 (IMU)",
    "2 m/s",
    "Intel NUC 10",
    "4 hours",
    "Point Grey Blackfly Point\nGrey Chameleon See3CAM_CU20"
)}
{renderCard(
    "SubjuGator8.png",
    "Subjugator 8 (2015-2022)",
    "75 lbs",
    "Video Ray M5 (x8)",
    "15″ x 22″ x 22″",
    "62 lbf static surge",
    "150 feet",
    "Teledyne DVL\nSensonar IMU",
    "2 m/s",
    "",
    "2 hours",
    "Point Grey Blackfly (x3)"
)}
{renderCard(
    "Subjugator7.jpg",
    "Subjugator 7 (2011-2014)",
    "110 lbs",
    "6 Seabotix BTD150\n2 VideoRay GTO",
    "50″x18″x18″",
    "",
    "150 feet",
    "Teledyne Explorer DVL\nAnalog Devices IMU",
    "1 m/s",
    "Texas Instruments OMAP3530",
    "6 hours",
    "2 IDS uEye SE"
)}
{renderCard(
    "Subjugator6c.jpg",
    "Subjugator 6 (2007-2010)",
    "85 lbs",
    "4 Seabotix BTD150 2 VideoRay GTO",
    "35″x21″x18″",
    "Unkown",
    "200 feet",
    "Teledyne Explorer DVL MicroStrain IMU PNI Compass",
    "1 m/s",
    "2 Intel Core 2 Duo",
    "4 hours",
    "2 MV BlueFox"
)}
{renderCard(
    "Subjugator5a.jpg",
    "Subjugator 5 (2005-2006)",
    "32 lbs",
    "5 Seabotix BTD150",
    "24″x16″x14″",
    "Unkown",
    "15 feet",
    "IMU Compass",
    "0.7 m/s",
    "",
    "2 hours",
    "2 Webcams"
)}
{renderCard(
    "Subjugator4.jpg",
    "Subjugator 4 (2004)",
    "60 lbs",
    "4 Trolling Motors",
    "48″x30″x15″",
    "Unkown",
    "20 feet",
    "IMU Compass",
    "0.5 m/s",
    "",
    "Unknown",
    "Unknown"
)}
{renderCard(
    "Subjugator3.jpg",
    "Subjugator 3 (1999-2003)",
    "185 lbs",
    "6 Trolling Motors",
    "67″x27″x27″",
    "Unkown",
    "20 feet",
    "IMU Compass",
    "0.5 m/s",
    "",
    "Unknown",
    "Unknown"
)}
{renderCard(
    "Subjugator2.jpg",
    "Subjugator 2",
    "",
    "3 Trolling Motors",
    "",
    "",
    "",
    "IMU Compass",
    "",
    "",
    "",
    ""
)}
{renderCard(
    "Subjugator1.png",
    "Subjugator 2",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
)}


        
        {/* Add more card elements as needed  */}
    </div>
<h1>Team</h1>

{teamTable([
  ['Yovany Molina', 'Electrical Systems Leader', 'Electrical Engineering', 'molinay@ufl.edu'],
  ['Cameron Brown', 'Software and Simulation Systems Leader', 'Computer Science', 'cbrown14@ufl.edu'],
  ['Luka Bjellos', 'Mechanical Systems Leader', 'Mechanical Engineering', 'luka.bjellos@ufl.edu'],
  ['Jarrod Sanders', 'Test Platform Development Leader', 'Computer Science', 'jarrod.sanders@ufl.edu'],
  ['Blake Sanders', 'Software and Simulation Systems Co-Leader', 'Computer Engineering', 'blake.sanders@ufl.edu'],
  ['Andres Pulido', 'Mechanical Systems Advisor', 'Mechanical Engineering', 'andrespulido@ufl.edu'],
  ['Andres Castrillon', 'Mechanical Systems Co-Leader', 'Mechanical Engineering', 'andres.castrillon@ufl.edu'],
  ['Sara Tammame', 'Software and Simulation Co-Leader', 'Computer Science', 'sara.tammame@ufl.edu'],
  ['Aditya Ramesh', 'Electrical Systems', 'Electrical Engineering', 'aditya.ramesh@outlook.com'],
  ['Mehron Talebi', 'Electrical Systems', 'Electrical Engineering', 'mehron.talebi@ufl.edu'],
  ['Alex Perez', 'Systems Advisor', 'Electrical, Computer', 'alex.perez@ufl.edu'],
  ['Dr. Eric M. Schwartz', 'Director and Faculty Advisor', 'Electrical, Mechanical, Systems', 'ems@ufl.edu']

])}




    </>
  );
}