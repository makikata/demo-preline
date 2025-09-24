// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import "preline";

["turbo:load"].forEach((eventName) => {
  window.addEventListener(eventName, () => {
    HSOverlay.autoInit();
  })
});
