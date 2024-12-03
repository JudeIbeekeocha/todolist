import { renderHeader } from "./components/pageviews/renderHeader.js";
import { renderForms } from "./components/pageviews/renderForms.js";
import { getTaskfromDOM } from "./components/js/getTask.js";
import { progressBar } from "./components/pageviews/progressBar.js";
import { renderTaskGrid } from "./components/pageviews/renderTaskGrid.js";


renderHeader();
renderForms();
progressBar()
renderTaskGrid()


getTaskfromDOM()


// progressBar();
// renderTaskGrid();