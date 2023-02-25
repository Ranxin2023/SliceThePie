'use strict'

async function callFetch(url) {
  console.log(url);
  let response = await fetch(url,
  {method: 'GET',mode: 'cors'});
  if (response.status != 200) {
    throw new Error("server refused")
  }
  let data = await (response.json())
  console.log("Here's my data", data)
}

function buttonAction() {
  const url = "https://movies-ajax-server.profamenta.repl.co/getList";
  try {
    let x = callFetch("/getList");
    console.log("Promise?", x);
  }
  catch (e) {
    console.log("fetch failed!", e);
  }
}
