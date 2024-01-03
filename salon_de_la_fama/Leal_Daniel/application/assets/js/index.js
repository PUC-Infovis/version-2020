import {
  DATASET_URL,
  IDIOM_WIDTH,
  IDIOM_HEIGHT,
  IDIOM_CONTAINER_ID,
  SEARCHER_CONTAINER_ID,
  SEARCHER_RESULTS_CONTAINER_ID
} from './constants.js';

import { loadData } from './data/fetchers.js';
import LineGraph from './figures/lineGraph.js';
import PasswordsList from './figures/passwordsList.js';

const focus = (datum) => {
  const $searcher = document.getElementById(SEARCHER_CONTAINER_ID);
  $searcher.value = datum.password;
  render([datum]);
}

const IDIOM = new LineGraph(IDIOM_WIDTH, IDIOM_HEIGHT, 'var(--accent)', ['1 GPU', '25 GPUs', 'NSA']);
const PASS_LIST = new PasswordsList(focus);

const render = (dataset) => {
  IDIOM.render(dataset);
  PASS_LIST.render(dataset);
}

const search = (dataset, substring) => {
  if (substring.trim() === '') {
    return dataset;
  }
  const searchString = substring.toLowerCase();
  return dataset.filter((x) => x.password.toLowerCase().includes(searchString));
}

const mountIdiom = () => {
  const $graphContainer = document.getElementById(IDIOM_CONTAINER_ID);
  $graphContainer.appendChild(IDIOM.getContent());
}

const mountPasswordsList = () => {
  const $passwordsListContainer = document.getElementById(SEARCHER_RESULTS_CONTAINER_ID);
  $passwordsListContainer.appendChild(PASS_LIST.getContent());
}

const mountSearcher = (dataset) => {
  const $searcher = document.getElementById(SEARCHER_CONTAINER_ID);
  $searcher.addEventListener('input', (event) => {
    render(search(dataset, event.target.value));
  });
}

const main = async () => {
  const dataset = await loadData(DATASET_URL);

  mountIdiom();
  mountPasswordsList();
  mountSearcher(dataset);

  render(dataset);
}

document.addEventListener('DOMContentLoaded', async () => {
  main();
});
