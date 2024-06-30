@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');


html { 
    scroll-behavior: smooth;
    overflow: hidden;
}

.load{
  background: linear-gradient(180deg,rgb(18,24,27) 50%,rgb(32,39,55) 100%);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.pyramid-loader {
  z-index: 999;
  position: fixed;
  width: 300px;
  height: 300px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width: 70px;
  height: 70px;
/* you can choose any gradient or color you want */
  /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .side2 {
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side3 {
  transform: rotateX(30deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side4 {
  transform: rotateX(-30deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .shadow {
  width: 60px;
  height: 60px;
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
}

body{
  	background: linear-gradient(180deg,rgb(18,24,27) 50%,rgb(32,39,55) 100%);
  	min-height: 100vh;
  	background-attachment: fixed;
  	padding: 0;
  	margin: 0;
}

#trailer{
  width: 15px;
  height: 15px;
  background-color: white;
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  transition: all cubic-bezier(0.19,1,0.22,1) 0.7s;
  pointer-events: none;
}



#navbar{
  min-height: 10vh;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  padding-top: 5px;
  align-items: center;
  justify-content: space-between;
}

#navbar img{
  width: 30px;
}

#navbar img:hover{
  content: url("Images/logohov.png");  
}


.navbtn{
  display: flex;
  gap: 50px;
  align-items: center;
}

.navbtn a{
  color: white;
  text-decoration: none;
  font-family: 'Sofia Sans', sans-serif;
  font-weight: 600;
  font-size: 1.3vw;

}

.navbtn a:hover{
  border-bottom: 1px solid #ffa640;
  padding-bottom: 3px;
  color: #ffa640;
  transform: translate(0px,0px)
}






h1,p{
	position: relative;
}
#main{
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  min-height: 100vh;
  opacity: 1;
}

#main img{
  width: 25vw;
  filter: drop-shadow(7px 7px 7px black);
}


#main div{
  width: 45%;
}

#main div:nth-child(2){
  display: flex;
  justify-content: flex-end;
}

#main p:nth-child(1){
  color: #f7f7f7;
  font-family: 'Signika Negative', sans-serif;;
  font-size: 2vw;
}

#main p:nth-child(2){
  color: white;
  font-family:'unbounded',cursive;
  font-size: 2.7vw;
}




#skills{
  min-height: 100vh;
  display: flex;
  padding-right: 100px;
  padding-left: 100px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#skills .skill-d:nth-child(3){
  flex-wrap: wrap-reverse;
}
#skills .skill-d:nth-child(2){
  flex-wrap: wrap;
}


.skill-d{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.skill-d div{
  width: 45%;
}

.skill-d div img{
  width: 80%;
}

#img-s{
  display: flex;
  justify-content:center;
}

.heading{
  font-size: 2vw;
  font-family:'unbounded',cursive;
  text-align: center;
}


#skills .heading{
  grid-column: span 2;
  color: white;
}

.grid-itm{
  font-family: 'Sofia Sans', sans-serif;
  font-size: 1.5vw;
  color: white;
}


.title{
  font-family:'unbounded',cursive;
  font-size: 1.3vw;
  width: max-content;
  padding: 5px;
  padding-left: 0;
  margin-top: 0;
}

















#projects{
  padding-right: 100px;
  padding-left: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap:50px;
}

#projects .heading{
  grid-column: span 3;
  color: white;
}

.cards{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.card{
  width: 220px;
  height: 300px;
  background-color: #2b3941;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 16px,
   rgba(17, 17, 26, 0.1) 0px 8px 24px, 
   rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.project-title{
  display: flex;
  align-items: center;
  gap: 10px;
  font-family:'unbounded',cursive;
  font-size: 1em;
  width: max-content;
  padding: 5px;
  color: white;
}

.project-body{
  font-family: 'Sofia Sans', sans-serif;
  font-size: 0.9em;
  color: white;
}

.card-details{
  height: 100%;
  padding: 30px;
}


.project-title{
  font-size: 0.8em;
}

.tags{
  font-family: 'Sofia Sans', sans-serif;
  font-style: italic;
  font-size: 0.8em;
  color: rgb(16, 230, 123);
  padding-top: 10px;
}

.card-button{
  opacity: 0;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  transform: translate(0,120%);
  border: 0;
  font-family: 'Signika Negative', sans-serif;
  color: black;
  font-weight: 700;
  font-size: 1em;

}

.card:hover .card-button{
  opacity: 1;
  transform: translate(0,50%);
  transition: 0.3s ease-in-out;
}

#one:hover{
  border: 1px solid #ffa640;
  transition: 0.3s ease-in-out;
}

#two:hover{
  border: 1px solid #306af1;
  transition: 0.3s ease-in-out;
}

#three:hover{
  border: 1px solid #ef4444;
  transition: 0.3s ease-in-out;
}

.card:hover{
  box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 16px,
   rgba(17, 17, 26, 0.1) 0px 8px 24px, 
   rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.note{
  grid-column: span 3;
  color: white;
  font-family: 'Sofia Sans', sans-serif;
  font-style: italic;
}
a{
  text-decoration: none;
  color: #ffa640;
  font-size: 15px;
}


#footer{
  display: flex;
  justify-content: center;
  padding: 30px;
}   

.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.container button {
  width: 50px;
  height: 50px;
  border: none;
  background-color: #2b3941;
  transition: 0.3s;
  cursor: pointer;
}

.icon {
  width: 26px;
  height: 26px;
  fill: #fff;
}

.container a:nth-child(1) button:hover {
  background-color: #1c2128;
}

.container a:nth-child(2) button:hover {
  background-color: #0077b5;
}

.container a:nth-child(3) button:hover {
  background-color: crimson;
}

.container a:nth-child(4) button:hover {
  background-color: #38c0fe;
}



.titly {
  color: gray;
  font-weight: 300;
  font-size: 15px;
  font-family:'Unbounded', cursive;
  position: absolute;
  top: -35px;
  left: 0;
}




@media (max-width:950px){

  #navbar{
    min-height: auto;
    padding-top: 10px;
  }

  #navbar a{
    font-size: 15px;
  }

  #main{
    min-height: auto;
    padding: 100px;
  }

  #main p:nth-child(1){
    color: #f7f7f7;
    font-family: 'Signika Negative', sans-serif;;
    font-size: 1.4vw;
  }
  
  #main p:nth-child(2){
    color: white;
    font-family:'unbounded',cursive;
    font-size: 2vw;
  }





  #skills{
    padding: 100px;
    min-height: auto;
  }

  .skill-d div{
    padding-top: 30px;
    width: 40%;
    font-size: 1.3vw;
  }


  #projects{
    min-height: auto;
    padding: 100px;
  }
}




@media (max-width:600px){
  #navbar{
    padding-left: 30px;
    padding-right: 30px;
  }
  .navbtn{
    gap: 20px;
  }

  #skills{
    padding: 10px;
  }
  #main{
    padding: 30px;
    padding-bottom: 100px;
  }

  #main div img{
    padding-bottom: 10px;
    width: 70%;
  }

  #main div:nth-child(1){
    width: 100%;
  }

  #main div:nth-child(2){
    width: 100%;
    justify-content: center;
  }
  
  #main p:nth-child(1){
    color: #f7f7f7;
    font-family: 'Signika Negative', sans-serif;;
    font-size: 5vw;
  }
  
  #main p:nth-child(2){
    color: white;
    font-family:'unbounded',cursive;
    font-size: 6.4vw;
  }




  .heading{
    font-size: 6vw;
  }

  .title{
    font-size: 4vw;
  }

  #skills{
    margin: 30px;
    padding-bottom: 100px;
  }
  .skill-d div{
    width: 100%;
    font-size: 4.5vw;
  }

  .skill-d div img{
    width: 100%;
  }
  #projects{
    padding: 20px;
    padding-bottom: 100px;
  }
}
