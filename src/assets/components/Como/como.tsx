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
    </section>
  );
}

export default Como;
