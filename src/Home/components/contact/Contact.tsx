import "./style.scss";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="paralex">
        <h2>Contact us</h2>
      </div>
      <form
        className="form-container"
        action="https://formspree.io/f/xwkdaprb"
        method="post"
      >
        <div className="input-area">
          <input type="text" name="name" id="" placeholder="name" />
        </div>
        <div className="input-area">
          <input type="text" name="email" id="" placeholder="email" />
        </div>
        <div className="input-area">
          <input type="text" name="mobile" id="" placeholder="mobile" />
        </div>
        <div className="btn-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
