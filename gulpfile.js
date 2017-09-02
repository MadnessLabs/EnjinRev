 /////////////////////////////////////
// REQUIRED LIBRARIES
fs           = require('fs');
gulp         = require('gulp');
env          = JSON.parse(fs.readFileSync('enjin.local.json'));
startEnjin   = require(env.enjinPath + 'app/enjin/' + env.stack);

 /////////////////////////////////////
// ON LOAD
startEnjin();
taskDir = process.cwd() + '/' + configJSON.taskDir ? configJSON.taskDir : 'tasks';

 /////////////////////////////////////
// TASKS
require('gulp-require-tasks')({
    path: env.enjinPath + 'app/enjin/' + env.stack + '/tasks',
    gulp: gulp
});

if (fs.existsSync(taskDir)) {
    require('gulp-require-tasks')({
        path: taskDir,
        gulp: gulp
    });
}