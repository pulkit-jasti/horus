import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMAGES
import home from "../assets/img/home.png";
import cap from "../assets/img/cap.png";
import user from "../assets/img/user.png";
import settings from "../assets/img/settings.png";
import logout from "../assets/img/logout.png";
import rightBar from "../assets/img/right-bar.png";
import welcome from "../assets/img/welcome.png";
import graph from "../assets/img/graph.png";
import progress from "../assets/img/progress.png";
import calendar from "../assets/img/calendar.png";
import date from "../assets/img/date.png";
import clock from "../assets/img/clock.png";
import messages from "../assets/img/messages.png";
import atom from "../assets/img/atom.png";
import statis from "../assets/img/statis.png";
import database from "../assets/img/database.png";
import close from "../assets/img/close.png";
import gintoki from "../assets/img/gintoki.png";

import { Modal, ModalBody, Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraModal: false,
      chatWindow: false,
      WaterModal: false,
      LookAwayModal: false,
      ExerciseModal: false,
      LunchModal: false,
      RewardModal: false,
      SleepModal: false,
      PostureModal: false,
      StressModal: false,
      studentList: [
        { firstName: "Anakin", lastName: "Skywalker" },
        { firstName: "Obi Wan", lastName: "Kenobi" },
        { firstName: "Galen", lastName: "Marek" },
        { firstName: "Qui Gon", lastName: "Jinn" },
        { firstName: "Plo", lastName: "Koon" },
        { firstName: "Ahsoka", lastName: "Tano" },
        { firstName: "Kit", lastName: "Fisto" },
        { firstName: "Luke", lastName: "Skywalker" },
        { firstName: "Jyn", lastName: "Erso" },
        { firstName: "Din", lastName: "Djarin" },
        { firstName: "Leia", lastName: "Organa" },
      ],
    };

    this.toggleWaterModal = this.toggleWaterModal.bind(this);
    this.toggleLookAwayModal = this.toggleLookAwayModal.bind(this);
    this.toggleExerciseModal = this.toggleExerciseModal.bind(this);
    this.toggleLunchModal = this.toggleLunchModal.bind(this);
    this.toggleRewardModal = this.toggleRewardModal.bind(this);
    this.toggleSleepModal = this.toggleSleepModal.bind(this);
    this.togglePostureModal = this.togglePostureModal.bind(this);
    this.toggleStressModal = this.toggleStressModal.bind(this);
  }

  toggleWaterModal() {
    this.setState((prevState) => ({ WaterModal: !prevState.WaterModal }));
  }

  toggleLookAwayModal() {
    this.setState((prevState) => ({ LookAwayModal: !prevState.LookAwayModal }));
  }

  toggleExerciseModal() {
    this.setState((prevState) => ({ ExerciseModal: !prevState.ExerciseModal }));
  }

  toggleLunchModal() {
    this.setState((prevState) => ({ LunchModal: !prevState.LunchModal }));
  }

  toggleRewardModal() {
    this.setState((prevState) => ({ RewardModal: !prevState.RewardModal }));
  }

  toggleSleepModal() {
    this.setState((prevState) => ({ SleepModal: !prevState.SleepModal }));
  }

  togglePostureModal() {
    this.setState((prevState) => ({ PostureModal: !prevState.PostureModal }));
  }

  toggleStressModal() {
    this.setState((prevState) => ({ StressModal: !prevState.StressModal }));
  }

  render() {
    return (
      <div className="home-page">
        <div className="left">
          <div className="side-bar">
            <div>
              <div className="logo">F.</div>
              <div className="icons-list">
                <img src={home} alt="" />
                <img src={cap} alt="" />
                <img src={user} alt="" />
                <img src={settings} alt="" />
              </div>
            </div>
            <Link to={"/"}>
              <img src={logout} alt="" />
            </Link>
          </div>
        </div>

        <div className="center">
          <div className="d-flex">
            <div className="left">
              <img src={welcome} alt="" />
              <div className="exams-list">
                <div className="d-flex">
                  <div className="card github-issues-list">
                    <h3>Github Issues</h3>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Change login button color</p>
                          <p className="info">#36 opened on 1 Mar 2022</p>
                        </div>
                        <div className="tag g">Easy</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Update new database URL</p>
                          <p className="info">#90 opened on 24 Feb 2022</p>
                        </div>
                        <div className="tag r">Urgent</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Update the landing page banner</p>
                          <p className="info">#47 opened on 13 Feb 2022</p>
                        </div>
                        <div className="tag y">Front-end</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Add new column in DB</p>
                          <p className="info">#103 opened on 6 Apr 2022</p>
                        </div>
                        <div className="tag g">Easy</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Date picker not working</p>
                          <p className="info">#28 opened on 19 Jan 2022</p>
                        </div>
                        <div className="tag v">Bug</div>
                      </div>
                    </div>
                  </div>

                  <div className="card jira-tasks">
                    <h3>Jira Tasks</h3>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Source and create images</p>
                          <div className="d-flex">
                            <div className="tag g">Completed</div>
                            <div className="priority r">High</div>
                          </div>
                        </div>
                        <div className="date">12-07-2022</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Create a feedback mechanism</p>
                          <div className="d-flex">
                            <div className="tag r">Overdue</div>
                            <div className="priority g">Low</div>
                          </div>
                        </div>
                        <div className="date">18-02-2022</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Setup the CD/CI pipeline</p>
                          <div className="d-flex">
                            <div className="tag b">In progress</div>
                            <div className="priority y">Medium</div>
                          </div>
                        </div>
                        <div className="date">09-11-2022</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Update the new design system </p>
                          <div className="d-flex">
                            <div className="tag b">In progress</div>
                            <div className="priority r">High</div>
                          </div>
                        </div>
                        <div className="date">04-12-2022</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex">
                        <div>
                          <p className="des">Organize the feedback</p>
                          <div className="d-flex">
                            <div className="tag g">Completed</div>
                            <div className="priority y">Medium</div>
                          </div>
                        </div>
                        <div className="date">12-23-2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right card">
                <h3>Contacts</h3>

                <div className="student-list">
                  {this.state.studentList.map((el, id) => {
                    return (
                      <div className="student-wrapper" key={id}>
                        <img src={`https://ui-avatars.com/api/?name=${el.firstName}+${el.lastName}`} alt="" />
                        <p>{`${el.firstName} ${el.lastName}`}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-buttons card">
          <button onClick={this.toggleWaterModal}>Water</button>
          <button onClick={this.toggleLookAwayModal}>Look away</button>
          <button onClick={this.toggleExerciseModal}>Exercise</button>
          <button onClick={this.toggleLunchModal}>Lunch</button>
          <button onClick={this.toggleRewardModal}>Reward</button>
          <button onClick={this.toggleSleepModal}>Sleep time</button>
          <button onClick={this.togglePostureModal}>Posture correction</button>
          <button onClick={this.toggleStressModal}>Stressed</button>
        </div>

        {/* <div className="right">
          <img src={calendar} alt="" />
          <img src={messages} alt="" />
        </div> */}

        <Modal centered size="md" className="all-modal" toggle={this.toggleWaterModal} isOpen={this.state.WaterModal}>
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleWaterModal} />
            <h3>Drink some water</h3>
            <p>It's been a while since you drank some water!</p>
            <iframe src="https://embed.lottiefiles.com/animation/38282"></iframe>
          </ModalBody>
        </Modal>

        <Modal
          centered
          size="md"
          className="all-modal"
          toggle={this.toggleLookAwayModal}
          isOpen={this.state.LookAwayModal}
        >
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleLookAwayModal} />
            <h3>Look away from your screen</h3>
            <p>You have been starig at your screen for a long time which can strain your eyes</p>
            <iframe src="https://embed.lottiefiles.com/animation/95914"></iframe>
          </ModalBody>
        </Modal>

        <Modal
          centered
          size="md"
          className="all-modal"
          toggle={this.toggleExerciseModal}
          isOpen={this.state.ExerciseModal}
        >
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleExerciseModal} />
            <h3>Take a break to stretch </h3>
            <p>You have been sitting since a long time, how about you stretch your muscles and exercise a little</p>
            <iframe src="https://embed.lottiefiles.com/animation/42941"></iframe>
          </ModalBody>
        </Modal>

        <Modal centered size="md" className="all-modal" toggle={this.toggleLunchModal} isOpen={this.state.LunchModal}>
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleLunchModal} />
            <h3>Lunch Time!</h3>
            <p>Finally! It's lunch break time. Have some delicious food and come back</p>
            <iframe src="https://embed.lottiefiles.com/animation/99270"></iframe>
          </ModalBody>
        </Modal>

        <Modal centered size="md" className="all-modal" toggle={this.toggleRewardModal} isOpen={this.state.RewardModal}>
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleRewardModal} />
            <h3>Great job! Here's a gift for you</h3>
            <p>You have done a great job this week! Here's your reward</p>
            <iframe src="https://embed.lottiefiles.com/animation/98079"></iframe>

            <div className="reward">
              <div className="box">AJ28S7NP3L</div>
              <p>UberEats $40 coupon</p>
            </div>
          </ModalBody>
        </Modal>

        <Modal centered size="md" className="all-modal" toggle={this.toggleSleepModal} isOpen={this.state.SleepModal}>
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleSleepModal} />
            <h3>Sleep Time</h3>
            <p>It's very late, you should go and get a solid 7 hours of sleep</p>
            {/* <iframe src="https://embed.lottiefiles.com/animation/18839"></iframe> */}
            <iframe src="https://embed.lottiefiles.com/animation/30959"></iframe>
          </ModalBody>
        </Modal>

        <Modal
          centered
          size="lg"
          className="all-modal posture"
          toggle={this.togglePostureModal}
          isOpen={this.state.PostureModal}
        >
          <ModalBody>
            {/* <img src={close} alt="" onClick={this.togglePostureModal} /> */}
            <h3>Please correct your posture</h3>
            <p>You have a bad posture, correct it to avoid body pains</p>
            <img src={gintoki} alt="" />
          </ModalBody>
        </Modal>

        <Modal centered size="lg" className="all-modal" toggle={this.toggleStressModal} isOpen={this.state.StressModal}>
          <ModalBody>
            <img src={close} alt="" onClick={this.toggleStressModal} />
            <h3>Take a 15 minute break</h3>
            <p>You seem very stressed, why don't you go out and get some air</p>
            <iframe src="https://embed.lottiefiles.com/animation/52408"></iframe>

            <div className="btn-wrapper">
              <button>Contact Spouse</button>
              <button>Contact HR</button>
              <button>Emergency</button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Home;
