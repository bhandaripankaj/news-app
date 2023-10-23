import './index.css';

function Home() {
  const worldNews = ["market.jpeg","worldcup.jpeg","football.jpeg","world-map.avif"]
  return (
    <div>
    <div className="Home">
        <div className='left'>
            <img src='home-img.jpg'></img>
            <div>
            <h4>Why brands choose Dribbble to hire design talent</h4>
            <p>
            Online media is important for society in informing and shaping opinions, hence raising the question of what drives online news consumption. Here we analyse the causal effect of negative and emotional words on news consumption using a large online dataset of viral news stories. Specifically, we conducted our analyses using a series of randomized controlled trials (N = 22,.. </p>
            </div>
       
        </div>
        <div className='right'>
          {Array.from({length:4}).map((el,index)=>(
              <div>
            <div key={index+1} className='right-inner'>
            <img src='home-img.jpg'></img>
               <div className='inner-div'>
                <h4>Discover trending designs.Browse and save your favorite design projects for endless inspiration.</h4>
                <p>
                The newsroom phrase ‘if it bleeds, it leads’ was coined to reflect the intuition among journalists that stories about crime, bloodshed and tragedy sell more newspapers than stories about good news1. However, a large portion of news readership now 
                </p>
               </div>
            </div>
             {index !==3 && (<hr />)}
            </div>
          )) }
        </div>
    </div>
    <hr className='custom-hr'/>
    <div className='main-news'>
       <div className='news-headline'>
        <h2>Top Stories</h2>
        <div >
          {Array.from({length:5}).map((el,index)=>(
            <div className='stories'>
          <div>
          <img src='fire.jpeg' ></img>
          <div className='content'> 
            <h4>End Of The World</h4>
            <p>The end of the world as we know it is not the end of the world ... it is also the end of a way of knowing the world. "When a world ends, its systems and stories come apart, even the largest of th...</p>
          </div>
          </div>
          {index !== 4 &&<hr/>}
          </div>
            ))}
        </div>
       </div>
       <div className='news-headline'>
        <h2>Sports</h2>
        <div > 
        {Array.from({length:2}).map((el,index)=>(
          <div className='sports'>
        <div>
          <img src='sports.jpeg' ></img>
          <div >
            <h4>End Of The World</h4>
            <p>The end of the world as we know it is not the end of the world ... it is also the end of a way of knowing the world. "When a world ends, its systems and stories come apart, even the largest of th...</p>
          </div>
        </div>
         {index !==1 && <hr/>}
         </div>
        ))}
        </div>
       </div>
       <div className='news-headline'>
        <h2>Lates News</h2>
        <div>
          {Array.from({length:3}).map((el,index)=>(
            <div className='lates'>
            <div > 
              <img src='war.jpeg' ></img>
              <div>
                <h4>End Of The World</h4>
                <p>The end of the world as we know it is not the end of the world ... it is also the end of a way of knowing the world. "When a wor th...</p>
              </div>
            </div>
           {index !==2 && <hr/>}
            </div>
          ))}
        </div>
       </div>
    </div>
    <div className='world-wide'>
      <hr></hr>
      <h4>World Wide News</h4>
    </div>
    <div className='world-news'>
        <div className='left'>
         <img src='world-map.avif'></img>
         <h5>World Map Globe with Steel Stand Silver Plastic Ball ...</h5>
         <p>The Earth and Constellation Globe features a 12-inch stand height with 8-inches plastic ball globe on a sturdy iron stand. Geopolitical boundaries named places </p>
        </div>
        <div className='right'>
           {worldNews.map((el,index)=>(
             <div key={index} className="item">
            <img src={el}></img>
            <h5>World Map Globe with Steel Stand Silver Plastic Ball ...</h5>
         <p>The Earth and Constellation Globe features a 12-inch stand height with 8-inches ... </p>
           </div>
           ))}
        </div>
    </div>
      </div>
  );
}

export default Home;