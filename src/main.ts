
import * as core from '@actions/core';
import {wait}    from './wait';





function timestring() {
  return new Date().toTimeString();
}





async function run(): Promise<void> {

  try {
    const ms: number = parseInt(core.getInput('milliseconds'), 10);

    core.debug(`Waiting ${ms} milliseconds ...`);
    core.debug(timestring());

    await wait(ms);
    core.debug(timestring());
    core.setOutput('time', timestring());

  } catch (error) {
    core.setFailed(error.message);
  }

}





run();
