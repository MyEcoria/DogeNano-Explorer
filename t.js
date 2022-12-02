const xdg = require("superagent");

const payload = {
  "action": "account_info",  
  "account": "xdg_11x47nnqaq1bt73nfgptm87zuu4npwajjhwxesa4mmioja7f54noswse9djq",
  "representative": "true",
  "weight": "true",
  "receivable": "true",
  "include_confirmed": "true"
} 

xdg.post("https://rpc.dogenano.io/proxy", payload).then(res=>{console.log(res._body)})


