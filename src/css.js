const string = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    font-family: inherit;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .skin {
      position: relative;
      height: 100vh;
      background: rgb(255,230,0);
  }
  .nose {
    width: 0px;
    height: 0px;
    border-top: 9px solid black;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    position: absolute;
    left: 50%;
    top: 143px;
    margin-left: -10px;
    z-index: 5;
  }
  @keyframes noseWave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: noseWave 0.23s infinite linear;
  }
  .oval {
    position: absolute;
    width: 22px;
    height: 5px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background: black;
    top: -14px;
    left: -11px;
  }
  .eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgb(46,46,46);
    border-radius: 50%;
  }
  .eye.left {
    transform: translateX(-120px);
  }
  .eye.right {
    transform: translateX(120px);
  }
  .eye::before {
    content: '';
    display: block;
    border: 3px solid black;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    position: relative;
    right: -5px;
    top: -1px;
    animation: eyeMove 3s infinite;
  }
  @keyframes eyeMove{
  0%,100%{
    top:-1px;
    right:-5px;
  }
  30%,40%,60%,70%{
    top: 1px;
    right: -18px;
  }
  50%{
    top: 1px;
    right: -13px;
  }
  80%,90%{
    top: 18px;
    right: -18px;
  }
}
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -12px;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 86px;
    height: 30px;
    position: absolute;
    left: 50%;
    background-color: rgb(255,230,0);
    z-index: 1;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 30px;
    border-top: none;
    border-right: none;
    transform: rotate(-25deg);
    margin-left: -86px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 30px 0;
    border-top: none;
    border-left: none;
    transform: rotate(25deg);
  }
  .mouth .down {
    height: 180px;
    width: 230px;
    position: absolute;
    left: 50%;
    top: -2px;
    margin-left: -115px;
    overflow: hidden;
  }
  .mouth .down .tongue {
    border: 4px solid black;
    width: 100%;
    height: 800px;
    position: absolute;
    bottom: 10px;
    left: 0;
    border-radius: 0 0 115px 115px / 0 0 800px 800px;
    background-color: rgb(155,0,10);
    overflow: hidden;
  }
  .mouth .down .tongue::after {
    content: '';
    display: block;
    width: 130px;
    height: 140px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -65px;
    border-radius: 50% 50% 0 0;
    background-color: rgb(255,72,95);
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    border-radius: 50%;
    background-color: #F00;
  }
  .face.left {
    transform: translateX(-168px);
  }
  .face.right {
    transform: translateX(168px);
  }
`;
  export default string;




