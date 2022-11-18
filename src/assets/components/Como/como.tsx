import "./como.css";

function Como() {
  return (
    <section className="body_como">
      <h1>Como Fazemos</h1>

      <div className="video_como">
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/FkzpNFv-E8g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="box_flex_como">
        <div className="box_cima">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatibus consectetur adipisci amet rem quo omnis atque accusantium aut culpa deleniti, voluptates maiores reprehenderit tempore minus facere iusto, pariatur iure?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatibus consectetur adipisci amet rem quo omnis atque accusantium aut culpa deleniti, voluptates maiores reprehenderit tempore minus facere iusto, pariatur iure?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatibus consectetur adipisci amet rem quo omnis atque accusantium aut culpa deleniti, voluptates maiores reprehenderit tempore minus facere iusto, pariatur iure?</p>
        </div>
        <div className="box_baixo">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam aspernatur, veritatis dolores sed dolore eos ad voluptatum, magni nihil praesentium maxime unde ipsa animi illo voluptas exercitationem. Rerum, nobis.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam aspernatur, veritatis dolores sed dolore eos ad voluptatum, magni nihil praesentium maxime unde ipsa animi illo voluptas exercitationem. Rerum, nobis.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam aspernatur, veritatis dolores sed dolore eos ad voluptatum, magni nihil praesentium maxime unde ipsa animi illo voluptas exercitationem. Rerum, nobis.</p>
        </div>

      </div>
    </section>
  );
}

export default Como;
