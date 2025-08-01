import React, { Component } from "react";
import "./Faq.css";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const faqs = [
      {
        question: "What is your organization about?",
        answer:
          "We’re a nonprofit dedicated to wildlife conservation and hands-on education. We host year-round programs for all ages.",
      },
      {
        question: "Are your programs free?",
        answer:
          "Yes! All of our educational programs are free to the community, thanks to generous donors and volunteers.",
      },
      {
        question: "How can I get involved?",
        answer:
          "You can volunteer, donate, or enroll in one of our many programs by visiting the 'Get Involved' page.",
      },
      {
        question: "Where are you located?",
        answer:
          "We’re located in Clinton Township, Michigan. Come visit us for a fun and educational day!",
      },
    ];

    return (
        
      <div className="faq-container">
        <h4>Frequently Asked Questions</h4>
        <div className="faq">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${this.state.activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => this.toggleFAQ(index)}
              >
                {item.question}
              </div>
              {this.state.activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Faq;