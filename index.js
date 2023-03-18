function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin!");
    let score = { red: 0, yellow: 0, blue: 0, green: 0 };
    setTimeout(() => {
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    let times = { red: Math.floor(Math.random() * 6) + 10, yellow: Math.floor(Math.random() * 6) + 10, blue: Math.floor(Math.random() * 6) + 10, green: Math.floor(Math.random() * 6) + 10 };
    let sorted = Object.keys(times).sort((a, b) => times[a] - times[b]);
    score[sorted[0]] += 50;
    score[sorted[1]] += 25;
    console.log(`Race 100M: ${sorted[0]} won with ${times[sorted[0]]} seconds, ${sorted[1]} won with ${times[sorted[1]]} seconds`);
    console.log("Score:", score);
    setTimeout(() => {
      LongJump(score, callbackFnc);
    }, 3000);
  }
  
  function LongJump(score, callbackFnc) {
    let color = ["red", "yellow", "blue", "green"][Math.floor(Math.random() * 4)];
    score[color] += 150;
    console.log(`Long Jump: ${color} won`);
    console.log("Score:", score);
    setTimeout(() => {
      HighJump(score, callbackFnc);
    }, 2000);
  }
  
  function HighJump(score, callbackFnc) {
    let color = prompt("What color secured the highest jump?");
    if (color === null || color === "") {
      console.log("Event was cancelled");
    } else if (["red", "yellow", "blue", "green"].includes(color)) {
      score[color] += 100;
    } else {
      console.log("Invalid input");
    }
    console.log("Score:", score);
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    let sorted = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`${sorted[0]} came first with ${score[sorted[0]]} points`);
    console.log(`${sorted[1]} came second with ${score[sorted[1]]} points`);
    console.log(`${sorted[2]} came third with ${score[sorted[2]]} points`);
  }
  
  OpeningCeremony((score) => {
    Race100M(score, (score) => {
      LongJump(score, (score) => {
        HighJump(score, (score) => {
          AwardCeremony(score);
        });
      });
    });
  });