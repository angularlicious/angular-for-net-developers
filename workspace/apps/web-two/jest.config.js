module.exports = {
  name: 'web-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-two/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
