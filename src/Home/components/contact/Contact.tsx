import "./style.scss";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="paralex">
        <h3>Add your details to</h3>
        <h2>Avail Exciting Offers!</h2>
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
    </div>
  );
};
