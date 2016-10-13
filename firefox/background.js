/**
 * Returns all of the registered extension commands for this extension
 * and their shortcut (if active).
 *
 * Since there is only one registered command in this sample extension,
 * the returned `commandsArray` will look like the following:
 *    [{
 *       name: "toggle-feature",
 *       description: "Send a 'toggle-feature' event to the extension"
 *       shortcut: "Ctrl+Shift+U"
 *    }]
 */
chrome.commands.getAll(commands => {
  commands.forEach(command => {
    console.log(command);
  });
});

/**
 * Fired when a registered command is activated using a keyboard shortcut.
 *
 * In this sample extension, there is only one registered command: "Ctrl+Shift+U".
 * On Mac, this command will automatically be converted to "Command+Shift+U".
 */
chrome.commands.onCommand.addListener(command => {
  console.log('onCommand event received for message:', command);
});

chrome.browserAction.onClicked.addListener(() => {
  alert(1);
  document.querySelector('canvas').requestFullscreen();
});
