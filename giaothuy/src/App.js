import "./App.css";
import avatar from "./avatar.png";
import zaloIcon from "./assets/icon-zalo.png";

function App() {
  return (
    <div className="app">
      <img src={avatar} alt="avatar" />
      <h2>Giao Thủy</h2>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.facebook.com/giaothuy25.1"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"
              alt="facebook"
            />
          </div>
          <p>Facebook</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.instagram.com/ntg_thuy/"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
              alt="instagram"
            />
          </div>
          <p>Instagram</p>
          <div className=""></div>
        </a>
      </div>
      <div className="social">
        <a rel="noopener noreferrer" target="__blank" href="tel:+84905565769">
          <div className="icon">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/phone.png"
              alt="phone"
            />
          </div>
          <p>Số điện thoại</p>
          <div className=""></div>
        </a>
      </div>
      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://zalo.me/84905565769"
        >
          <div className="icon">
            <img src={zaloIcon} alt="zalo" />
          </div>
          <p>Zalo</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="mailto:ngthigiaothuy@yahoo.com"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/apple-mail.png"
              alt="email"
            />
          </div>
          <p>Email</p>
          <div className=""></div>
        </a>
      </div>
    </div>
  );
}

export default App;
