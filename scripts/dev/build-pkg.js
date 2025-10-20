#!/usr/bin/env node
const { spawnSync } = require('child_process');

const pkg = process.argv[2]; // e.g., "themed-button"
if (!pkg) {
  console.error('Please provide a package name, e.g., themed-button');
  process.exit(1);
}

// Run turbo directly
const result = spawnSync(
  'turbo',
  ['run', 'build', '--filter=@rms-apps/ui-' + pkg],
  { stdio: 'inherit', shell: true },
);

process.exit(result.status);
