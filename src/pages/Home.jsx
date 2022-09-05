import { useState, useEffect } from "react";
import liff from "@line/liff";
function Home() {
  const LIFF_ID = "1657422004-mYELzrlA";
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    isInClient: false,
    os: "ios",
    isInAppBrowser: false,
    isLoggedIn: false,
  });
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");

  const liffInit = async () => {
    try {
      await liff.init({ liffId: LIFF_ID });
      setMessage("LIFF init succeeded.");

      const { userAgent } = navigator;
      setData({
        isInClient: liff.isInClient(),
        isLoggedIn: liff.isLoggedIn(),
        os: liff.getOS(),
        isInAppBrowser: !liff.isInClient() && userAgent.includes("Line"),
      });
      if (liff.isLoggedIn()) {
        const bio = await liff.getProfile();
        setProfile(bio);
        const context = liff.getContext();
        console.log(context);
      }
    } catch (error) {
      setMessage("LIFF init failed.");
      setError(`${error}`);
    }
  };

  useEffect(() => {
    liffInit();
  }, [message]);

  const logout = () => {
    liff.logout();
  };

  const login = () => {
    liff.login();
  };

  const renderLoginButton = () => {
    if (data.isLoggedIn) {
      return (
        <button data-testid="logout" onClick={logout}>
          Logout
        </button>
      );
    }
    return (
      <button data-testid="login" onClick={login}>
        Login
      </button>
    );
  };
  const sendMsg = async () => {
    if (liff.getContext().type !== "none") {
      await liff.shareTargetPicker([
        {
          type: "flex",
          altText: "This is a Flex Message",
          contents: {
            type: "bubble",
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  style: "primary",
                  height: "sm",
                  action: {
                    type: "uri",
                    label: "Add to Cart",
                    uri: "https://developers.line.me",
                  },
                },
              ],
            },
          },
        },
      ]);
      alert("Message sent");
    }
  };

  return (
    <>
      <div className="App">
        {/* <h1>create-liff-app</h1>
        {message && <p>{message}</p>}
        {error && (
          <p>
            <code>{error}</code>
          </p>
        )} */}
        {data && <div>{renderLoginButton()}</div>}
        {data && data.isLoggedIn && (
          <>
            <div className="profile">
              <img
                src={profile.pictureUrl}
                width="200"
                alt="profileUrl"
                loading="lazy"
              />
              {/* <p data-testid="userId">userId: {profile.userId}</p> */}
              <p data-testid="displayName">
                displayName: {profile.displayName}
              </p>
            </div>
            <div>
              <button onClick={() => sendMsg}>sent Data</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
