import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Elara",
      surname: " Davenport",
      age: 22,
      myData: [],
      myObject: {
        test: "Salam",
      },
      isOk: true,
      myPhone: 24213131,
    };
  }

  updateState(e) {
    // key , value
    let object = {};
    object[e.target.name] = e.target.value;
    console.log(object);
    this.setState(object);

    // this.setState({
    //     myJob:'developer'
    // })
    // let object = {}
    // object[key] = value
    // this.setState(object)
  }

  render() {
    return (
      <div>
        <div className="mt-5">
          <h1 className="w-100 text-center mt-5 pt-5">
            {this.state.name} {this.state.surname} {this.state.age}
          </h1>
        </div>

        <div className="card mt-5">
          <div className="card-body input-group m-2">
            <input
              onChange={(e) => {
                this.updateState(e);
                // this.updateState('name' , e.target.value)
              }}
              className="form-control"
              name="name"
              value={this.state.name}
              placeholder="Name"
            />

            <input
              onChange={(e) => {
                // this.updateState('surname' , e.target.value)
                this.updateState(e);
              }}
              className="form-control"
              name="surname"
              value={this.state.surname}
              placeholder="Surname"
            />

            <input
              onChange={(e) => {
                this.updateState(e);
                // this.updateState('age' , e.target.value)
              }}
              className="form-control"
              name="age"
              value={this.state.age}
              placeholder="age"
            />

            <div className="card mt-5 pt-5 border border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://digipeindia.com/assets/img/hero-img-7.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center">About</h5>
                    <p className="card-text text-center">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text text-center">
                      <small class="text-muted">
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Ea officia ipsam mollitia
                        error officiis, iusto earum quis aliquid hic maiores
                        voluptatem, repellendus reiciendis nesciunt quibusdam
                        facilis aliquam molestias vitae quasi, sit neque quam
                        commodi laudantium voluptatum. Facilis beatae possimus
                        deleniti fugit cumque. Atque iusto assumenda eaque
                        debitis ducimus libero doloremque ea, at repudiandae
                        similique, iure voluptatibus? Culpa dolorum quidem quos
                        dolore ducimus a, laboriosam eos. Eaque eligendi sed
                        consequuntur ullam labore delectus quas cum porro
                        assumenda odit. Ab, voluptates ea.consectetur
                        adipisicing elit. Ea officia ipsam mollitia error
                        officiis, iusto earum quis aliquid hic maiores
                        voluptatem, repellendus reiciendis nesciunt quibusdam
                        facilis aliquam molestias vitae quasi, sit neque quam
                        commodi laudantium voluptatum. Facilis beatae possimus
                        deleniti fugit cumque. Atque iusto assumenda eaque
                        debitis ducimus libero doloremque ea, at repudiandae
                        similique, iure voluptatibus? Culpa dolorum quidem quos
                        dolore ducimus a, laboriosam eos. Eaque eligendi sed
                        consequuntur ullam labore delectus quas cum porro
                        assumenda odit. Ab, voluptates ea.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
