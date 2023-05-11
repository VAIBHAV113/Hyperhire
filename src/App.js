import "./App.css";
import Header from "./component/header/header";
import Image from "./component/post/Image";
import Post from "./component/post/post";
import Text from "./component/post/text";
import Reply from "./component/reply/reply";
import Comment from "./component/comment/comment";


function App() {
  return (
    <div className="App">
      <Header />
      <Post />
      <Text />
      <Image />
      <Reply />
      <Comment />
    </div>
  );
}

export default App;
