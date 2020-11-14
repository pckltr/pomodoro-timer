if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW registered");
    })
    .catch((error) => {
      console.log("SW registration failed!");
      console.log(error);
    });
} else {
  const outputEl = document.getElementById("output");
  outputEl.value = "Application not supported. Sorry! :(";
}
