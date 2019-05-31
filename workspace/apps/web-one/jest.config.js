module.exports = {
  name: 'web-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-one/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
