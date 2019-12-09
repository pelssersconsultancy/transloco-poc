module.exports = {
  name: 'lazyloaded-shared-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lazyloaded-shared-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
