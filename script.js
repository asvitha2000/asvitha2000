/* =====================================
   DECORATIVE AGENT ANIMATION
===================================== */

const agent = document.getElementById("agent");

/*
  These coordinates correspond roughly
  to our five spectator nodes.

  x = horizontal percentage
  y = vertical percentage
*/

const destinations = [
  { x: 16, y: 23 },
  { x: 50, y: 14 },
  { x: 84, y: 30 },
  { x: 66, y: 81 },
  { x: 26, y: 70 }
];

let currentDestination = -1;


/*
  Pick one random node.

  We avoid immediately selecting the
  same destination twice.
*/

function chooseDestination() {

  let nextDestination;

  do {

    nextDestination =
      Math.floor(Math.random() * destinations.length);

  } while (
    nextDestination === currentDestination &&
    destinations.length > 1
  );


  currentDestination = nextDestination;

  const destination =
    destinations[currentDestination];


  agent.style.left =
    `${destination.x}%`;

  agent.style.top =
    `${destination.y}%`;

}


/*
  First movement starts after a
  short pause.
*/

setTimeout(chooseDestination, 700);


/*
  Then move somewhere new every
  ~2.2 seconds.
*/

setInterval(
  chooseDestination,
  2200
);



/* =====================================
   TOOL DESCRIPTIONS
===================================== */

const tools = {

  python: {
    number: "01",
    name: "Python",
    description:
      "My primary language for machine learning, quantitative analysis, experimentation, automation, and data-processing pipelines."
  },

  pytorch: {
    number: "02",
    name: "PyTorch",
    description:
      "Used for deep-learning experiments, neural-network development, transformer workflows, and custom machine-learning research."
  },

  sql: {
    number: "03",
    name: "SQL",
    description:
      "Used to explore, transform, join, and analyze structured datasets and build reliable analytical data workflows."
  },

  aws: {
    number: "04",
    name: "AWS",
    description:
      "Used for cloud-based data processing, storage, experimentation, deployment, and scalable machine-learning infrastructure."
  },

  kafka: {
    number: "05",
    name: "Apache Kafka",
    description:
      "Used for streaming architectures and high-volume ingestion pipelines where data needs to move reliably between systems."
  },

  docker: {
    number: "06",
    name: "Docker",
    description:
      "Used to package applications and their dependencies into reproducible environments for development, testing, and deployment."
  },

  mlflow: {
    number: "07",
    name: "MLflow",
    description:
      "Used to organize machine-learning experiments, compare runs, track model parameters and metrics, and improve reproducibility."
  },

  huggingface: {
    number: "08",
    name: "Hugging Face",
    description:
      "Used for transformer-based NLP, pretrained models, text representation, model experimentation, and workflows involving unstructured data."
  }

};


const toolButtons =
  document.querySelectorAll(".tool-button");

const toolName =
  document.getElementById("toolName");

const toolDescription =
  document.getElementById("toolDescription");

const toolNumber =
  document.querySelector(".tool-detail-number");


toolButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedTool =
      button.dataset.tool;

    const information =
      tools[selectedTool];


    /*
      Remove active appearance
      from every button.
    */

    toolButtons.forEach((otherButton) => {
      otherButton.classList.remove("active");
    });


    /*
      Highlight clicked tool.
    */

    button.classList.add("active");


    /*
      Change description.
    */

    toolNumber.textContent =
      `TOOL / ${information.number}`;

    toolName.textContent =
      information.name;

    toolDescription.textContent =
      information.description;

  });

});
