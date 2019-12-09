module.exports = {
  name: 'lazyloaded-feature',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lazyloaded-feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
