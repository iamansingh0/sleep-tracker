const container = document.getElementById("container");

function Left() {
  return <div className="left"></div>;
}
function Right() {
  return (
    <div className="right">
      <div className="loginside">
        <img src="icon.png" alt="logo" height="65" className="logo"/>
        <p className="hello">Hello Again !</p>
        <p className="brief">Track your sleep and analyze the timings with graphs and all</p>
        <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" className="password"/>
            <input type="submit" name="login" value="Login" className="submit"/>
            <a href="#" className="google">
                <img src="google1.png" className="googleImg"/> <p className="googleP">Sign in with Google</p>
            </a>
        </form>
        <footer>
        <p>Don't have an account?  <a href="register.htm">Register now</a>
        </p>
      </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="box">
      <Left />
      <Right />
    </div>
  );
}

ReactDOM.render(<App />, container);