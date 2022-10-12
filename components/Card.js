export const Card = (prop) => (
    <div className='col-sm-6'>
    <div className="card" key={prop.rocket.id}>
      <img src={prop.rocket.flickr_images[1]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prop.rocket.name}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper justo a ligula varius, eu accumsan turpis imperdiet. Donec euismod justo at turpis tempor volutpat.</p>
        <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#popup${prop.rocket.id}`}>View Details</a>
      </div>
    </div>
    </div>
);