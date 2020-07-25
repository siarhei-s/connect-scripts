// @ts-check

const { initializeMCParams, getAPIRequest } = require('./communication');
const { getAgentProperty, setAgentProperty } = require('./data-store');
const { getJobProperty, setJobProperty } = require('./data-store');
const { updateAgentList, updateJobsPerAgent } = require('./agents');
const { initializeTexting, SendMessage } = require ('./messaging');

//const { getAgentName, isAgentOnline, getAgentJobList } = require('./agents');

setAgentProperty(5, "name", "abc");
setAgentProperty(17, "name", "xyz");
console.log("the name of job 5 is: " + getAgentProperty(5, "name"));

setJobProperty(5, "agents", [1,7,99,2,105]);
setJobProperty(17, "agents", [7,18,42,55]);
setJobProperty(17, "name", "Sales and Marketing Folder");
console.log("the agents in job 5 are: " + getJobProperty(5, "agents"));
console.log("the name of job 17 is: " + getJobProperty(17, "name"));

initializeMCParams("demo29.resilio.com", 8443, "6BZK5YQ6ER72NWP2GB7MYKEGA2AQZUXCCEVU7G7H4JTDGLDRNPMA");
console.log("some fake api response: " + getAPIRequest("/api/v2/jobs"));
-

updateAgentList();

setTimeout(function(){console.log (getAgentProperty(1, "name"));}, 3000);
setTimeout(function(){console.log (getAgentProperty(1, "status"));}, 3000);

updateJobsPerAgent();

setTimeout(function(){console.log (getJobProperty(2, "agents"));}, 3000)

initializeTexting('+12029725018', 'AC538355e6f8d94f8e2867c89d6a7637c4','07b7ca1f0a50ebc2ea8d452d6c13b398');

setTimeout(function(){console.log(SendMessage('+15103652913', 'hello dawg'));}, 3000);



