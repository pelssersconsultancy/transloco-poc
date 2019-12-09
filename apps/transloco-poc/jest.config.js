module.exports = {
  name: 'transloco-poc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/transloco-poc',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
