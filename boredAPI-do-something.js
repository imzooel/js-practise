doSomething = () => {fetch(`http://www.boredapi.com/api/activity/`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById(`activity`).innerText = data.activity;
  })}

  setInterval(() => {
    doSomething();
  }, 1000);