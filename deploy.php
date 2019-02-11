<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', 'git@github.com:atsukoloveone/ReactProdoct.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server
set('writable_dirs', []);


// Hosts

//host('project.com')
//    ->set('deploy_path', '~/{{application}}');

host('loveserve')
  ->stage('test_server')
  ->set('deploy_path', '/home/atsuko/sites/loveserve.test3/');
// Tasks

set('copy_dirs', [
  'api',
]);

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);
task('test', function () {
    writeln('Hello world');
});

task('pwd', function () {
    $result = run('pwd');
    writeln("Current dir: $result");
});


task('deploy:upload', function() {
    $files = get('copy_dirs');
    //$releasePath = get('release_path');
    $deploy_path = get('deploy_path');

    foreach ($files as $file)
    {
        upload($file, "{$deploy_path}/");
    }
});
// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
